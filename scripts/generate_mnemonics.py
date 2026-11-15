#!/usr/bin/env python3
"""Generate read-only Traditional Chinese memory mnemonics for vocabulary words.

Reads word metadata from the repository vocabulary JS databases and syn_ant_data.js,
calls the Google Gemini API (via GEMINI_API_KEY env var only) with structured JSON
output, strips Markdown symbols cleanly, and writes deterministic A-Z + other JS
shards into f:/EN/mnemonics/{a..z,other}.js.
"""

from __future__ import annotations

import argparse
import asyncio
import concurrent.futures
import json
import os
import re
import sys
import threading
import time
from pathlib import Path
from typing import Any

# Ensure UTF-8 / unbuffered output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

BASE_DIR = Path(__file__).resolve().parent.parent
MNEMONICS_DIR = BASE_DIR / "mnemonics"


def load_local_env(base_dir: Path = BASE_DIR) -> None:
    """Load key=value pairs from gitignored .env / .env.local if not already set in env."""
    for fname in (".env.local", ".env"):
        env_path = base_dir / fname
        if not env_path.is_file():
            continue
        for raw_line in env_path.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            k = k.strip()
            if k.startswith("export "):
                k = k[7:].strip()
            v = v.strip().strip('"').strip("'")
            if k and v and k not in os.environ:
                os.environ[k] = v
SHARDS = [chr(c) for c in range(ord("a"), ord("z") + 1)] + ["other"]

DB_FILES = [
    "words_data.js",
    "synonyms_unit8_data.js",
    "examples_unit9_data.js",
    "toeic_data.js",
    "jh_data.js",
    "listening_words_data.js",
]

DEFAULT_MODEL = "gemini-3.5-flash-lite"
MODEL_FALLBACK_ORDER = (
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-3.5-flash",
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
)
DEFAULT_THINKING_LEVEL = "minimal"
MAX_MNEMONIC_LENGTH = 1500
MIN_MNEMONIC_LENGTH = 40

SYSTEM_INSTRUCTION = """你是一位專精台灣英文教學的記憶大師，擅長將英文單字轉換為生動有趣的「台灣口語諧音聯想（或字首字根拆解）＋雙聯想畫面＋字根/KK音標提醒＋高頻同義字」。

請嚴格遵守以下輸出規範與排版風格：
1. 全程使用繁體中文（台灣常用詞彙與語氣），內容簡潔具體、好記不囉唆，每字約 170～340 字。
2. 嚴格純文字格式！絕對禁止出現任何 Markdown 符號，包括 **粗體**、__底線__、`反引號`、# 標題、或 - / * 開頭項目符號。
3. 每個單字必須包含以下清晰段落，段落間留一個空行（單獨一行換行）：

諧音聯想：
諧音：「...」（若能諧音優先用貼近發音的台灣趣味諧音；若為長字可用「拆解 / 諧音：...」）

聯想畫面 1：...（一句具體生動的畫面，把諧音或拼字自然連到該字核心中文意思）

聯想畫面 2：...（另一個日常情境畫面，強化第二語意或記憶印象）

高效擴充：...（一句字根字首、拼寫記憶線索或常見混淆字提醒）
KK 音標：<完全照抄提供的 KK 音標> -> <一句實用的發音嘴型/重音/長短音提醒；若未提供 KK 則給簡短重音提醒>

常見同義字：

word1（簡短中文詞義與用法差異，如：通常放句尾 / 較正式）

word2（簡短中文詞義與用法差異）

word3（簡短中文詞義與用法差異，若為專有名詞或極基礎名詞可列相關高頻搭配字）

4. 忠於輸入提供的 word、kk 與 zh；禁止篡改 kk 音標，禁止將不相關字義張冠李戴；描述重音時務必與輸入 kk 中的「ˋ」主重音記號位置一致。
5. 輸出的 JSON array 必須為輸入批次中的每個單字各產出一筆記錄，且 word 欄位須完全精確比對輸入的 word。"""

