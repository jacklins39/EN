#!/usr/bin/env python3
"""Curate Batch-4 visual vocabulary prompts via local Ollama (qwen3:8b).

Unlocks:
1. Words previously skipped solely by ABSTRACT_SUFFIX_RE (city, dance, spaceship, apartment, etc.).
2. Multi-word concrete phrases up to 3 words (tug of war, bed and breakfast, liquid crystal display).
3. Recognizable holidays, bodily states/expressions, and unmistakable actions from prior rejected pool
   (Christmas, Halloween, Thanksgiving, afraid, asleep, arrest, argue, airmail, etc.).
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.request
from pathlib import Path
from typing import Any

SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR.parent
TMP_DIR = BASE_DIR / "tmp"
IMAGES_DIR = BASE_DIR / "images" / "words"

if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import generate_mnemonics as gm
import generate_word_images as gwi
import prepare_batch2_prompts as pb2

CANDIDATES_FILE = TMP_DIR / "batch4_candidates.json"
REVIEW_JSONL = TMP_DIR / "batch4_ollama_review.jsonl"
PROMPTS_OUT_FILE = TMP_DIR / "batch4_prompts.json"

PURE_GRAMMAR_RE = re.compile(r"^\s*(?:prep|conj|pron|adv|aux|art|int|num|det)(?:\s*/\s*[a-z]+)?\.", re.I)
VIS_POS_RE = re.compile(r"\b(?:n|v|vt|vi|adj)\.", re.I)
MONTH_DAY_RE = re.compile(
    r"^(january|february|march|april|may|june|july|august|september|october|november|december"
    r"|monday|tuesday|wednesday|thursday|friday|saturday|sunday|o\.?k\.?|i|a)$",
    re.I,
)

BATCH4_SYSTEM_PROMPT = """You are an expert visual art director curating high-clarity 3D clay toy illustrations for an English vocabulary flashcard app.

Given a JSON list of English words with Traditional Chinese glosses, set "visual": true ONLY if the word can be depicted as ONE unmistakable, single-subject 3D clay illustration that learners immediately recognize WITHOUT guessing.

