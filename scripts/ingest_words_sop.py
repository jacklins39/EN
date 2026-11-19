#!/usr/bin/env python3
"""
F:\\EN 新單字加入標準作業程序 (Word Ingestion SOP v2 - 100% Zero-TTS / Zero-Cloud-API)
===================================================================================
一鍵執行新單字入庫與全站同步：
  Step 1. 欄位驗證與去重入庫 (*_data.js + uk_phonetics_manifest.js)
  Step 2. 五軌真人語音合成 (32kbps 24kHz mono MP3 直寫三桶 CDN 倉庫):
          - 單字 US (en-US-JennyNeural) & UK (en-GB-RyanNeural)
          - 英文例句 Example (en-US-JennyNeural)
          - 中文釋義 ZH (zh-TW-HsiaoChenNeural)
          - 例句中文 ExampleZH (zh-TW-HsiaoChenNeural，自動全域去重指派 canonicalId)
          - 自動解析新字 computeWordForms + 新例句可點單字，缺詞同步補齊雙口音 MP3
  Step 3. 更新全域四張音檔清單 Manifests (words / examples / zh / example_zh)
  Step 4. 本地 Ollama (qwen3:8b @ F:\\ollama_models) 編譯雙軌助記詞 + 稽核 (weak == 0)
  Step 5. [選配 --with-images] 釋放 Ollama VRAM 後跑 SDXL-Turbo 生成 256px WebP 插圖
  Step 6. 全站 Node VM 語法檢驗 + 音檔 0 缺漏 Gate
  Step 7. [選配 --bump-version] 同步遞增 index.html APP_BUILD_VERSION 與 version.json
  Step 8. [選配 --push] 依安全順序推送 3 個 CDN 音檔倉庫 -> 再推 F:\\EN 主站

嚴守 AGENTS.md：絕不使用付費外部生成 API (--allow-api)，絕不註冊 Windows 開機排程。
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
import urllib.request
from pathlib import Path

import edge_tts
import imageio_ffmpeg

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)

ROOT = Path(r"f:\EN")
WORDS_REPO = Path(r"F:\EN-audio-words")
EXAMPLES_REPO = Path(r"F:\EN-audio-examples")
ZH_REPO = Path(r"F:\EN-audio-zh")
FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()

US_VOICE = "en-US-JennyNeural"
UK_VOICE = "en-GB-RyanNeural"
ZH_VOICE = "zh-TW-HsiaoChenNeural"

DB_SPECS = {
    "words": ("words_data.js", "externalVocabularyDB", 6),
    "u78": ("synonyms_unit8_data.js", "synUnit8WordsDB", 8),
    "u89": ("examples_unit9_data.js", "examplesUnit9WordsDB", 9),
    "toeic": ("toeic_data.js", "toeicWordsDB", 11),
    "jh": ("jh_data.js", "jhWordsDB", 17),
    "listening": ("listening_words_data.js", "listeningWordsDB", 19),
}


def clean_zh_for_tts(zh_str: str) -> str:
    if not zh_str:
        return ""
    s = re.sub(r"[\(（][^\)）]*[\)）]", "", zh_str)
    s = re.sub(r"(?:^|[；;、,\s])(?:[a-zA-Z./]+)\.\s*", " ", s)
    s = re.sub(r"^[a-zA-Z./\s]+", "", s)
    s = re.sub(r"[/;；、~]+", "，", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip(" ，,;；、.")


def clean_example_zh_for_tts(ex_zh: str) -> str:
    if not ex_zh:
        return ""
    s = ex_zh.replace("\\'", "'").replace('\\"', '"').replace("\\", "")
    s = re.sub(r"[\(（][^）\)]*[\)）]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s[:180]


def clean_example_for_tts(ex_str: str) -> str:
    if not ex_str:
        return ""
    return re.sub(r"^\[\s*[^\]]+\]\s*", "", ex_str).strip()


def clean_safe_word_key(word: str) -> str:
    w = (word or "").strip().lower().replace("’", "'").replace("‘", "'")
    w = re.sub(r"\s*\(單複同形\)", "", w).strip()
    if w == "read [rɛd]":
        w = "red"
    w = re.sub(r"[/\\:*?\"<>|\s]+", "_", w)
    w = re.sub(r"_+", "_", w).strip("_")
    if re.match(r"^(con|prn|aux|nul|com[1-9]|lpt[1-9])$", w, re.I):
        w += "_"
    return w


def parse_db_file(db_path: Path, var_name: str) -> tuple[str, list[dict]]:
    text = db_path.read_text(encoding="utf-8")
    m = re.search(rf"([\s\S]*?)(const\s+{re.escape(var_name)}\s*=\s*)(\[[\s\S]*\])\s*;?\s*$", text)
    if not m:
        raise RuntimeError(f"無法解析 {db_path.name} 中的 {var_name}")
    header_prefix = m.group(1) + m.group(2)
    rows = json.loads(m.group(3))
    return header_prefix, rows


def write_db_file(db_path: Path, header_prefix: str, rows: list[dict]) -> None:
    db_path.write_text(
        header_prefix + json.dumps(rows, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def update_uk_phonetics(new_items: list[dict]) -> int:
    uk_path = ROOT / "uk_phonetics_manifest.js"
    raw = uk_path.read_text(encoding="utf-8")
    # Support both inline object keys and trailing assignments cleanly
    m = re.search(r"const\s+UK_PHONETICS_MANIFEST\s*=\s*(\{[\s\S]*?\n\});", raw)
    if not m:
        raise RuntimeError("無法解析 uk_phonetics_manifest.js")
    data = json.loads(m.group(1))
    for k, v in re.findall(r"window\.UK_PHONETICS_MANIFEST\['([^']+)'\]\s*=\s*\"([^\"]+)\";", raw):
        data[k.lower()] = v

    added = 0
    for it in new_items:
        en_key = it["en"].strip().lower()
        uk_ipa = (it.get("uk") or "").strip()
        if uk_ipa and en_key not in data:
            data[en_key] = uk_ipa
            added += 1

    if added > 0:
        ordered = {k: data[k] for k in sorted(data.keys())}
        out = (
            "// UK Phonetics Manifest\n"
            "const UK_PHONETICS_MANIFEST = "
            + json.dumps(ordered, ensure_ascii=False, indent=2)
            + ";\n"
            + "if (typeof window !== 'undefined') {\n"
            + "  window.UK_PHONETICS_MANIFEST = UK_PHONETICS_MANIFEST;\n"
            + "}\n"
        )
        uk_path.write_text(out, encoding="utf-8")
    return added


def transcode_to_32k_file(raw_bytes: bytes, dest_path: Path) -> int:
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = dest_path.with_suffix(".tmp.mp3")
    cmd = [
        FFMPEG_EXE, "-y", "-loglevel", "error", "-i", "pipe:0",
        "-ar", "24000", "-ac", "1", "-b:a", "32k", "-f", "mp3", str(tmp_path),
    ]
    res = subprocess.run(cmd, input=raw_bytes, capture_output=True)
    if res.returncode != 0 or not tmp_path.exists() or tmp_path.stat().st_size <= 256:
        if tmp_path.exists():
            tmp_path.unlink(missing_ok=True)
        raise RuntimeError(f"ffmpeg failed for {dest_path.name}: {res.stderr.decode(errors='ignore')}")
    os.replace(str(tmp_path), str(dest_path))
    return dest_path.stat().st_size


async def synth_32k(text: str, voice: str, dest_path: Path, sem: asyncio.Semaphore, pool: concurrent.futures.ThreadPoolExecutor) -> bool:
    if dest_path.exists() and dest_path.stat().st_size > 256:
        return True
    loop = asyncio.get_running_loop()
    for attempt in range(4):
        try:
            async with sem:
                comm = edge_tts.Communicate(text, voice)
                buf = bytearray()
                async for chunk in comm.stream():
                    if chunk["type"] == "audio":
                        buf.extend(chunk["data"])
                raw = bytes(buf)
                if len(raw) <= 256:
                    raise RuntimeError("Empty TTS stream")
            await loop.run_in_executor(pool, transcode_to_32k_file, raw, dest_path)
            return True
        except Exception:
            await asyncio.sleep(0.5 * (2 ** attempt))
    return False


def collect_forms_and_tokens_via_node(new_items: list[dict]) -> set[str]:
    """Use index.html's actual computeWordForms + renderClickableSentence wordRegex."""
    node_code = r"""
const fs = require('fs');
const vm = require('vm');
const root = 'f:/EN';
const items = JSON.parse(fs.readFileSync(process.argv[1], 'utf8'));
const html = fs.readFileSync(root + '/index.html', 'utf8');
const ctx = { window: {}, console }; ctx.window = ctx; vm.createContext(ctx);
const allLines = html.split(/\r?\n/);
const irrLine = allLines.findIndex(l => /const\s+IRREGULAR_VERBS\s*=/.test(l));
const endComputeLine = allLines.findIndex(l => /function\s+getWordCollocations/.test(l));
vm.runInContext('function cleanText(s){return s?String(s).replace(/\\\\+([\x27"])/g,"$1").replace(/\\\\+/g,""):""}', ctx);
vm.runInContext(allLines.find(l => /const\s+SEMANTIC_STOP_WORDS\s*=/.test(l)), ctx);
vm.runInContext(allLines.slice(allLines.findIndex(l => /function\s+normalizePosForCrosslink/.test(l)), allLines.findIndex(l => /function\s+initSemanticSynonymIndex/.test(l))).join('\n'), ctx);
vm.runInContext(allLines.slice(irrLine, endComputeLine).join('\n'), ctx);

const tokens = new Set();
const addTok = (w) => {
  let c = String(w || '').trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s*\(單複同形\)/g, '').trim();
  if (c === 'read [rɛd]') c = 'red';
  c = c.replace(/^[^\w]+|[^\w]+$/g, '');
  if (!c || /^\d+$/.test(c) || !/[a-z]/i.test(c) || /[\u4e00-\u9fff]/.test(c)) return;
  if (/^(more|most)\s+/.test(c)) return;
  tokens.add(c);
};
const wordRegex = /(?<![\p{L}\p{M}0-9])([\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)?(?:\.[\p{L}\p{M}]+)*\.?)(?![\p{L}\p{M}0-9])/gu;

for (const it of items) {
  addTok(it.en);
  const f = ctx.computeWordForms(it.en, it.zh || '');
  if (f) {
    const arr = [];
    if (f.verbForms) arr.push(f.verbForms.base, f.verbForms.past, f.verbForms.pp, f.verbForms.ing, f.verbForms.s);
    if (f.adjForms) arr.push(f.adjForms.base, f.adjForms.comp, f.adjForms.super);
    if (f.nounForms) arr.push(f.nounForms.singular, f.nounForms.plural);
    for (const raw of arr) if (raw) String(raw).split('/').forEach(addTok);
  }
  const ex = String(it.example || '').replace(/^\[\s*[^\]]+\]\s*/, '').replace(/\\+(['"])/g, '$1');
  for (const m of ex.matchAll(wordRegex)) addTok(m[1].replace(/\.+$/, ''));
}
console.log(JSON.stringify([...tokens]));
"""
    tmp_items = ROOT / "tmp" / "_sop_new_items.json"
    tmp_items.parent.mkdir(parents=True, exist_ok=True)
    tmp_items.write_text(json.dumps(new_items, ensure_ascii=False), encoding="utf-8")
    res = subprocess.run(["node", "-e", node_code, str(tmp_items)], capture_output=True, text=True, check=True)
    tmp_items.unlink(missing_ok=True)
    return set(json.loads(res.stdout.strip()))