RESPONSE_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "word": {"type": "string"},
                    "mnemonic": {"type": "string"},
                },
                "required": ["word", "mnemonic"],
            },
        }
    },
    "required": ["items"],
}


def shard_for_word(word: str) -> str:
    key = str(word or "").strip().lower()
    if key and "a" <= key[0] <= "z":
        return key[0]
    return "other"


def normalize_word_key(word: str) -> str:
    return str(word or "").strip().lower()


def clean_mnemonic_text(text: str) -> str:
    if not isinstance(text, str):
        return ""
    s = text.replace("\r\n", "\n").replace("\r", "\n")
    s = re.sub(r"(\*\*\*|___)(.*?)\1", r"\2", s)
    s = re.sub(r"(\*\*|__)(.*?)\1", r"\2", s)
    s = re.sub(r"`([^`]+)`", r"\1", s)
    s = re.sub(r"^[\t ]*#{1,6}[\t ]+", "", s, flags=re.M)
    s = re.sub(r"^[\t ]*[\*\-][\t ]+", "", s, flags=re.M)
    s = s.replace("**", "").replace("`", "")
    # Normalize doubled "諧音：\n諧音：" header emitted by lighter models
    s = re.sub(r"^(?:諧音|諧音聯想)[：:]\s*\n+(?=諧音[：:])", "諧音聯想：\n", s)
    # Fix rare simplified phrases occasionally emitted by LLMs in Taiwanese mnemonics
    for simp, trad in (
        ("聯想画面", "聯想畫面"),
        ("画面", "畫面"),
        ("计划", "計畫"),
        ("体形", "體形"),
    ):
        s = s.replace(simp, trad)
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = s.strip()
    if len(s) > MAX_MNEMONIC_LENGTH:
        s = s[:MAX_MNEMONIC_LENGTH].rstrip()
    return s


def _decode_js_json(path: Path, open_char: str) -> Any:
    raw = path.read_text(encoding="utf-8")
    idx = raw.find(open_char)
    if idx < 0:
        raise ValueError(f"Could not locate JSON payload '{open_char}' in {path}")
    dec = json.JSONDecoder()
    obj, _ = dec.raw_decode(raw, idx)
    return obj


def load_vocab_metadata(base_dir: Path = BASE_DIR) -> dict[str, dict[str, Any]]:
    """Aggregate unique vocabulary metadata keyed by normalized lowercase `en`."""
    syn_ant: dict[str, Any] = {}
    sa_path = base_dir / "syn_ant_data.js"
    if sa_path.exists():
        loaded_sa = _decode_js_json(sa_path, "{")
        if isinstance(loaded_sa, dict):
            syn_ant = {normalize_word_key(k): v for k, v in loaded_sa.items()}

    catalog: dict[str, dict[str, Any]] = {}
    for rel in DB_FILES:
        p = base_dir / rel
        if not p.exists():
            continue
        arr = _decode_js_json(p, "[")
        if not isinstance(arr, list):
            continue
        for item in arr:
            if not isinstance(item, dict):
                continue
            en_raw = str(item.get("en") or "").strip()
            key = normalize_word_key(en_raw)
            if not key:
                continue

            unit = item.get("unit")
            kk = str(item.get("kk") or "").strip()
            uk = str(item.get("uk") or "").strip()
            zh = str(item.get("zh") or "").strip()

            entry = catalog.get(key)
            if entry is None:
                sa = syn_ant.get(key, {}) if isinstance(syn_ant.get(key), dict) else {}
                entry = {
                    "key": key,
                    "en": en_raw,
                    "kk": kk,
                    "uk": uk,
                    "zh_list": [zh] if zh else [],
                    "units": {unit} if unit is not None else set(),
                    "syn": list(sa.get("syn") or [])[:6],
                    "ant": list(sa.get("ant") or [])[:4],
                }
                catalog[key] = entry
            else:
                if not entry["kk"] and kk:
                    entry["kk"] = kk
                if not entry["uk"] and uk:
                    entry["uk"] = uk
                if zh and zh not in entry["zh_list"] and len(entry["zh_list"]) < 3:
                    entry["zh_list"].append(zh)
                if unit is not None:
                    entry["units"].add(unit)

    for entry in catalog.values():
        entry["zh"] = " / ".join(entry.pop("zh_list"))
        entry["units"] = sorted(u for u in entry["units"] if isinstance(u, int))
    return catalog


