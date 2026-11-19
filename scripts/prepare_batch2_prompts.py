#!/usr/bin/env python3
"""Curate batch-2 visual vocabulary candidates and generate clean SDXL scene prompts via local Ollama.

Zero external API calls. Reuses generate_mnemonics.load_vocab_metadata() and waits cleanly
for compile_dual.lock if --wait-lock is passed so VRAM is never contended with RTX 3050 jobs.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

if os.name == "nt":
    import msvcrt

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR.parent
TMP_DIR = BASE_DIR / "tmp"
IMAGES_DIR = BASE_DIR / "images" / "words"
LOCK_FILE = TMP_DIR / "compile_dual.lock"

if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import generate_mnemonics as gm
import generate_word_images as gwi

DEFAULT_OLLAMA_URL = os.environ.get("OLLAMA_HOST", "http://127.0.0.1:11434").rstrip("/")
DEFAULT_MODEL = "qwen3:8b"

CANDIDATES_FILE = TMP_DIR / "batch2_candidates.json"
REVIEW_JSONL = TMP_DIR / "batch2_ollama_review.jsonl"
PROMPTS_OUT_FILE = TMP_DIR / "batch2_prompts.json"

ABSTRACT_SUFFIX_RE = re.compile(
    r"(ness|tion|sion|ment|ship|hood|ism|ity|ance|ence|logy|graphy|ics|acy|dom|tude)$",
    re.I,
)
FUNCTION_POS_ONLY_RE = re.compile(
    r"^\s*(?:prep|conj|pron|adv|aux|art|int|num|det)\.",
    re.I,
)
VISUAL_POS_RE = re.compile(r"\b(?:n|v|vt|vi|adj)\.", re.I)
FORBIDDEN_SCENE_RE = re.compile(
    r"\b(?:text|word|words|letter|letters|alphabet|caption|subtitle|label|watermark|signature|logo|background|backdrop|blood|gore|corpse|dead body)\b",
    re.I,
)
NON_VISUAL_STOPWORDS = frozenset({
    "act", "age", "aim", "air", "bit", "case", "day", "end", "era", "eve", "fact", "fee",
    "form", "fun", "hour", "idea", "item", "kind", "law", "life", "lot", "mind", "minute",
    "month", "name", "news", "part", "plan", "rule", "second", "side", "sort", "step",
    "task", "term", "thing", "time", "type", "unit", "view", "way", "week", "work", "year",
})

BATCH_SYSTEM_PROMPT = """You are a strict art director designing crisp single-subject sticker illustrations for an English vocabulary flashcard app.

Given a JSON list of English words with their Traditional Chinese meanings, accept ("visual": true) ONLY words whose primary visual concept is IMMEDIATELY recognizable from ONE standalone drawing WITHOUT guessing.