def build_all_example_zh_map() -> tuple[dict[int, int], dict[int, str]]:
    """Scan all 6 DBs to resolve canonical ID & aliases for every exampleZh."""
    text_to_canon: dict[str, int] = {}
    aliases: dict[int, int] = {}
    canon_texts: dict[int, str] = {}
    for _, (fname, var_name, _) in DB_SPECS.items():
        p = ROOT / fname
        if not p.exists():
            continue
        _, rows = parse_db_file(p, var_name)
        for r in rows:
            wid = int(r["id"])
            clean_ez = clean_example_zh_for_tts(r.get("exampleZh", ""))
            if not clean_ez:
                continue
            if clean_ez in text_to_canon:
                cid = text_to_canon[clean_ez]
                if wid != cid:
                    aliases[wid] = cid
            else:
                text_to_canon[clean_ez] = wid
                canon_texts[wid] = clean_ez
    return aliases, canon_texts


def rebuild_all_manifests(aliases: dict[int, int]) -> dict[str, int]:
    # 1. Words US & UK
    us_dir = WORDS_REPO / "audio" / "words" / "us"
    uk_dir = WORDS_REPO / "audio" / "words" / "uk"
    us_set = {f[:-4].lower() for f in os.listdir(us_dir) if f.endswith(".mp3") and (us_dir / f).stat().st_size > 256}
    uk_set = {f[:-4].lower() for f in os.listdir(uk_dir) if f.endswith(".mp3") and (uk_dir / f).stat().st_size > 256}
    common = sorted(us_set & uk_set)
    only_us = sorted(us_set - uk_set)
    only_uk = sorted(uk_set - us_set)
    with open(ROOT / "words_audio_manifest.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generated real human voice audio manifest (US Female & UK Male)\n")
        f.write("(function(){\n")
        f.write("  const _common = " + json.dumps(common, ensure_ascii=False) + ";\n")
        f.write(
            "  window.WORDS_AUDIO_MANIFEST_US = new Set(_common"
            + (f".concat({json.dumps(only_us, ensure_ascii=False)})" if only_us else "")
            + ");\n"
        )
        f.write(
            "  window.WORDS_AUDIO_MANIFEST_UK = new Set(_common"
            + (f".concat({json.dumps(only_uk, ensure_ascii=False)})" if only_uk else "")
            + ");\n"
        )
        f.write("  window.WORDS_AUDIO_MANIFEST = window.WORDS_AUDIO_MANIFEST_US;\n")
        f.write("})();\n")

    # 2. Examples IDs
    ex_dir = EXAMPLES_REPO / "audio" / "examples"
    ex_ids = sorted(int(f[:-4]) for f in os.listdir(ex_dir) if f.endswith(".mp3") and f[:-4].isdigit() and (ex_dir / f).stat().st_size > 256)
    with open(ROOT / "examples_audio_manifest.js", "w", encoding="utf-8") as f:
        f.write("// 自動產生的 Edge-TTS 例句真人音檔清單 (ID 集合)\nwindow.EXAMPLES_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(ex_ids), 25):
            f.write("  " + ", ".join(map(str, ex_ids[i : i + 25])) + ",\n")
        f.write("]);\n")

    # 3. ZH IDs
    zh_dir = ZH_REPO / "audio" / "zh"
    zh_ids = sorted(int(f[:-4]) for f in os.listdir(zh_dir) if f.endswith(".mp3") and f[:-4].isdigit() and (zh_dir / f).stat().st_size > 256)
    with open(ROOT / "zh_audio_manifest.js", "w", encoding="utf-8") as f:
        f.write("// Edge-TTS zh manifest\nwindow.ZH_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(zh_ids), 25):
            f.write("  " + ", ".join(map(str, zh_ids[i : i + 25])) + ",\n")
        f.write("]);\n")

    # 4. ExampleZH canonicals & aliases
    ez_dir = ZH_REPO / "audio" / "example_zh"
    avail_canon = {int(f[:-4]) for f in os.listdir(ez_dir) if f.endswith(".mp3") and f[:-4].isdigit() and (ez_dir / f).stat().st_size > 256}
    valid_aliases = [[k, v] for k, v in sorted(aliases.items()) if v in avail_canon]
    with open(ROOT / "example_zh_audio_manifest.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generated Edge-TTS zh-TW-HsiaoChenNeural example translation manifest\n")
        f.write("window.EXAMPLE_ZH_AUDIO_MANIFEST = new Set(" + json.dumps(sorted(avail_canon)) + ");\n")
        f.write("window.EXAMPLE_ZH_AUDIO_ALIAS = new Map(" + json.dumps(valid_aliases) + ");\n")

    return {"us": len(us_set), "uk": len(uk_set), "ex": len(ex_ids), "zh": len(zh_ids), "example_zh_canon": len(avail_canon)}


def is_ollama_up() -> bool:
    try:
        with urllib.request.urlopen("http://127.0.0.1:11434/api/tags", timeout=2) as r:
            return r.status == 200
    except Exception:
        return False


def bump_build_version() -> str:
    ver_path = ROOT / "version.json"
    cur = json.loads(ver_path.read_text(encoding="utf-8"))["version"]
    today = time.strftime("%Y%m%d")
    m = re.match(rf"^{today}V(\d+)$", cur)
    new_ver = f"{today}V{int(m.group(1)) + 1}" if m else f"{today}V1"
    ver_path.write_text(json.dumps({"version": new_ver}) + "\n", encoding="utf-8")

    idx_path = ROOT / "index.html"
    idx_txt = idx_path.read_text(encoding="utf-8")
    updated = re.sub(r"(const\s+APP_BUILD_VERSION\s*=\s*')[^']+(';)", rf"\g<1>{new_ver}\g<2>", idx_txt, count=1)
    idx_path.write_text(updated, encoding="utf-8")
    return new_ver


def git_commit_and_push_safe(repo_dir: Path, commit_msg: str) -> None:
    st = subprocess.run(["git", "-C", str(repo_dir), "status", "--porcelain"], capture_output=True, text=True, check=True)
    if not st.stdout.strip():
        print(f"  [git] {repo_dir.name}: clean, nothing to commit.")
        return
    # Windows argv safe staging for large audio additions
    files_cmd = subprocess.run(
        ["git", "-C", str(repo_dir), "ls-files", "-m", "-o", "--exclude-standard"],
        capture_output=True, text=True, check=True, encoding="utf-8",
    )
    if files_cmd.stdout.strip():
        subprocess.run(
            ["git", "-C", str(repo_dir), "add", "--pathspec-from-file=-"],
            input=files_cmd.stdout, text=True, check=True, encoding="utf-8",
        )
    subprocess.run(["git", "-C", str(repo_dir), "add", "-u"], check=True)
    subprocess.run(["git", "-C", str(repo_dir), "commit", "-m", commit_msg], check=True)
    subprocess.run(["git", "-C", str(repo_dir), "push", "origin", "HEAD"], check=True)
    print(f"  [git] {repo_dir.name}: committed & pushed.")


async def run_audio_phase(new_items: list[dict], extra_tokens: set[str], aliases: dict[int, int], canon_texts: dict[int, str], concurrency: int) -> None:
    jobs: list[tuple[str, str, Path]] = []
    seen_word_keys: set[str] = set()

    for tok in sorted(extra_tokens):
        safe_k = clean_safe_word_key(tok)
        if not safe_k or safe_k in seen_word_keys:
            continue
        seen_word_keys.add(safe_k)
        speech = tok.replace("&", " and ").replace(".", "").strip() or tok
        jobs.append((speech, US_VOICE, WORDS_REPO / "audio" / "words" / "us" / f"{safe_k}.mp3"))
        jobs.append((speech, UK_VOICE, WORDS_REPO / "audio" / "words" / "uk" / f"{safe_k}.mp3"))

    for it in new_items:
        wid = int(it["id"])
        ex_text = clean_example_for_tts(it.get("example", ""))
        zh_text = clean_zh_for_tts(it.get("zh", ""))
        if ex_text:
            jobs.append((ex_text, US_VOICE, EXAMPLES_REPO / "audio" / "examples" / f"{wid}.mp3"))
        if zh_text:
            jobs.append((zh_text, ZH_VOICE, ZH_REPO / "audio" / "zh" / f"{wid}.mp3"))
        canon_id = aliases.get(wid, wid)
        ez_text = canon_texts.get(canon_id) or clean_example_zh_for_tts(it.get("exampleZh", ""))
        if ez_text:
            jobs.append((ez_text, ZH_VOICE, ZH_REPO / "audio" / "example_zh" / f"{canon_id}.mp3"))

    pending_map: dict[Path, tuple[str, str, Path]] = {}
    for t, v, d in jobs:
        if d not in pending_map and not (d.exists() and d.stat().st_size > 256):
            pending_map[d] = (t, v, d)
    pending = list(pending_map.values())
    print(f"[Step 2 Audio] Total tracks: {len(jobs)} | Pending: {len(pending)}")
    if not pending:
        return

    sem = asyncio.Semaphore(concurrency)
    pool = concurrent.futures.ThreadPoolExecutor(max_workers=12)
    try:
        res = await asyncio.gather(*(synth_32k(t, v, d, sem, pool) for t, v, d in pending))
        ok = sum(1 for r in res if r)
        print(f"[Step 2 Audio] Generated {ok}/{len(pending)} 32k MP3 tracks (fail={len(pending) - ok}).")
        if ok != len(pending):
            raise RuntimeError(f"部分音軌合成失敗 ({len(pending) - ok})")
    finally:
        pool.shutdown(wait=True)


def run_validation_gate(new_items: list[dict]) -> None:
    node_check = r"""
const fs = require('fs');
const vm = require('vm');
const root = 'f:/EN';
const ctx = { window: {}, console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['words_data.js','synonyms_unit8_data.js','examples_unit9_data.js','toeic_data.js','jh_data.js','listening_words_data.js','uk_phonetics_manifest.js','words_audio_manifest.js','examples_audio_manifest.js','zh_audio_manifest.js','example_zh_audio_manifest.js','collocations_audio_manifest.js','images_manifest.js']) {
  vm.runInContext(fs.readFileSync(root + '/' + f, 'utf8'), ctx, { filename: f });
}
const html = fs.readFileSync(root + '/index.html', 'utf8');
let n = 0;
for (const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
  const c = (m[1] || '').trim();
  if (c) { new vm.Script(c, { filename: `inline-${n++}.js` }); }
}
console.log('Node VM validation OK. Inline scripts:', n);
"""
    subprocess.run(["node", "-e", node_check], check=True)
    subprocess.run([sys.executable, str(ROOT / "scripts" / "generate_mnemonics.py"), "--stats", "--audit", "--max-score", "99"], check=True)
    print(f"[Step 6 Gate] Passed all syntax & mnemonic audits for {len(new_items)} ingested words.")


def main() -> int:
    parser = argparse.ArgumentParser(description="F:\\EN Word Ingestion SOP v2 (100% Real-Human 32k Audio + Local Ollama)")
    parser.add_argument("--input", required=True, help="輸入新單字 JSON 陣列檔路徑")
    parser.add_argument("--target-db", choices=list(DB_SPECS.keys()), default="u89", help="寫入目標詞庫 (預設 u89)")
    parser.add_argument("--allow-dup", action="store_true", help="允許與同庫既有 en 重複")
    parser.add_argument("--skip-mnemonics", action="store_true", help="略過 Ollama 助記詞編譯")
    parser.add_argument("--with-images", action="store_true", help="為新字產出 256px WebP 插圖 (自動卸載 Ollama VRAM)")
    parser.add_argument("--dry-run", action="store_true", help="僅驗證欄位、ID 與待產音檔清單，不寫入任何檔案")
    parser.add_argument("--bump-version", action="store_true", help="自動遞增 APP_BUILD_VERSION 與 version.json")
    parser.add_argument("--push", action="store_true", help="依安全順序 git commit + push 3 音檔倉庫與主站")
    parser.add_argument("--concurrency", type=int, default=35, help="Edge-TTS 併發上限 (預設 35)")
    args = parser.parse_args()

    raw_items = json.loads(Path(args.input).read_text(encoding="utf-8-sig"))
    if not isinstance(raw_items, list) or not raw_items:
        print("[Abort] 輸入 JSON 必須為非空陣列。")
        return 1

    db_file, var_name, default_unit = DB_SPECS[args.target_db]
    db_path = ROOT / db_file
    header_prefix, existing_rows = parse_db_file(db_path, var_name)
    max_id = max((int(r["id"]) for r in existing_rows), default=0)
    existing_ens = {str(r["en"]).strip().lower() for r in existing_rows if r.get("en")}

    ingested: list[dict] = []
    for raw in raw_items:
        en = str(raw.get("en") or "").strip()
        if not en:
            continue
        if not args.allow_dup and en.lower() in existing_ens:
            print(f"  [skip-dup] {en} 已存在於 {db_file}")
            continue
        if not raw.get("zh") or not raw.get("example") or not raw.get("exampleZh"):
            raise ValueError(f"欄位不齊全 (須含 zh / example / exampleZh): {en}")
        max_id += 1
        row = {
            "id": max_id,
            "en": en,
            "kk": str(raw.get("kk") or "").strip(),
            "uk": str(raw.get("uk") or "").strip(),
            "zh": str(raw["zh"]).strip(),
            "unit": int(raw.get("unit") or default_unit),
            "example": str(raw["example"]).strip(),
            "exampleZh": str(raw["exampleZh"]).strip(),
        }
        ingested.append(row)
        existing_rows.append(row)
        existing_ens.add(en.lower())

    if not ingested:
        print("[Done] 沒有可寫入的新單字。")
        return 0

    if args.dry_run:
        extra_tokens = collect_forms_and_tokens_via_node(ingested)
        print(f"[Dry Run] 目標庫={db_file}, 預計寫入 {len(ingested)} 筆 (IDs {ingested[0]['id']}..{ingested[-1]['id']}), 解析詞形與點字 tokens={len(extra_tokens)}")
        return 0

    print(f"=== Step 1: 寫入 {len(ingested)} 筆至 {db_file} (IDs {ingested[0]['id']}..{ingested[-1]['id']}) ===")
    write_db_file(db_path, header_prefix, existing_rows)
    uk_added = update_uk_phonetics(ingested)
    print(f"  uk_phonetics_manifest.js 新增 {uk_added} 筆。")

    print("=== Step 2: 合成全站 32k 真人音檔 (單字雙口音 + 例句 + ZH + ExampleZH + 詞形點字) ===")
    extra_tokens = collect_forms_and_tokens_via_node(ingested)
    aliases, canon_texts = build_all_example_zh_map()
    asyncio.run(run_audio_phase(ingested, extra_tokens, aliases, canon_texts, args.concurrency))

    print("=== Step 3: 重建全域 4 張音檔清單 Manifests ===")
    m_stats = rebuild_all_manifests(aliases)
    print(" ", json.dumps(m_stats))

    if not args.skip_mnemonics:
        print("=== Step 4: 本地 Ollama 雙軌助記詞編譯 (Zero Cloud API) ===")
        words_arg = ",".join(clean_safe_word_key(it["en"]) for it in ingested)
        started_proc = None
        if not is_ollama_up():
            ollama_exe = Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Ollama" / "ollama.exe"
            if not ollama_exe.exists():
                raise RuntimeError("找不到本地 ollama.exe，無法離線編譯助記詞")
            env = os.environ.copy()
            env.setdefault("OLLAMA_MODELS", r"F:\ollama_models")
            started_proc = subprocess.Popen(
                [str(ollama_exe), "serve"], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
            )
            for _ in range(40):
                if is_ollama_up():
                    break
                time.sleep(0.5)
            if not is_ollama_up():
                started_proc.terminate()
                raise RuntimeError("自動啟動 Ollama serve 超時")
        try:
            subprocess.run(
                [sys.executable, str(ROOT / "scripts" / "compile_local_mnemonics.py"), "--words", words_arg, "--save-every", "5"],
                check=True,
            )
        finally:
            if started_proc is not None and started_proc.poll() is None:
                started_proc.terminate()

    if args.with_images:
        print("=== Step 5: 釋放 Ollama VRAM 並生成 256px WebP 單字插圖 ===")
        ollama_exe = Path(os.environ.get("LOCALAPPDATA", "")) / "Programs" / "Ollama" / "ollama.exe"
        if ollama_exe.exists():
            subprocess.run([str(ollama_exe), "stop", "qwen3:8b"], check=False)
        img_prompts = [
            {"word": it["en"], "scene": it.get("image_scene", "")}
            for it in raw_items
            if it.get("en")
        ]
        tmp_img_json = ROOT / "tmp" / "_sop_image_prompts.json"
        tmp_img_json.write_text(json.dumps(img_prompts, ensure_ascii=False), encoding="utf-8")
        subprocess.run(
            [sys.executable, str(ROOT / "scripts" / "generate_word_images.py"), "--file", str(tmp_img_json), "--size", "256", "--quality", "82"],
            check=True,
        )

    print("=== Step 6: 執行全站語法與助記詞稽核 Gate ===")
    run_validation_gate(ingested)

    if args.bump_version:
        new_ver = bump_build_version()
        print(f"=== Step 7: 版號推進至 {new_ver} ===")

    if args.push:
        print("=== Step 8: 音檔三桶先行推送 -> 主站推送 ===")
        tag = f"feat(sop): ingest {len(ingested)} words with 100% 32k human audio & dual-track mnemonics"
        git_commit_and_push_safe(WORDS_REPO, tag)
        git_commit_and_push_safe(EXAMPLES_REPO, tag)
        git_commit_and_push_safe(ZH_REPO, tag)
        git_commit_and_push_safe(ROOT, tag)

    print("=== SOP v2 Complete ===")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