def load_shard(shard: str, mnemonics_dir: Path = MNEMONICS_DIR) -> dict[str, str]:
    path = mnemonics_dir / f"{shard}.js"
    if not path.exists():
        return {}
    raw = path.read_text(encoding="utf-8")
    # Match the object literal passed to Object.assign(..., { ... })
    idx = raw.find("Object.assign")
    start = raw.find("{", idx if idx >= 0 else 0)
    if start < 0:
        return {}
    dec = json.JSONDecoder()
    obj, _ = dec.raw_decode(raw, start)
    if not isinstance(obj, dict):
        return {}
    return {
        normalize_word_key(k): str(v)
        for k, v in obj.items()
        if normalize_word_key(k) and isinstance(v, str) and v.strip()
    }


def load_all_shards(mnemonics_dir: Path = MNEMONICS_DIR) -> dict[str, dict[str, str]]:
    return {shard: load_shard(shard, mnemonics_dir) for shard in SHARDS}


def write_shard(shard: str, data: dict[str, str], mnemonics_dir: Path = MNEMONICS_DIR) -> Path:
    mnemonics_dir.mkdir(parents=True, exist_ok=True)
    path = mnemonics_dir / f"{shard}.js"
    sorted_data = dict(sorted(data.items(), key=lambda kv: kv[0]))
    payload = json.dumps(sorted_data, ensure_ascii=False, indent=2)
    content = (
        "window.WORD_MNEMONICS_DB = window.WORD_MNEMONICS_DB || {};\n"
        f"Object.assign(window.WORD_MNEMONICS_DB, {payload});\n"
    )
    tmp_path = path.with_suffix(".js.tmp")
    tmp_path.write_text(content, encoding="utf-8")
    tmp_path.replace(path)
    return path


def init_empty_shards(mnemonics_dir: Path = MNEMONICS_DIR) -> int:
    mnemonics_dir.mkdir(parents=True, exist_ok=True)
    created = 0
    for shard in SHARDS:
        path = mnemonics_dir / f"{shard}.js"
        if not path.exists():
            write_shard(shard, {}, mnemonics_dir)
            created += 1
    return created


def _extract_interaction_text(interaction: Any) -> str:
    txt = getattr(interaction, "output_text", None)
    if isinstance(txt, str) and txt.strip():
        return txt
    outputs = getattr(interaction, "outputs", None)
    if isinstance(outputs, list):
        for out in reversed(outputs):
            if isinstance(out, dict) and isinstance(out.get("text"), str) and out["text"].strip():
                return out["text"]
            ot = getattr(out, "text", None)
            if isinstance(ot, str) and ot.strip():
                return ot
    steps = getattr(interaction, "steps", None)
    if isinstance(steps, list):
        for st in reversed(steps):
            ot = getattr(st, "output_text", None) or getattr(st, "text", None)
            if isinstance(ot, str) and ot.strip():
                return ot
    return ""


def _build_batch_prompt(batch: list[dict[str, Any]]) -> str:
    payload = []
    for item in batch:
        rec: dict[str, Any] = {
            "word": item["en"],
            "kk": item.get("kk") or "",
            "zh": item.get("zh") or "",
        }
        if item.get("syn"):
            rec["ref_synonyms"] = item["syn"]
        if item.get("ant"):
            rec["ref_antonyms"] = item["ant"]
        payload.append(rec)
    return (
        "請為以下單字清單逐一產生繁體中文記憶技巧（嚴禁 Markdown 符號）：\n"
        + json.dumps(payload, ensure_ascii=False)
    )


