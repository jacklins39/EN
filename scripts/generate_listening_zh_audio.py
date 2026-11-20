#!/usr/bin/env python3
"""
Generate 100% real-human Edge-TTS 32k mono MP3s (zh-TW-HsiaoChenNeural) for:
  1. All listening article sentence translations (listeningArticlesDB[].sentences[].zh)
  2. All listening grammar example translations (listeningArticlesDB[].grammar[].exampleZh)

Outputs to F:\\EN-audio-zh\\audio\\listening_zh\\lz_<sha1>.mp3
(linked via NTFS junction F:\\EN\\audio\\listening_zh)
and updates window.LISTENING_ZH_AUDIO_MANIFEST in F:\\EN\\collocations_audio_manifest.js
while preserving COLLOCATIONS_AUDIO_MANIFEST and GRAMMAR_AUDIO_MANIFEST.
"""
import argparse
import asyncio
import concurrent.futures
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

import edge_tts
import imageio_ffmpeg

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

ROOT = Path(r"f:\EN")
ZH_REPO = Path(r"F:\EN-audio-zh")
TARGET_DIR = ZH_REPO / "audio" / "listening_zh"
LOCAL_JUNCTION = ROOT / "audio" / "listening_zh"
MANIFEST_PATH = ROOT / "collocations_audio_manifest.js"

ZH_VOICE = "zh-TW-HsiaoChenNeural"
FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()


def normalize_zh_key(text: str) -> str:
    return re.sub(r"\s+", " ", str(text or "")).strip()