You MUST ACCEPT ("visual": true) concrete items previously missed AND clear scenes in these categories:
1. Concrete places, buildings, objects, vehicles, tools, instruments, garments, substances (e.g. "city" -> colorful cluster of miniature buildings and skyline, "spaceship" -> silver rocket ship flying, "apartment" -> cozy multi-story building with glowing windows, "lotion" -> pump bottle of skincare lotion, "cement" -> bag and trowel with gray concrete, "instrument" -> golden trumpet and violin, "garment" -> neatly folded shirt on hanger).
2. Well-known holidays & cultural events (e.g. "Christmas" -> decorated green pine tree with glowing star and gift boxes, "Halloween" -> carved glowing jack-o'-lantern pumpkin, "Thanksgiving" -> golden roasted turkey on a platter).
3. Unmistakable physical actions, sports, dances, or social scenes (e.g. "dance" -> two joyful clay figures dancing together, "arrest" -> police officer placing handcuffs on a thief, "argue" -> two figures pointing angrily face to face, "tug of war" -> two teams pulling opposite ends of a thick rope).
4. Vivid facial expressions or unmistakable physical bodily states (e.g. "afraid" -> wide-eyed trembling character hugging shoulders in fright, "asleep" -> cozy character fast asleep on a fluffy pillow, "wet" -> soaked umbrella and puddle droplets).

Strict REJECTION Rules ("visual": false):
- REJECT abstract nouns, intangible traits, academic/policy concepts, generic virtues, mental processes, time durations, numbers, grammar words (e.g. ability, absence, policy, racism, equity, random, unity, accept, agree, allow, realize, suggest, degree, amount, aspect, moment, afternoon, age, chance, equity, ethics).
- REJECT forced/indirect metaphors (do NOT draw a clock for "moment" or "delay", do NOT draw a generic thumbs-up for "good"/"able", do NOT draw smiling kids for "freedom"/"ability").
- Write an ASCII-only "scene" (5 to 18 English words) for accepted entries matching the Chinese gloss. NEVER include text, letters, numbers, words, watermarks, logo, background, or backdrop in "scene".

Output ONLY valid JSON:
{"items": [{"word": "...", "visual": true/false, "category": "object|place|holiday|action|expression|animal|food|person|abstract", "scene": "..."}]}"""


def _load_prior_reviewed_keys() -> set[str]:
    keys: set[str] = set()
    p2 = TMP_DIR / "batch2_ollama_review.jsonl"
    if p2.is_file():
        for line in p2.read_text(encoding="utf-8", errors="replace").splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                wk = gwi.clean_word_key(str(json.loads(line).get("word") or ""))
                if wk:
                    keys.add(wk)
            except Exception:
                continue
    return keys


def build_batch4_pool() -> list[dict[str, Any]]:
    """Build prioritized Batch-4 candidate pool across suffix-trapped, multi-word, and second-pass entries."""
    catalog = gm.load_vocab_metadata(BASE_DIR)
    existing = {p.stem.lower() for p in IMAGES_DIR.glob("*.webp")} if IMAGES_DIR.exists() else set()
    prior_reviewed = _load_prior_reviewed_keys()

    ranked: list[tuple[tuple[int, int, int, str], dict[str, Any]]] = []
    seen: set[str] = set()

    for _, meta in catalog.items():
        en = str(meta.get("en") or "").strip()
        zh = str(meta.get("zh") or "").strip()
        if not en or not zh:
            continue
        clean = gwi.clean_word_key(en)
        if not clean or clean in existing or clean in seen or clean in pb2.NON_VISUAL_STOPWORDS:
            continue
        if len(clean) < 2 or len(en) > 26 or "/" in en or "." in en or "'" in en:
            continue
        if MONTH_DAY_RE.match(en):
            continue
        if re.match(r"^abbr\.", zh, re.I) and not VIS_POS_RE.search(re.sub(r"^abbr\.[^；;]*[；;]?", "", zh)):
            continue
        if PURE_GRAMMAR_RE.match(zh):
            continue
        if not VIS_POS_RE.search(zh):
            continue

        seen.add(clean)
        units = set(meta.get("units") or [])
        if clean not in prior_reviewed:
            wave = 0  # Wave A: suffix-trapped + multiword phrases never reviewed yet
        elif units & {1, 2, 17, 18}:
            wave = 1  # Wave B: everyday JH & core HS second-pass (holidays, states, concrete scenes)
        else:
            wave = 2  # Wave C: upper HS & TOEIC second-pass

        prio = (wave, pb2._word_priority(meta, clean)[0], len(clean), clean)
        ranked.append(
            (
                prio,
                {
                    "word": clean,
                    "en": en,
                    "zh": zh[:160],
                    "wave": wave,
                    "units": meta.get("units") or [],
                },
            )
        )

    ranked.sort(key=lambda x: x[0])
    return [item for _, item in ranked]


def _call_batch4_ollama(batch: list[dict[str, Any]], base_url: str, model: str, timeout: float) -> list[dict[str, Any]]:
    compact_in = [{"word": x["word"], "en": x["en"], "zh": x["zh"]} for x in batch]
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": BATCH4_SYSTEM_PROMPT},
            {"role": "user", "content": "Evaluate this list and output JSON matching schema:\n" + json.dumps(compact_in, ensure_ascii=False)},
        ],
        "stream": False,
        "think": False,
        "format": "json",
        "keep_alive": "20m",
        "options": {"temperature": 0.25, "num_predict": 1800},
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


def _load_b4_reviews() -> dict[str, dict[str, Any]]:
    reviewed: dict[str, dict[str, Any]] = {}
    if not REVIEW_JSONL.is_file():
        return reviewed
    for line in REVIEW_JSONL.read_text(encoding="utf-8", errors="replace").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            wk = gwi.clean_word_key(str(obj.get("word") or ""))
            if wk:
                reviewed[wk] = obj
        except Exception:
            continue
    return reviewed


def main() -> int:
    parser = argparse.ArgumentParser(description="Curate Batch-4 visual prompts via local Ollama")
    parser.add_argument("--export-only", action="store_true")
    parser.add_argument("--waves", type=str, default="0,1,2", help="Comma-separated wave indices to include (default 0,1,2)")
    parser.add_argument("--max-batches", type=int, default=0, help="Optional cap on batches to process in one run")
    parser.add_argument("--batch-size", type=int, default=16)
    parser.add_argument("--model", type=str, default=pb2.DEFAULT_MODEL)
    parser.add_argument("--ollama-url", type=str, default=pb2.DEFAULT_OLLAMA_URL)
    parser.add_argument("--timeout", type=float, default=120.0)
    parser.add_argument("--prompts-out", type=Path, default=PROMPTS_OUT_FILE)
    args = parser.parse_args()

    allowed_waves = {int(x.strip()) for x in args.waves.split(",") if x.strip()}
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    full_pool = build_batch4_pool()
    pool = [x for x in full_pool if x["wave"] in allowed_waves]
    CANDIDATES_FILE.write_text(json.dumps(pool, ensure_ascii=False, indent=2), encoding="utf-8")

    from collections import Counter
    wc = Counter(x["wave"] for x in pool)
    print(f"[Batch4 Pool] total={len(pool)} | wave_counts={dict(wc)} -> {CANDIDATES_FILE}")
    if args.export_only:
        return 0

    if pb2._is_lock_held():
        print(f"[Blocked] Mnemonic lock held at {pb2.LOCK_FILE}.")
        return 1

    reviewed = _load_b4_reviews()
    ordered_words = [x["word"] for x in pool]
    todo = [x for x in pool if x["word"] not in reviewed]
    approved_count = pb2._flush_approved_prompts(reviewed, ordered_words, Path(args.prompts_out))
    print(f"[Plan] model={args.model} | pool={len(pool)} | cached={len(reviewed)} | approved={approved_count} | todo={len(todo)}")

    batches_run = 0
    with REVIEW_JSONL.open("a", encoding="utf-8") as log_fh:
        for start in range(0, len(todo), args.batch_size):
            if args.max_batches > 0 and batches_run >= args.max_batches:
                break
            batch = todo[start : start + args.batch_size]
            batches_run += 1
            t0 = time.time()
            try:
                resp_items = _call_batch4_ollama(batch, args.ollama_url, args.model, args.timeout)
            except Exception as exc:
                print(f"[WARN] Batch at {start} failed: {exc}")
                time.sleep(2)
                continue

            by_word: dict[str, dict[str, Any]] = {}
            for it in resp_items:
                if isinstance(it, dict):
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
                    ok_sc, clean_sc = pb2._validate_scene(scene_raw)
                    if not ok_sc:
                        vis = False
                        clean_sc = ""
                else:
                    clean_sc = ""
                rec = {
                    "word": wk,
                    "en": src["en"],
                    "wave": src["wave"],
                    "visual": vis,
                    "category": str(it.get("category") or ("object" if vis else "abstract")),
                    "scene": clean_sc,
                }
                reviewed[wk] = rec
                log_fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
                if vis:
                    batch_ok += 1

            log_fh.flush()
            approved_count = pb2._flush_approved_prompts(reviewed, ordered_words, Path(args.prompts_out))
            dt = time.time() - t0
            print(
                f"[Batch {start + len(batch)}/{len(todo)}] w={batch[0]['wave']} +{batch_ok}/{len(batch)} visual "
                f"({dt:.1f}s) | total_approved={approved_count}"
            )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