def _parse_batch_response(raw_text: str) -> dict[str, str]:
    text = raw_text.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    parsed = json.loads(text)
    if isinstance(parsed, dict) and isinstance(parsed.get("items"), list):
        items = parsed["items"]
    elif isinstance(parsed, list):
        items = parsed
    else:
        raise ValueError("Unexpected JSON response shape")

    results: dict[str, str] = {}
    for entry in items:
        if not isinstance(entry, dict):
            continue
        key = normalize_word_key(entry.get("word") or "")
        cleaned = clean_mnemonic_text(entry.get("mnemonic") or "")
        if key and len(cleaned) >= MIN_MNEMONIC_LENGTH:
            results[key] = cleaned
    return results


_thread_local = threading.local()
_exhausted_lock = threading.Lock()
_exhausted_models: set[str] = set()
_rate_lock = threading.Lock()
_next_slot_ts = 0.0


def _wait_rate_slot(rpm: float) -> None:
    global _next_slot_ts
    if rpm <= 0:
        return
    interval = 60.0 / rpm
    with _rate_lock:
        now = time.monotonic()
        wait_for = max(0.0, _next_slot_ts - now)
        _next_slot_ts = max(now, _next_slot_ts) + interval
    if wait_for > 0:
        time.sleep(wait_for)


def _get_thread_client(api_key: str) -> Any:
    from google import genai
    from google.genai import types

    cli = getattr(_thread_local, "client", None)
    if cli is None or getattr(_thread_local, "api_key", None) != api_key:
        cli = genai.Client(
            api_key=api_key,
            http_options=types.HttpOptions(
                timeout=50000,
                retry_options=types.HttpRetryOptions(attempts=1),
            ),
        )
        _thread_local.client = cli
        _thread_local.api_key = api_key
    return cli


def _is_daily_or_permanent_model_error(err_str: str) -> bool:
    if "404" in err_str or "NOT_FOUND" in err_str:
        return True
    if "limit: 0" in err_str or "'quotaValue': '0'" in err_str or '"quotaValue": "0"' in err_str:
        return True
    if "GenerateRequestsPerDay" in err_str or "generate_content_free_tier_requests" in err_str:
        if "PerDay" in err_str or "PerProjectPerModel-FreeTier" in err_str or "retryDelay" in err_str:
            m = re.search(r"retryDelay['\"]?\s*[:=]\s*['\"]?(\d+)", err_str)
            if m and int(m.group(1)) >= 90:
                return True
            if "PerDay" in err_str:
                return True
    return False


def _pick_candidate_models(preferred: str) -> list[str]:
    ordered = [preferred] + [m for m in MODEL_FALLBACK_ORDER if m != preferred]
    with _exhausted_lock:
        return [m for m in ordered if m not in _exhausted_models]