def clean_zh_for_speech(text: str) -> str:
    s = normalize_zh_key(text)
    # Strip parenthesized ASCII-only brand names like （Apex Media） so Taiwanese narration stays fluent
    s = re.sub(r"[\(（][A-Za-z0-9\s.,'\-&/]+[\)）]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def hash_filename(key: str) -> str:
    digest = hashlib.sha1(key.encode("utf-8")).hexdigest()[:10]
    return f"lz_{digest}.mp3"


def ensure_junction() -> None:
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    if not LOCAL_JUNCTION.exists():
        cmd = ["cmd", "/c", "mklink", "/J", str(LOCAL_JUNCTION), str(TARGET_DIR)]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            raise RuntimeError(f"Failed creating junction {LOCAL_JUNCTION} -> {TARGET_DIR}: {res.stderr or res.stdout}")
        print(f"Created NTFS junction: {LOCAL_JUNCTION} -> {TARGET_DIR}")


def extract_unique_zh_targets() -> list[dict[str, str]]:
    js_probe = r'''
const fs = require("fs"), vm = require("vm");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("f:/EN/listening_data.js", "utf8") + "\n;var _A = listeningArticlesDB;", ctx);
const out = [];
for (const art of ctx._A) {
  for (const s of (art.sentences || [])) {
    if (s && s.zh && String(s.zh).trim()) out.push(String(s.zh));
  }
  for (const g of (art.grammar || [])) {
    if (g && g.exampleZh && String(g.exampleZh).trim()) out.push(String(g.exampleZh));
  }
}
console.log(JSON.stringify(out));
'''
    raw = subprocess.check_output(["node", "-"], input=js_probe, text=True, encoding="utf-8")
    texts = json.loads(raw)
    seen: dict[str, dict[str, str]] = {}
    for t in texts:
        key = normalize_zh_key(t)
        if not key or key in seen:
            continue
        speech = clean_zh_for_speech(key) or key
        fname = hash_filename(key)
        seen[key] = {
            "key": key,
            "speech": speech,
            "filename": fname,
            "relPath": f"audio/listening_zh/{fname}",
        }
    return list(seen.values())


def transcode_to_32k_file(raw_bytes: bytes, dest_path: Path) -> int:
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = dest_path.with_suffix(".tmp.mp3")
    cmd = [
        FFMPEG_EXE,
        "-y",
        "-loglevel",
        "error",
        "-i",
        "pipe:0",
        "-ar",
        "24000",
        "-ac",
        "1",
        "-b:a",
        "32k",
        "-f",
        "mp3",
        str(tmp_path),
    ]
    res = subprocess.run(cmd, input=raw_bytes, capture_output=True)
    if res.returncode != 0 or not tmp_path.exists() or tmp_path.stat().st_size <= 256:
        if tmp_path.exists():
            try:
                tmp_path.unlink()
            except OSError:
                pass
        raise RuntimeError(f"ffmpeg failed for {dest_path.name}: {res.stderr.decode(errors='ignore')}")
    os.replace(str(tmp_path), str(dest_path))
    return dest_path.stat().st_size


async def synth_one(
    text: str,
    dest_path: Path,
    sem: asyncio.Semaphore,
    pool: concurrent.futures.ThreadPoolExecutor,
    max_retries: int = 4,
) -> tuple[bool, int]:
    if dest_path.exists() and dest_path.stat().st_size > 256:
        return True, 0
    loop = asyncio.get_running_loop()
    last_err = None
    for attempt in range(max_retries):
        try:
            async with sem:
                comm = edge_tts.Communicate(text, ZH_VOICE)
                buf = bytearray()
                async for chunk in comm.stream():
                    if chunk["type"] == "audio":
                        buf.extend(chunk["data"])
                raw_bytes = bytes(buf)
                if len(raw_bytes) <= 256:
                    raise RuntimeError(f"Empty audio payload ({len(raw_bytes)}B) for {text!r}")
            out_bytes = await loop.run_in_executor(pool, transcode_to_32k_file, raw_bytes, dest_path)
            return True, out_bytes
        except Exception as exc:
            last_err = exc
            await asyncio.sleep(0.5 * (2 ** attempt))
    print(f"[FAIL] {dest_path.name} ({text!r}): {last_err}")
    return False, 0


async def run_batch(targets: list[dict[str, str]], concurrency: int) -> None:
    pending = [
        item for item in targets
        if not ((TARGET_DIR / item["filename"]).exists() and (TARGET_DIR / item["filename"]).stat().st_size > 256)
    ]
    print(f"Total unique listening/grammar Chinese texts: {len(targets)} | Cached: {len(targets) - len(pending)} | Pending: {len(pending)}")
    if not pending:
        return
    sem = asyncio.Semaphore(concurrency)
    pool = concurrent.futures.ThreadPoolExecutor(max_workers=8)
    t0 = time.time()
    done = 0
    ok = 0
    fail = 0
    total_bytes = 0

    async def worker(item: dict[str, str]) -> tuple[bool, int]:
        return await synth_one(item["speech"], TARGET_DIR / item["filename"], sem, pool)

    try:
        tasks = [asyncio.create_task(worker(item)) for item in pending]
        for fut in asyncio.as_completed(tasks):
            success, sz = await fut
            done += 1
            if success:
                ok += 1
                total_bytes += sz
            else:
                fail += 1
            if done % 50 == 0 or done == len(pending):
                elapsed = max(0.01, time.time() - t0)
                print(f"  progress: {done}/{len(pending)} | ok={ok} fail={fail} | +{total_bytes / 1048576:.2f} MB | {done / elapsed:.1f}/s")
    finally:
        pool.shutdown(wait=True)

    if fail > 0:
        raise RuntimeError(f"{fail} audio syntheses failed")


def update_manifest(targets: list[dict[str, str]]) -> dict[str, int]:
    raw = MANIFEST_PATH.read_text(encoding="utf-8")
    m_col = re.search(r"window\.COLLOCATIONS_AUDIO_MANIFEST\s*=\s*new Map\(Object\.entries\((\{[\s\S]*?\})\)\);", raw)
    m_gram = re.search(r"window\.GRAMMAR_AUDIO_MANIFEST\s*=\s*new Map\(Object\.entries\((\{[\s\S]*?\})\)\);", raw)
    if not m_col or not m_gram:
        raise RuntimeError("Could not parse existing COLLOCATIONS_AUDIO_MANIFEST / GRAMMAR_AUDIO_MANIFEST")
    col_entries = json.loads(m_col.group(1))
    gram_entries = json.loads(m_gram.group(1))

    lzh_entries: dict[str, str] = {}
    for item in targets:
        dest = TARGET_DIR / item["filename"]
        if dest.exists() and dest.stat().st_size > 256:
            lzh_entries[item["key"]] = item["relPath"]

    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        f.write("window.COLLOCATIONS_AUDIO_MANIFEST = new Map(Object.entries(")
        f.write(json.dumps(col_entries, ensure_ascii=False, indent=2))
        f.write("));\n")
        f.write("window.GRAMMAR_AUDIO_MANIFEST = new Map(Object.entries(")
        f.write(json.dumps(gram_entries, ensure_ascii=False, indent=2))
        f.write("));\n")
        f.write("window.LISTENING_ZH_AUDIO_MANIFEST = new Map(Object.entries(")
        f.write(json.dumps(lzh_entries, ensure_ascii=False, indent=2))
        f.write("));\n")

    return {
        "collocations": len(col_entries),
        "grammar": len(gram_entries),
        "listening_zh": len(lzh_entries),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--concurrency", type=int, default=10)
    parser.add_argument("--manifest-only", action="store_true")
    args = parser.parse_args()

    ensure_junction()
    targets = extract_unique_zh_targets()
    if not args.manifest_only:
        asyncio.run(run_batch(targets, concurrency=args.concurrency))
    stats = update_manifest(targets)
    print("Manifest updated:", json.dumps(stats, ensure_ascii=False))


if __name__ == "__main__":
    main()
