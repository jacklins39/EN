#!/usr/bin/env python3
"""
Generate 100% real-human Edge-TTS 32k mono MP3s across all remaining site gaps:
  - Missing collocations (e.g. "catch one's eye") -> EN-audio-zh/audio/collocations/
  - Unbacked grammar examples -> EN-audio-examples/audio/examples/grammar/
  - All 10,082 unique Chinese example translations -> EN-audio-zh/audio/example_zh/
  - All missing English words/forms/syn-ant/tokens -> EN-audio-words/audio/words/{us,uk}/

Strictly uses Microsoft Edge-TTS neural voices (zero external generative APIs).
Outputs 24kHz mono 32kbps MP3s directly matching the 3-bucket CDN compression spec.
"""
import argparse
import asyncio
import concurrent.futures
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
WORDS_REPO = Path(r"F:\EN-audio-words")
EXAMPLES_REPO = Path(r"F:\EN-audio-examples")
ZH_REPO = Path(r"F:\EN-audio-zh")

TARGETS_JSON = ROOT / "tmp" / "audio_gap_targets.json"
FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()

US_VOICE = "en-US-JennyNeural"
UK_VOICE = "en-GB-RyanNeural"
ZH_VOICE = "zh-TW-HsiaoChenNeural"


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


async def synth_and_save(
    text: str,
    voice: str,
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
                comm = edge_tts.Communicate(text, voice)
                buf = bytearray()
                async for chunk in comm.stream():
                    if chunk["type"] == "audio":
                        buf.extend(chunk["data"])
                raw_bytes = bytes(buf)
                if len(raw_bytes) <= 256:
                    raise RuntimeError(f"Empty TTS payload ({len(raw_bytes)}B) for {text!r}")
            out_bytes = await loop.run_in_executor(pool, transcode_to_32k_file, raw_bytes, dest_path)
            return True, out_bytes
        except Exception as exc:
            last_err = exc
            await asyncio.sleep(0.5 * (2 ** attempt))

    print(f"[FAIL] {dest_path.name} ({text!r}): {last_err}")
    return False, 0


def build_jobs(data: dict, phase: str) -> list[tuple[str, str, Path]]:
    jobs: list[tuple[str, str, Path]] = []

    if phase in ("quick", "all"):
        for item in data.get("collocations", []):
            dest = ZH_REPO / "audio" / "collocations" / item["filename"]
            jobs.append((item["speech"], US_VOICE, dest))

        for item in data.get("grammar", []):
            dest = EXAMPLES_REPO / "audio" / "examples" / "grammar" / item["filename"]
            jobs.append((item["speech"], US_VOICE, dest))

        for item in data.get("words", []):
            if item.get("tag") not in ("syn_ant", "article", "uk_gap"):
                continue
            speech = item["speech"].replace("&", " and ")
            key = item["key"]
            if re.match(r"^(con|prn|aux|nul|com[1-9]|lpt[1-9])$", key, re.I):
                key += "_"
            if item.get("us"):
                jobs.append((speech, US_VOICE, WORDS_REPO / "audio" / "words" / "us" / f"{key}.mp3"))
            if item.get("uk"):
                jobs.append((speech, UK_VOICE, WORDS_REPO / "audio" / "words" / "uk" / f"{key}.mp3"))

    if phase in ("example_zh", "all"):
        for item in data.get("example_zh", {}).get("canonicals", []):
            dest = ZH_REPO / "audio" / "example_zh" / f"{item['id']}.mp3"
            jobs.append((item["text"], ZH_VOICE, dest))

    if phase in ("words_rest", "all"):
        for item in data.get("words", []):
            if item.get("tag") in ("syn_ant", "article", "uk_gap"):
                continue
            speech = item["speech"].replace("&", " and ")
            key = item["key"]
            if re.match(r"^(con|prn|aux|nul|com[1-9]|lpt[1-9])$", key, re.I):
                key += "_"
            if item.get("us"):
                jobs.append((speech, US_VOICE, WORDS_REPO / "audio" / "words" / "us" / f"{key}.mp3"))
            if item.get("uk"):
                jobs.append((speech, UK_VOICE, WORDS_REPO / "audio" / "words" / "uk" / f"{key}.mp3"))

    return jobs


def rebuild_manifests(data: dict) -> dict[str, int]:
    # 1. words_audio_manifest.js
    us_dir = WORDS_REPO / "audio" / "words" / "us"
    uk_dir = WORDS_REPO / "audio" / "words" / "uk"
    us_keys = sorted(
        f[:-4].lower() for f in os.listdir(us_dir) if f.endswith(".mp3") and (us_dir / f).stat().st_size > 256
    )
    uk_keys = sorted(
        f[:-4].lower() for f in os.listdir(uk_dir) if f.endswith(".mp3") and (uk_dir / f).stat().st_size > 256
    )
    words_manifest_path = ROOT / "words_audio_manifest.js"
    # Compact shared array when US & UK are nearly identical keeps bundle smaller while maintaining identical Set API
    us_set = set(us_keys)
    uk_set = set(uk_keys)
    common = sorted(us_set & uk_set)
    only_us = sorted(us_set - uk_set)
    only_uk = sorted(uk_set - us_set)
    with open(words_manifest_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated real human voice audio manifest (US Female & UK Male)\n")
        f.write("(function(){\n")
        f.write("  const _common = " + json.dumps(common, ensure_ascii=False) + ";\n")
        if only_us:
            f.write("  window.WORDS_AUDIO_MANIFEST_US = new Set(_common.concat(" + json.dumps(only_us, ensure_ascii=False) + "));\n")
        else:
            f.write("  window.WORDS_AUDIO_MANIFEST_US = new Set(_common);\n")
        if only_uk:
            f.write("  window.WORDS_AUDIO_MANIFEST_UK = new Set(_common.concat(" + json.dumps(only_uk, ensure_ascii=False) + "));\n")
        else:
            f.write("  window.WORDS_AUDIO_MANIFEST_UK = new Set(_common);\n")
        f.write("  window.WORDS_AUDIO_MANIFEST = window.WORDS_AUDIO_MANIFEST_US;\n")
        f.write("})();\n")

    # 2. collocations_audio_manifest.js (+ GRAMMAR_AUDIO_MANIFEST)
    col_path = ROOT / "collocations_audio_manifest.js"
    col_raw = col_path.read_text(encoding="utf-8")
    m = re.search(r"new Map\(Object\.entries\((\{[\s\S]*?\})\)\);", col_raw)
    col_entries = json.loads(m.group(1)) if m else {}
    for item in data.get("collocations", []):
        dest = ZH_REPO / "audio" / "collocations" / item["filename"]
        if dest.exists() and dest.stat().st_size > 256:
            col_entries[item["key"]] = item["relPath"]

    m_lzh = re.search(r"window\.LISTENING_ZH_AUDIO_MANIFEST\s*=\s*new Map\(Object\.entries\((\{[\s\S]*?\})\)\);", col_raw)
    lzh_entries = json.loads(m_lzh.group(1)) if m_lzh else {}

    gram_entries = {}
    for item in data.get("grammar", []):
        dest = EXAMPLES_REPO / "audio" / "examples" / "grammar" / item["filename"]
        if dest.exists() and dest.stat().st_size > 256:
            gram_entries[item["key"]] = item["relPath"]

    with open(col_path, "w", encoding="utf-8") as f:
        f.write("window.COLLOCATIONS_AUDIO_MANIFEST = new Map(Object.entries(")
        f.write(json.dumps(col_entries, ensure_ascii=False, indent=2))
        f.write("));\n")
        f.write("window.GRAMMAR_AUDIO_MANIFEST = new Map(Object.entries(")
        f.write(json.dumps(gram_entries, ensure_ascii=False, indent=2))
        f.write("));\n")
        if lzh_entries:
            f.write("window.LISTENING_ZH_AUDIO_MANIFEST = new Map(Object.entries(")
            f.write(json.dumps(lzh_entries, ensure_ascii=False, indent=2))
            f.write("));\n")

    # 3. example_zh_audio_manifest.js
    ez_dir = ZH_REPO / "audio" / "example_zh"
    avail_canon = set()
    if ez_dir.exists():
        for fname in os.listdir(ez_dir):
            if fname.endswith(".mp3") and (ez_dir / fname).stat().st_size > 256:
                try:
                    avail_canon.add(int(fname[:-4]))
                except ValueError:
                    pass
    aliases = {
        int(k): int(v)
        for k, v in data.get("example_zh", {}).get("aliases", {}).items()
        if int(v) in avail_canon
    }
    ez_manifest_path = ROOT / "example_zh_audio_manifest.js"
    with open(ez_manifest_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated Edge-TTS zh-TW-HsiaoChenNeural example translation manifest\n")
        f.write("window.EXAMPLE_ZH_AUDIO_MANIFEST = new Set(")
        f.write(json.dumps(sorted(avail_canon)))
        f.write(");\n")
        f.write("window.EXAMPLE_ZH_AUDIO_ALIAS = new Map(")
        f.write(json.dumps([[k, v] for k, v in sorted(aliases.items())]))
        f.write(");\n")

    return {
        "us_words": len(us_keys),
        "uk_words": len(uk_keys),
        "collocations": len(col_entries),
        "grammar": len(gram_entries),
        "example_zh_canon": len(avail_canon),
        "example_zh_aliases": len(aliases),
    }


async def run_jobs(jobs: list[tuple[str, str, Path]], concurrency: int) -> None:
    pending = [(t, v, d) for (t, v, d) in jobs if not (d.exists() and d.stat().st_size > 256)]
    print(f"Total jobs in phase: {len(jobs)} | Already present: {len(jobs) - len(pending)} | Pending: {len(pending)}")
    if not pending:
        return

    sem = asyncio.Semaphore(concurrency)
    pool = concurrent.futures.ThreadPoolExecutor(max_workers=12)
    t0 = time.time()
    done = 0
    ok = 0
    fail = 0
    total_bytes = 0

    try:
        # Process in chunks to emit clean progress every ~500 tracks without memory bloat
        chunk_size = 500
        for i in range(0, len(pending), chunk_size):
            chunk = pending[i : i + chunk_size]
            res = await asyncio.gather(*(synth_and_save(t, v, d, sem, pool) for t, v, d in chunk))
            for is_ok, b in res:
                done += 1
                if is_ok:
                    ok += 1
                    total_bytes += b
                else:
                    fail += 1
            elapsed = max(0.01, time.time() - t0)
            rate = done / elapsed
            eta = (len(pending) - done) / max(0.1, rate)
            print(
                f"  [{done}/{len(pending)}] ok={ok} fail={fail} | {rate:.1f} tracks/s | "
                f"+{total_bytes / (1024*1024):.2f} MB | ETA {eta/60:.1f}m"
            )
    finally:
        pool.shutdown(wait=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--phase", choices=["quick", "example_zh", "words_rest", "all", "manifests"], required=True)
    parser.add_argument("--concurrency", type=int, default=35)
    args = parser.parse_args()

    data = json.loads(TARGETS_JSON.read_text(encoding="utf-8"))
    if args.phase != "manifests":
        jobs = build_jobs(data, args.phase)
        asyncio.run(run_jobs(jobs, args.concurrency))

    stats = rebuild_manifests(data)
    print("Manifests rebuilt:", json.dumps(stats))


if __name__ == "__main__":
    main()