def _call_gemini_batch_sync(
    api_key: str,
    batch: list[dict[str, Any]],
    model: str,
    thinking_level: str,
    max_retries: int = 3,
    rpm: float = 14.0,
) -> dict[str, str]:
    from google.genai import types

    prompt = _build_batch_prompt(batch)
    last_err: Exception | None = None
    attempt = 0
    switches = 0
    max_switches = len(MODEL_FALLBACK_ORDER) + 2

    while attempt < max_retries and switches < max_switches:
        candidates = _pick_candidate_models(model)
        if not candidates:
            return {}
        active_model = candidates[0]
        try:
            _wait_rate_slot(rpm)
            client = _get_thread_client(api_key)
            cfg = types.GenerateContentConfig(
                system_instruction=SYSTEM_INSTRUCTION,
                temperature=0.35,
                response_mime_type="application/json",
                response_schema=RESPONSE_SCHEMA,
            )
            resp = client.models.generate_content(
                model=active_model,
                contents=prompt,
                config=cfg,
            )
            raw_text = (getattr(resp, "text", None) or "").strip()
            if not raw_text:
                raise ValueError(f"Empty response from {active_model}")
            parsed = _parse_batch_response(raw_text)
            if not parsed:
                raise ValueError(f"Parsed zero valid mnemonic items from {active_model}")
            return parsed
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            err_msg = str(exc)
            _thread_local.client = None
            if _is_daily_or_permanent_model_error(err_msg):
                switches += 1
                with _exhausted_lock:
                    if active_model not in _exhausted_models:
                        _exhausted_models.add(active_model)
                        print(
                            f"[model-switch] {active_model} quota exhausted/unavailable; switching to next fallback model.",
                            file=sys.stderr,
                            flush=True,
                        )
                continue
            attempt += 1
            delay_match = re.search(r"retryDelay['\"]?\s*[:=]\s*['\"]?(\d+)", err_msg)
            hinted_delay = int(delay_match.group(1)) + 1.5 if delay_match else 0.0
            backoff = min(65.0, max(hinted_delay, (2.2 ** (attempt - 1)) + 1.5))
            print(
                f"[retry {attempt}/{max_retries}] ({active_model}) {[w['en'] for w in batch][:4]} "
                f"(sleep {backoff:.1f}s): {type(exc).__name__}: {err_msg[:180]}",
                file=sys.stderr,
                flush=True,
            )
            time.sleep(backoff)

    if len(batch) > 3 and _pick_candidate_models(model):
        mid = len(batch) // 2
        left = _call_gemini_batch_sync(api_key, batch[:mid], model, thinking_level, max_retries=2, rpm=rpm)
        right = _call_gemini_batch_sync(api_key, batch[mid:], model, thinking_level, max_retries=2, rpm=rpm)
        merged = {}
        merged.update(left)
        merged.update(right)
        return merged

    if last_err:
        print(f"[warn] batch {[w['en'] for w in batch]} failed: {last_err}", file=sys.stderr, flush=True)
    return {}