Strict Rejection Rules ("visual": false):
1. REJECT abstract concepts, time units, months, numbers, pronouns, grammatical words, generic meta-nouns, or intangible states (e.g. ability, april, age, air, cause, day, end, fact, fee, fun, idea, way, time, system, policy, issue, aspect, degree).
2. REJECT indirect metaphors/substitutions: Do NOT draw a sunny sky to represent "day" or "air", do NOT draw a line to represent "end", and do NOT draw generic smiling kids to represent "fun" or "joy". Only accept concrete objects, animals, foods, plants, weather phenomena, buildings/places, clear professions, sports, body parts, or unmistakable physical actions (e.g. "run", "swim", "cook", "cry", "sleep", "kick", "climb").
3. For every accepted word ("visual": true), write an ASCII-only "scene" (5 to 16 English words) depicting ONE centered subject/action matching the Chinese meaning (especially for polysemous words like "bank", "bat", "spring", "match").
4. NEVER include "text", "letters", "words", "sign reading", "label", "watermark", "background", or "backdrop" inside "scene". Describe the subject/props only (e.g. "a smiling baker holding a warm loaf of bread", "an orange basketball bouncing midair", "a yellow school bus parked cleanly").
5. Output ONLY valid JSON:
{"items": [{"word": "...", "visual": true/false, "category": "object|animal|food|place|person|nature|action|adj|abstract", "scene": "..."}]}"""


def _word_priority(meta: dict[str, Any], key: str) -> tuple[int, int, int, str]:
    units = set(meta.get("units") or [])
    zh = str(meta.get("zh") or "")
    if 17 in units or 18 in units:
        tier = 0
    elif 1 in units or 2 in units:
        tier = 1
    elif units & {11, 12, 13, 14, 3, 4}:
        tier = 2
    else:
        tier = 3

    is_primary_noun = 0 if re.match(r"^\s*n\.", zh, re.I) else (1 if re.search(r"\bn\.", zh, re.I) else 2)
    return (tier, is_primary_noun, len(key), key)


def build_candidate_pool(max_candidates: int = 3500) -> list[dict[str, Any]]:
    """Extract prioritized remaining words not yet having images."""
    catalog = gm.load_vocab_metadata(BASE_DIR)
    existing = {p.stem.lower() for p in IMAGES_DIR.glob("*.webp")} if IMAGES_DIR.exists() else set()

    candidates: list[tuple[tuple[int, int, int, str], dict[str, Any]]] = []
    seen_clean_keys: set[str] = set()

    for orig_key, meta in catalog.items():
        en = str(meta.get("en") or "").strip()
        zh = str(meta.get("zh") or "").strip()
        if not en or not zh:
            continue
        clean = gwi.clean_word_key(en)
        if not clean or clean in existing or clean in seen_clean_keys or clean in NON_VISUAL_STOPWORDS:
            continue
        # Allow single words or simple 2-word compounds (e.g. ice cream, t-shirt), skip slashes/dots/abbreviations
        if "/" in en or "." in en or "'" in en or len(en) < 2 or len(en) > 18:
            continue
        if len(en.split()) > 2:
            continue
        if ABSTRACT_SUFFIX_RE.search(en):
            continue
        if FUNCTION_POS_ONLY_RE.match(zh) and not re.search(r"\b(?:n|v|vt|vi)\.", zh, re.I):
            continue
        if not VISUAL_POS_RE.search(zh):
            continue

        seen_clean_keys.add(clean)
        prio = _word_priority(meta, clean)
        candidates.append(
            (
                prio,
                {
                    "word": clean,
                    "en": en,
                    "zh": zh[:160],
                    "units": meta.get("units") or [],
                },
            )
        )

    candidates.sort(key=lambda pair: pair[0])
    ordered = [item for _, item in candidates]
    if max_candidates > 0:
        ordered = ordered[:max_candidates]
    return ordered


def _is_lock_held() -> bool:
    if not LOCK_FILE.exists():
        return False
    if os.name == "nt":
        try:
            with LOCK_FILE.open("r+", encoding="utf-8") as fh:
                msvcrt.locking(fh.fileno(), msvcrt.LK_NBLCK, 1)
                fh.seek(0)
                msvcrt.locking(fh.fileno(), msvcrt.LK_UNLCK, 1)
            return False
        except OSError:
            return True
    return False


def _validate_scene(scene: str) -> tuple[bool, str]:
    s = re.sub(r"\s+", " ", (scene or "").strip()).strip("\"'., ")
    if not s:
        return False, "empty"
    if not all(32 <= ord(ch) < 127 for ch in s):
        return False, "non_ascii"
    words = s.split()
    if len(words) < 3 or len(words) > 20:
        return False, f"word_count_{len(words)}"
    if FORBIDDEN_SCENE_RE.search(s):
        return False, "forbidden_term"
    return True, s


def _call_ollama_batch(
    batch: list[dict[str, Any]],
    base_url: str,
    model: str,
    timeout: float,
) -> list[dict[str, Any]]:
    compact_in = [{"word": x["word"], "en": x["en"], "zh": x["zh"]} for x in batch]
    user_msg = (
        "Evaluate these vocabulary entries and return JSON strictly matching the schema:\n"
        + json.dumps(compact_in, ensure_ascii=False)
    )
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": BATCH_SYSTEM_PROMPT},
            {"role": "user", "content": user_msg},
        ],
        "stream": False,
        "think": False,
        "format": "json",
        "keep_alive": "20m",
        "options": {
            "temperature": 0.25,
            "num_predict": 1400,
        },
    }
    req = urllib.request.Request(
        f"{base_url}/api/chat",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = json.loads(resp.read().decode("utf-8"))
    content = str((raw.get("message") or {}).get("content") or "").strip()
    content = re.sub(r"<think>[\s\S]*?</think>", "", content, flags=re.I).strip()
    content = re.sub(r"^```(?:json)?\s*|\s*```$", "", content, flags=re.I)
    parsed = json.loads(content)
    items = parsed.get("items") if isinstance(parsed, dict) else parsed
    return items if isinstance(items, list) else []


def _load_existing_reviews() -> dict[str, dict[str, Any]]:
    reviewed: dict[str, dict[str, Any]] = {}
    if not REVIEW_JSONL.is_file():
        return reviewed
    for line in REVIEW_JSONL.read_text(encoding="utf-8", errors="replace").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            w = gwi.clean_word_key(str(obj.get("word") or ""))
            if w:
                reviewed[w] = obj
        except Exception:
            continue
    return reviewed


def _flush_approved_prompts(reviewed: dict[str, dict[str, Any]], ordered_words: list[str]) -> int:
    approved: list[dict[str, Any]] = []
    for w in ordered_words:
        rec = reviewed.get(w)
        if not rec or not rec.get("visual"):
            continue
        ok, clean_scene = _validate_scene(str(rec.get("scene") or ""))
        if not ok:
            continue
        approved.append(
            {
                "word": w,
                "en": rec.get("en") or w,
                "category": rec.get("category") or "object",
                "scene": clean_scene,
            }
        )
    PROMPTS_OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp_p = PROMPTS_OUT_FILE.with_suffix(".json.tmp")
    tmp_p.write_text(json.dumps(approved, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp_p.replace(PROMPTS_OUT_FILE)
    return len(approved)


def main() -> int:
    parser = argparse.ArgumentParser(description="Prepare batch-2 visual prompts via local Ollama")
    parser.add_argument("--export-only", action="store_true", help="CPU-only: export prioritized candidate pool without calling Ollama")
    parser.add_argument("--max-candidates", type=int, default=3500, help="Candidate pool cap (0 = all)")
    parser.add_argument("--target-count", type=int, default=1000, help="Stop once N approved visual prompts are collected (0 = review full pool)")
    parser.add_argument("--batch-size", type=int, default=10, help="Words per Ollama request")
    parser.add_argument("--model", type=str, default=DEFAULT_MODEL)
    parser.add_argument("--ollama-url", type=str, default=DEFAULT_OLLAMA_URL)
    parser.add_argument("--timeout", type=float, default=120.0)
    parser.add_argument("--wait-lock", action="store_true", help="Poll and wait until compile_dual.lock is released")
    parser.add_argument("--force", action="store_true", help="Ignore compile_dual.lock check")
    args = parser.parse_args()

    TMP_DIR.mkdir(parents=True, exist_ok=True)
    pool = build_candidate_pool(max_candidates=args.max_candidates)
    CANDIDATES_FILE.write_text(json.dumps(pool, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[Candidates] Exported {len(pool)} candidate words -> {CANDIDATES_FILE}")

    if args.export_only:
        from collections import Counter
        tier_counts = Counter(
            "JH(17-18)" if (17 in x["units"] or 18 in x["units"])
            else ("HS_Core(1-2)" if (1 in x["units"] or 2 in x["units"])
            else "HS_Adv/TOEIC/Other")
            for x in pool
        )
        print(f"[Breakdown] {dict(tier_counts)}")
        print("[Sample 15]", ", ".join(x["en"] for x in pool[:15]))
        return 0

    if _is_lock_held() and not args.force:
        if not args.wait_lock:
            print(f"[Blocked] Mnemonic compiler currently holds {LOCK_FILE}.")
            print("Re-run with --wait-lock to auto-start once compilation finishes, or wait for GPU release.")
            return 1
        print(f"[Wait] Waiting for {LOCK_FILE} to release...")
        while _is_lock_held():
            time.sleep(15)
        print("[Wait] Lock released. Proceeding with Ollama review...")

    reviewed = _load_existing_reviews()
    ordered_words = [x["word"] for x in pool]
    meta_by_word = {x["word"]: x for x in pool}
    todo = [x for x in pool if x["word"] not in reviewed]
    approved_count = _flush_approved_prompts(reviewed, ordered_words)
    print(f"[Plan] model={args.model} | pool={len(pool)} | already_reviewed={len(reviewed)} | approved={approved_count} | todo={len(todo)}")

    if args.target_count > 0 and approved_count >= args.target_count:
        print(f"[Done] Already reached target-count={args.target_count} ({approved_count} approved -> {PROMPTS_OUT_FILE}).")
        return 0

    with REVIEW_JSONL.open("a", encoding="utf-8") as log_fh:
        for start in range(0, len(todo), args.batch_size):
            batch = todo[start : start + args.batch_size]
            t0 = time.time()
            try:
                resp_items = _call_ollama_batch(batch, args.ollama_url, args.model, args.timeout)
            except Exception as exc:
                print(f"[WARN] Batch at {start} failed: {exc}")
                time.sleep(2)
                continue

            by_word: dict[str, dict[str, Any]] = {}
            for it in resp_items:
                if not isinstance(it, dict):
                    continue
                wk = gwi.clean_word_key(str(it.get("word") or ""))
                if wk:
                    by_word[wk] = it

            batch_ok = 0
            for src in batch:
                wk = src["word"]
                it = by_word.get(wk)
                if it is None:
                    continue
                vis = bool(it.get("visual"))
                scene_raw = str(it.get("scene") or "").strip()
                if vis:
                    ok_sc, clean_sc = _validate_scene(scene_raw)
                    if not ok_sc:
                        vis = False
                        clean_sc = ""
                else:
                    clean_sc = ""
                rec = {
                    "word": wk,
                    "en": src["en"],
                    "visual": vis,
                    "category": str(it.get("category") or ("object" if vis else "abstract")),
                    "scene": clean_sc,
                }
                reviewed[wk] = rec
                log_fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
                if vis:
                    batch_ok += 1

            log_fh.flush()
            approved_count = _flush_approved_prompts(reviewed, ordered_words)
            dt = time.time() - t0
            print(
                f"[Batch {start + len(batch)}/{len(todo)}] +{batch_ok}/{len(batch)} visual "
                f"({dt:.1f}s) | total_approved={approved_count}"
            )
            if args.target_count > 0 and approved_count >= args.target_count:
                print(f"[Complete] Reached target_count={args.target_count} -> {PROMPTS_OUT_FILE}")
                break

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