def _generate_for_entries_sync(
    entries: list[dict[str, Any]],
    *,
    api_key: str,
    model: str = DEFAULT_MODEL,
    thinking_level: str = DEFAULT_THINKING_LEVEL,
    batch_size: int = 12,
    concurrency: int = 3,
    rpm: float = 14.0,
    overwrite: bool = False,
    mnemonics_dir: Path = MNEMONICS_DIR,
    verbose: bool = True,
) -> dict[str, Any]:
    """Generate mnemonics for `entries` using thread-local sync clients & merge into JS shards."""
    shard_map = load_all_shards(mnemonics_dir)
    for s in SHARDS:
        path = mnemonics_dir / f"{s}.js"
        if not path.exists():
            write_shard(s, shard_map[s], mnemonics_dir)

    deduped: list[dict[str, Any]] = []
    seen: set[str] = set()
    for raw_item in entries:
        en_raw = str(raw_item.get("en") or "").strip()
        key = normalize_word_key(en_raw)
        if not key or key in seen:
            continue
        seen.add(key)
        shard = shard_for_word(key)
        if not overwrite and key in shard_map[shard]:
            continue
        deduped.append(
            {
                "key": key,
                "en": en_raw,
                "kk": str(raw_item.get("kk") or "").strip(),
                "zh": str(raw_item.get("zh") or "").strip(),
                "syn": list(raw_item.get("syn") or [])[:6],
                "ant": list(raw_item.get("ant") or [])[:4],
            }
        )

    if not deduped:
        if verbose:
            print("[mnemonics] All target words already have mnemonics; nothing to generate.")
        return {"requested": len(seen), "generated": 0, "skipped_existing": len(seen), "failed": []}

    with _exhausted_lock:
        _exhausted_models.clear()

    batches = [deduped[i : i + batch_size] for i in range(0, len(deduped), batch_size)]
    total_words = len(deduped)
    if verbose:
        print(
            f"[mnemonics] Target: {total_words} words in {len(batches)} batches "
            f"(model={model}, thinking={thinking_level}, batch_size={batch_size}, concurrency={concurrency})",
            flush=True,
        )

    dirty_shards: set[str] = set()
    generated_count = 0
    done_batches = 0
    start_ts = time.perf_counter()
    target_keys = {item["key"] for item in deduped}

    pool = concurrent.futures.ThreadPoolExecutor(max_workers=max(1, concurrency))
    stalled = False
    try:
        pending = {
            pool.submit(_call_gemini_batch_sync, api_key, b, model, thinking_level, 3, rpm): b
            for b in batches
        }
        stall_windows = 0
        try:
            while pending:
                done, pending_next = concurrent.futures.wait(
                    pending.keys(),
                    timeout=90.0,
                    return_when=concurrent.futures.FIRST_COMPLETED,
                )
                if not done:
                    stall_windows += 1
                    if dirty_shards:
                        for s in sorted(dirty_shards):
                            write_shard(s, shard_map[s], mnemonics_dir)
                        dirty_shards.clear()
                    print(
                        f"[STALL WARNING] No batch finished for {stall_windows * 90}s "
                        f"({len(pending_next)} batches pending; remaining models={_pick_candidate_models(model)}).",
                        file=sys.stderr,
                        flush=True,
                    )
                    if stall_windows >= 2:
                        stalled = True
                        print(
                            f"[ERROR] Aborting generation after {stall_windows * 90}s stall to prevent silent hang. "
                            f"Completed words have been safely saved to shards.",
                            file=sys.stderr,
                            flush=True,
                        )
                        for f in pending_next:
                            f.cancel()
                        break
                    pending = {f: pending[f] for f in pending_next}
                    continue

                stall_windows = 0
                pending = {f: pending[f] for f in pending_next}
                for fut in done:
                    batch_res = fut.result()
                    done_batches += 1
                    for k, val in batch_res.items():
                        if k not in target_keys:
                            continue
                        shard = shard_for_word(k)
                        shard_map[shard][k] = val
                        dirty_shards.add(shard)
                        generated_count += 1

                if dirty_shards and (done_batches % 5 == 0 or not pending):
                    for s in sorted(dirty_shards):
                        write_shard(s, shard_map[s], mnemonics_dir)
                    dirty_shards.clear()

                if verbose and (done_batches % 3 == 0 or not pending):
                    elapsed = time.perf_counter() - start_ts
                    rate = generated_count / elapsed if elapsed > 0 else 0.0
                    print(
                        f"[mnemonics] Batches {done_batches}/{len(batches)} | "
                        f"generated {generated_count}/{total_words} ({elapsed:.1f}s, {rate:.1f} words/s)",
                        flush=True,
                    )
                if pending and not _pick_candidate_models(model):
                    print(
                        "[ERROR] All fallback Gemini models hit daily quota/exhausted; saving completed words and stopping.",
                        file=sys.stderr,
                        flush=True,
                    )
                    for f in pending:
                        f.cancel()
                    break
        finally:
            for s in sorted(dirty_shards):
                write_shard(s, shard_map[s], mnemonics_dir)

        still_missing = [
            item["en"]
            for item in deduped
            if item["key"] not in shard_map[shard_for_word(item["key"])]
        ]

        if not stalled and still_missing and _pick_candidate_models(model):
            retry_entries = [item for item in deduped if item["en"] in set(still_missing)]
            step = max(1, min(4, batch_size))
            retry_batches = [retry_entries[i : i + step] for i in range(0, len(retry_entries), step)]
            if verbose:
                print(
                    f"[mnemonics] Retrying {len(retry_entries)} missed words in {len(retry_batches)} small batches...",
                    flush=True,
                )
            retry_dirty: set[str] = set()
            retry_pending = {
                pool.submit(_call_gemini_batch_sync, api_key, b, model, thinking_level, 3, rpm)
                for b in retry_batches
            }
            while retry_pending:
                done, retry_pending = concurrent.futures.wait(
                    retry_pending,
                    timeout=90.0,
                    return_when=concurrent.futures.FIRST_COMPLETED,
                )
                if not done:
                    stalled = True
                    print(
                        f"[ERROR] Retry phase stalled for 90s with {len(retry_pending)} pending batches; aborting.",
                        file=sys.stderr,
                        flush=True,
                    )
                    for f in retry_pending:
                        f.cancel()
                    break
                for fut in done:
                    batch_res = fut.result()
                    for k, val in batch_res.items():
                        if k not in target_keys:
                            continue
                        shard = shard_for_word(k)
                        shard_map[shard][k] = val
                        retry_dirty.add(shard)
                        generated_count += 1
            for s in sorted(retry_dirty):
                write_shard(s, shard_map[s], mnemonics_dir)
            still_missing = [
                item["en"]
                for item in deduped
                if item["key"] not in shard_map[shard_for_word(item["key"])]
            ]
    finally:
        pool.shutdown(wait=not stalled, cancel_futures=True)

    if verbose and still_missing:
        print(f"[mnemonics] Warning: {len(still_missing)} words failed: {still_missing[:15]}", file=sys.stderr)

    return {
        "requested": total_words,
        "generated": total_words - len(still_missing),
        "failed": still_missing,
        "stalled": stalled,
    }


async def generate_for_entries(
    entries: list[dict[str, Any]],
    *,
    api_key: str,
    model: str = DEFAULT_MODEL,
    thinking_level: str = DEFAULT_THINKING_LEVEL,
    batch_size: int = 12,
    concurrency: int = 3,
    rpm: float = 14.0,
    overwrite: bool = False,
    mnemonics_dir: Path = MNEMONICS_DIR,
    verbose: bool = True,
) -> dict[str, Any]:
    """Async-friendly wrapper around the resilient threaded generator."""
    return await asyncio.to_thread(
        _generate_for_entries_sync,
        entries,
        api_key=api_key,
        model=model,
        thinking_level=thinking_level,
        batch_size=batch_size,
        concurrency=concurrency,
        rpm=rpm,
        overwrite=overwrite,
        mnemonics_dir=mnemonics_dir,
        verbose=verbose,
    )


def generate_for_words_sync(
    entries: list[dict[str, Any]],
    *,
    api_key: str | None = None,
    model: str = DEFAULT_MODEL,
    thinking_level: str = DEFAULT_THINKING_LEVEL,
    batch_size: int = 12,
    concurrency: int = 3,
    rpm: float = 14.0,
    overwrite: bool = False,
    mnemonics_dir: Path = MNEMONICS_DIR,
    verbose: bool = True,
) -> dict[str, Any]:
    """Synchronous convenience wrapper for SOP scripts such as ingest_38_words_sop.py."""
    load_local_env()
    resolved_key = (api_key or os.environ.get("GEMINI_API_KEY") or "").strip()
    if not resolved_key:
        raise RuntimeError("GEMINI_API_KEY is not set in environment or .env.")

    catalog = load_vocab_metadata(BASE_DIR)
    enriched: list[dict[str, Any]] = []
    for item in entries:
        en_raw = str(item.get("en") or "").strip()
        key = normalize_word_key(en_raw)
        if not key:
            continue
        base = catalog.get(key)
        merged = {
            "en": en_raw,
            "kk": str(item.get("kk") or (base or {}).get("kk") or "").strip(),
            "zh": str(item.get("zh") or (base or {}).get("zh") or "").strip(),
            "syn": list(item.get("syn") or (base or {}).get("syn") or []),
            "ant": list(item.get("ant") or (base or {}).get("ant") or []),
        }
        enriched.append(merged)

    return _generate_for_entries_sync(
        enriched,
        api_key=resolved_key,
        model=model,
        thinking_level=thinking_level,
        batch_size=batch_size,
        concurrency=concurrency,
        rpm=rpm,
        overwrite=overwrite,
        mnemonics_dir=mnemonics_dir,
        verbose=verbose,
    )


def _select_target_entries(args: argparse.Namespace, catalog: dict[str, dict[str, Any]]) -> list[dict[str, Any]]:
    if args.words:
        selected: list[dict[str, Any]] = []
        for raw in args.words:
            key = normalize_word_key(raw)
            if not key:
                continue
            if key in catalog:
                selected.append(catalog[key])
            else:
                selected.append({"key": key, "en": raw.strip(), "kk": "", "zh": "", "syn": [], "ant": []})
        return selected

    if args.units:
        unit_set = set(args.units)
        return [
            entry
            for entry in catalog.values()
            if any(u in unit_set for u in entry.get("units", []))
        ]

    if args.all:
        return list(catalog.values())

    return []


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Generate Traditional Chinese mnemonics into f:/EN/mnemonics/{a..z,other}.js"
    )
    parser.add_argument("--init-shards", action="store_true", help="Initialize all 27 empty shard JS files if missing")
    parser.add_argument("--stats", action="store_true", help="Print current coverage stats across units and shards")
    parser.add_argument("--units", type=int, nargs="+", help="Target one or more vocabulary units (e.g. --units 1 2)")
    parser.add_argument("--words", nargs="+", help="Target specific words (e.g. --words also abandon)")
    parser.add_argument("--all", action="store_true", help="Target all missing words across all units")
    parser.add_argument("--overwrite", action="store_true", help="Regenerate even if already present in shard")
    parser.add_argument("--limit", type=int, default=0, help="Optional cap on target unique words for pilot runs")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Gemini model (default: {DEFAULT_MODEL})")
    parser.add_argument("--thinking", default=DEFAULT_THINKING_LEVEL, help=f"Thinking level (default: {DEFAULT_THINKING_LEVEL})")
    parser.add_argument("--batch-size", type=int, default=12, help="Words per Gemini API call (default: 12)")
    parser.add_argument("--concurrency", type=int, default=3, help="Concurrent API worker threads (default: 3)")
    parser.add_argument("--rpm", type=float, default=14.0, help="Max API requests per minute (default: 14, 0=unlimited)")
    args = parser.parse_args(argv)

    load_local_env()

    if args.init_shards:
        created = init_empty_shards(MNEMONICS_DIR)
        print(f"[mnemonics] Initialized {created} new shard files in {MNEMONICS_DIR} (27 total).")
        if not (args.stats or args.units or args.words or args.all):
            return 0

    catalog = load_vocab_metadata(BASE_DIR)
    if args.stats:
        shard_map = load_all_shards(MNEMONICS_DIR)
        flat = {k: v for d in shard_map.values() for k, v in d.items()}
        print(f"[stats] Catalog unique words: {len(catalog)} | Shards covered: {len(flat)}")
        unit_counts: dict[int, list[int]] = {}
        for entry in catalog.values():
            covered = 1 if entry["key"] in flat else 0
            for u in entry.get("units", []):
                pair = unit_counts.setdefault(u, [0, 0])
                pair[0] += covered
                pair[1] += 1
        for u in sorted(unit_counts):
            cov, tot = unit_counts[u]
            print(f"  Unit {u:>2}: {cov:>4} / {tot:<4} ({(cov / tot * 100):.1f}%)")
        if not (args.units or args.words or args.all):
            return 0

    targets = _select_target_entries(args, catalog)
    if not targets:
        parser.print_help()
        return 1

    if args.limit and args.limit > 0:
        targets = targets[: args.limit]

    api_key = (os.environ.get("GEMINI_API_KEY") or "").strip()
    if not api_key:
        print("Error: GEMINI_API_KEY is required (set in environment or f:/EN/.env).", file=sys.stderr)
        return 2

    res = _generate_for_entries_sync(
        targets,
        api_key=api_key,
        model=args.model,
        thinking_level=args.thinking,
        batch_size=args.batch_size,
        concurrency=args.concurrency,
        rpm=args.rpm,
        overwrite=args.overwrite,
        mnemonics_dir=MNEMONICS_DIR,
        verbose=True,
    )
    print(f"[done] generated={res['generated']}/{res['requested']} failed={len(res['failed'])}")
    return 0 if not res["failed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
