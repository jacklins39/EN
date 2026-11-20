#!/usr/bin/env python3
"""Zero-API local translation & example consistency auditor using Ollama (qwen3:8b).

Strictly READ-ONLY against vocabulary DBs (*_data.js): scans all rows in DB_FILES,
runs fast zero-GPU heuristic checks plus batched semantic auditing via local Ollama,
and writes resumable checkpoints and a prioritized review report into f:/EN/tmp/.
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

if sys.platform == "win32":
    import msvcrt

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import generate_mnemonics as gm

try:
    from opencc import OpenCC

    _S2TW = OpenCC("s2tw")
except Exception:
    _S2TW = None

BASE_DIR = gm.BASE_DIR
TMP_DIR = BASE_DIR / "tmp"
AUDIT_LOCK_PATH = TMP_DIR / "audit_translations.lock"
COMPILE_LOCK_PATH = TMP_DIR / "compile_dual.lock"
PROGRESS_PATH = TMP_DIR / "translation_audit_progress.jsonl"
FLAGGED_PATH = TMP_DIR / "translation_audit_flagged.jsonl"
HEURISTICS_PATH = TMP_DIR / "translation_audit_heuristics.json"
REPORT_PATH = TMP_DIR / "translation_audit_report.md"

DEFAULT_OLLAMA_URL = os.environ.get("OLLAMA_HOST", "http://127.0.0.1:11434").rstrip("/")
if not DEFAULT_OLLAMA_URL.startswith(("http://", "https://")):
    DEFAULT_OLLAMA_URL = f"http://{DEFAULT_OLLAMA_URL}"
DEFAULT_LOCAL_MODEL = os.environ.get("OLLAMA_LOCAL_MODEL", "qwen3:8b")

# Narrowed strictly to forms distinct from Traditional Chinese!
_TRUE_SIMP_RE = re.compile(
    r"[这为发会国华学开说时对实动点经产现进电体长门间车马风书话语请认读写听记词义"
    r"练结给张单双边远轻难错坏旧买卖钱条种类头脸脚气爱乐欢惊见]"
)

_SYSTEM_PROMPT = """你是一位嚴謹的台灣資深英漢詞典編輯與雙語校對專家，專門稽核高中/多益英語單字庫的誤譯與例句錯位。
你會收到一組英文單字詞條（每筆含 key, en, card_front, zh, example, exampleZh）。
其中 card_front 是使用者在背單字卡片正面第一眼看到的精簡釋義（由系統擷取前 1~2 個詞條生成）。

請**高精準、低誤報**找出「真正有問題」的詞條。寧可漏過無關緊要的小修辭，也絕不亂報正常同義詞！

【只回報以下 5 類明確問題】
1. wrong_zh（誤譯/離譜錯義/張冠李戴）：zh 裡出現完全不屬於該英文單字的中文意思（例：bony 出現「骨製的」、central 出現「n. 活動中心」、實際是名詞詞組卻譯成毫不相干的東西）。
2. misleading_abbrev（過度簡寫造成誤解）：zh 或 card_front 省略了領域/對象導致單看一定背錯（例：bony 寫成「多刺的」而漏掉「(魚)多魚刺」）。
3. wrong_pos（詞性嚴重錯配）：標示詞性與中文意思或例句用法明顯對不上，且屬於誤譯。
4. example_mismatch（例句英中嚴重不符）：example 與 exampleZh 意思大相逕庭、漏譯關鍵字、或完全搭不起來。
5. garbled_text（殘缺亂碼/語病）：zh 出現未翻譯英文殘留、名詞粘連（如 thenineties）、或明顯不通順的機器硬翻錯字。

【絕對不要回報的情況（避免誤報）】
- 正常的多義詞、常見同義不同說法（如「可信的、可相信的」或「瘦骨嶙峋」形容手，語意通順就不算錯）。
- 只因某個較冷門的合理義項剛好存在於字典（如 off 含「關閉的」、weigh 的航海用語等，除非譯文本身錯誤）。
- 繁體中文慣用字差異不嚴重、無損字義者。

【輸出格式要求】
一律只輸出單一合法 JSON 物件，格式如下，不要加任何多餘說明或 Markdown：
{"flagged": [{"key": "原始key", "en": "單字", "severity": "high 或 medium", "issue_type": "wrong_zh|misleading_abbrev|wrong_pos|example_mismatch|garbled_text", "bad_snippet": "原條目中出問題的精確片段", "reason": "簡短繁體中文原因", "suggested_zh": "建議修正後的完整 zh（若 zh 無問題可留空字串）", "suggested_example_zh": "建議修正後的 exampleZh（若無問題可留空字串）"}]}
若該批詞條全部正常沒有明確錯誤，請直接輸出：
{"flagged": []}"""


def _to_tw(text: str) -> str:
    if not text:
        return ""
    return _S2TW.convert(text) if _S2TW is not None else text


def compute_concise_zh(zh_str: str) -> str:
    """Lightweight mirror of index.html getConciseZh() to preview card-front text."""
    if not zh_str:
        return ""
    first = re.split(r"\s*[;；]\s*(?:adj|adv|prep|conj|pron|int|interj|num|det|art|aux|pref|suff|phr?|vi|vt|abbr|pl|comb|n|v|a)[.．]\s*", zh_str, maxsplit=1)[0]
    first = re.sub(r"^(?:adj|adv|prep|conj|pron|int|interj|num|det|art|aux|pref|suff|phr?|vi|vt|abbr|pl|comb|n|v|a)[.．]\s*", "", first, flags=re.I)
    first = re.sub(r"【[^】]*】.*$", "", first)
    first = re.sub(r"[\(（][^）\)]*[\)）]", "", first)
    first = re.sub(r"\[[^\]]*\]|<[^>]*>", "", first).strip()
    raw_terms = [t.strip(" .：:…") for t in re.split(r"[,，、/；;\s]+", first) if t.strip()]
    terms: list[str] = []
    for t in raw_terms:
        if not t or re.fullmatch(r"[a-zA-Z0-9.\s\-/]+", t):
            continue
        if t not in terms:
            terms.append(t)
    if not terms:
        return first[:12]
    res = terms[0]
    r_core = res.replace("…", "")
    for cand in terms[1:]:
        c_core = cand.replace("…", "")
        if len(r_core) + len(c_core) <= 8:
            res += "、" + cand
        break
    return res


def load_all_rows(db_filter: set[str] | None = None) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for rel in gm.DB_FILES:
        if db_filter and rel not in db_filter:
            continue
        path = BASE_DIR / rel
        if not path.exists():
            continue
        arr = gm._decode_js_json(path, "[")
        if not isinstance(arr, list):
            continue
        for item in arr:
            if not isinstance(item, dict):
                continue
            wid = item.get("id")
            en = str(item.get("en") or "").strip()
            if not en:
                continue
            zh = str(item.get("zh") or "").strip()
            ex = str(item.get("example") or "").strip()
            exzh = str(item.get("exampleZh") or "").strip()
            rows.append(
                {
                    "key": f"{rel}:{wid}",
                    "db": rel,
                    "id": wid,
                    "unit": item.get("unit"),
                    "en": en,
                    "zh": zh,
                    "card_front": compute_concise_zh(zh),
                    "example": ex,
                    "exampleZh": exzh,
                }
            )
    return rows


def run_heuristics(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    hits: list[dict[str, Any]] = []
    for r in rows:
        issues: list[str] = []
        zh = r["zh"]
        ex = r["example"]
        exzh = r["exampleZh"]

        if not zh:
            issues.append("empty_zh")
        if not ex or not exzh:
            issues.append("empty_example")

        # Concatenated English tokens like 'thenineties', 'thesixties', 'theself-employed'
        if re.search(r"\bthe(?:[a-z]*ties|self-)", zh, flags=re.I):
            issues.append("concatenated_en_in_zh")

        # Unconverted Simplified characters in zh or exampleZh
        m_simp = _TRUE_SIMP_RE.findall(zh + " " + exzh)
        if m_simp:
            issues.append(f"simplified_chars:{''.join(sorted(set(m_simp))[:6])}")

        # English example missing target word (tolerant of hyphen/space/inflections)
        en_norm = re.sub(r"[-'’]", " ", r["en"]).lower().strip()
        ex_norm = re.sub(r"[-'’]", " ", ex).lower()
        first_tok = re.sub(r"[^a-z]", "", en_norm.split()[0] if en_norm.split() else "")
        if len(first_tok) >= 5 and first_tok[:3] not in ex_norm:
            issues.append("target_word_missing_in_example")

        if issues:
            hits.append(
                {
                    "key": r["key"],
                    "en": r["en"],
                    "unit": r["unit"],
                    "issues": issues,
                    "zh": zh,
                    "card_front": r["card_front"],
                    "example": ex,
                    "exampleZh": exzh,
                }
            )
    return hits


def _acquire_lock(path: Path) -> Any | None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fh = path.open("a+b")
    try:
        if sys.platform == "win32":
            fh.seek(0)
            msvcrt.locking(fh.fileno(), msvcrt.LK_NBLCK, 1)
        return fh
    except OSError:
        fh.close()
        return None


def _is_compile_lock_held() -> bool:
    if not COMPILE_LOCK_PATH.exists():
        return False
    fh = _acquire_lock(COMPILE_LOCK_PATH)
    if fh is None:
        return True
    try:
        if sys.platform == "win32":
            fh.seek(0)
            msvcrt.locking(fh.fileno(), msvcrt.LK_UNLCK, 1)
    except OSError:
        pass
    finally:
        fh.close()
    return False


def wait_for_compiler_done(poll_sec: int = 20) -> None:
    announced = False
    while _is_compile_lock_held():
        if not announced:
            print("[wait] compile_local_mnemonics is currently using GPU; waiting until compile_dual.lock releases...")
            announced = True
        time.sleep(poll_sec)
    if announced:
        print("[wait] compiler finished / lock released; starting Ollama translation audit now.")


def call_ollama_batch(
    batch: list[dict[str, Any]],
    *,
    base_url: str,
    model: str,
    timeout: float,
) -> list[dict[str, Any]]:
    compact = [
        {
            "key": r["key"],
            "en": r["en"],
            "card_front": r["card_front"],
            "zh": r["zh"],
            "example": re.sub(r"^\[[^\]]+\]\s*", "", r["example"]),
            "exampleZh": r["exampleZh"],
        }
        for r in batch
    ]
    payload = {
        "model": model,
        "stream": False,
        "think": False,
        "keep_alive": "20m",
        "format": "json",
        "options": {
            "temperature": 0.1,
            "num_predict": 900,
            "top_p": 0.9,
        },
        "messages": [
            {"role": "system", "content": _SYSTEM_PROMPT},
            {"role": "user", "content": "請檢查以下詞條並只輸出 JSON：\n" + json.dumps(compact, ensure_ascii=False)},
        ],
    }
    req = urllib.request.Request(
        f"{base_url}/api/chat",
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    content = ((data.get("message") or {}).get("content") or "").strip()
    if not content:
        return []
    try:
        parsed = json.loads(content)
    except json.JSONDecodeError:
        m = re.search(r"\{[\s\S]*\}", content)
        if not m:
            return []
        parsed = json.loads(m.group(0))
    flagged = parsed.get("flagged") if isinstance(parsed, dict) else []
    if not isinstance(flagged, list):
        return []

    by_key = {r["key"]: r for r in batch}
    valid_items: list[dict[str, Any]] = []
    for item in flagged:
        if not isinstance(item, dict):
            continue
        k = str(item.get("key") or "").strip()
        src = by_key.get(k)
        if not src:
            continue
        bad_snip = str(item.get("bad_snippet") or "").strip()
        haystack = f"{src['zh']} || {src['card_front']} || {src['example']} || {src['exampleZh']}"
        if bad_snip and len(bad_snip) >= 2 and bad_snip not in haystack:
            # Drop hallucinated quotes that do not actually appear in the row
            continue
        sug_zh = _to_tw(str(item.get("suggested_zh") or "").strip())
        sug_exzh = _to_tw(str(item.get("suggested_example_zh") or "").strip())
        valid_items.append(
            {
                "key": k,
                "en": src["en"],
                "db": src["db"],
                "id": src["id"],
                "unit": src["unit"],
                "severity": "high" if str(item.get("severity")).lower() == "high" else "medium",
                "issue_type": str(item.get("issue_type") or "wrong_zh"),
                "bad_snippet": bad_snip,
                "reason": _to_tw(str(item.get("reason") or "").strip()),
                "zh": src["zh"],
                "card_front": src["card_front"],
                "example": src["example"],
                "exampleZh": src["exampleZh"],
                "suggested_zh": "" if sug_zh == src["zh"] else sug_zh,
                "suggested_example_zh": "" if sug_exzh == src["exampleZh"] else sug_exzh,
            }
        )
    return valid_items


def write_markdown_report(flagged_path: Path, heuristics: list[dict[str, Any]], report_path: Path, checked_count: int, total_count: int) -> None:
    items: list[dict[str, Any]] = []
    seen_keys: set[str] = set()
    if flagged_path.exists():
        for line in flagged_path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                continue
            k = obj.get("key")
            if k and k not in seen_keys:
                seen_keys.add(k)
                items.append(obj)

    items.sort(key=lambda x: (0 if x.get("severity") == "high" else 1, str(x.get("db")), int(x.get("id") or 0)))
    high_items = [x for x in items if x.get("severity") == "high"]
    med_items = [x for x in items if x.get("severity") != "high"]

    lines = [
        "# 全庫誤譯與例句稽核報告（qwen3:8b + 規則快篩）",
        "",
        f"- **已稽核詞條**：`{checked_count} / {total_count}`",
        f"- **高嚴重度疑似誤譯 (`high`)**：`{len(high_items)}` 筆",
        f"- **中嚴重度疑似瑕疵 (`medium`)**：`{len(med_items)}` 筆",
        f"- **規則快篩提示（零 GPU）**：`{len(heuristics)}` 筆（詳見 `tmp/translation_audit_heuristics.json`）",
        "",
        "## 高嚴重度優先覆核清單 (`high`)",
        "",
    ]
    for it in high_items:
        lines.extend(
            [
                f"### `{it['en']}` (`{it['key']}`, Unit {it.get('unit')}) — `{it['issue_type']}`",
                f"- **原釋義**：`{it['zh']}`（正面簡稱：`{it['card_front']}`）",
                f"- **原例句**：{it['example']} / {it['exampleZh']}",
                f"- **疑似問題片段**：`{it.get('bad_snippet')}` — {it.get('reason')}",
                f"- **建議修正 `zh`**：`{it.get('suggested_zh')}`" if it.get("suggested_zh") else "- **建議修正 `zh`**：（見例句或維持）",
                *(["- **建議修正 `exampleZh`**：" + f"`{it['suggested_example_zh']}`"] if it.get("suggested_example_zh") else []),
                "",
            ]
        )

    lines.extend(["## 中嚴重度清單 (`medium`)", ""])
    for it in med_items[:200]:
        lines.append(
            f"- **`{it['en']}`** (`{it['key']}`, `{it['issue_type']}`): `{it.get('bad_snippet')}` → {it.get('reason')} | 建議：`{it.get('suggested_zh') or it.get('suggested_example_zh')}`"
        )
    if len(med_items) > 200:
        lines.append(f"- *（其餘 {len(med_items) - 200} 筆請查閱 `tmp/translation_audit_flagged.jsonl`）*")

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Read-only translation & example auditor via local Ollama.")
    parser.add_argument("--all", action="store_true", help="Scan all 6 DB_FILES")
    parser.add_argument("--db", default="", help="Comma-separated DB filenames (e.g. words_data.js)")
    parser.add_argument("--words", default="", help="Comma-separated English words to inspect")
    parser.add_argument("--offset", type=int, default=0)
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--batch-size", type=int, default=5)
    parser.add_argument("--no-resume", action="store_true", help="Ignore existing progress file and re-audit")
    parser.add_argument("--wait-for-compiler", action="store_true", help="Sleep cleanly until compile_dual.lock is released")
    parser.add_argument("--heuristics-only", action="store_true", help="Only run fast zero-GPU heuristic scan")
    parser.add_argument("--model", default=DEFAULT_LOCAL_MODEL)
    parser.add_argument("--url", default=DEFAULT_OLLAMA_URL)
    parser.add_argument("--timeout", type=float, default=120.0)
    args = parser.parse_args(argv)

    TMP_DIR.mkdir(parents=True, exist_ok=True)
    db_filter = {s.strip() for s in args.db.split(",") if s.strip()} if args.db else None
    rows = load_all_rows(db_filter)

    if args.words:
        wanted = {w.strip().lower() for w in args.words.split(",") if w.strip()}
        rows = [r for r in rows if r["en"].lower() in wanted]
    elif not args.all and not args.db:
        parser.print_help()
        return 1

    words_mode = bool(args.words)
    if not words_mode:
        heuristics = run_heuristics(rows)
        HEURISTICS_PATH.write_text(json.dumps(heuristics, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"[heuristics] scanned={len(rows)} hits={len(heuristics)} saved={HEURISTICS_PATH}")
    else:
        heuristics = run_heuristics(rows)

    if args.heuristics_only:
        return 0

    lock_fh = _acquire_lock(AUDIT_LOCK_PATH)
    if lock_fh is None:
        print("[skip] another audit_translations instance is already running.")
        return 0

    try:
        if args.wait_for_compiler:
            wait_for_compiler_done()

        done_keys: set[str] = set()
        if not words_mode and not args.no_resume and PROGRESS_PATH.exists():
            for line in PROGRESS_PATH.read_text(encoding="utf-8").splitlines():
                if line.strip():
                    done_keys.add(line.strip())

        todo = [r for r in rows if r["key"] not in done_keys]
        if args.offset > 0:
            todo = todo[args.offset :]
        if args.limit > 0:
            todo = todo[: args.limit]

        print(f"[plan] model={args.model} | total={len(rows)} | already_checked={len(done_keys)} | todo={len(todo)} | batch={args.batch_size}")
        if not todo:
            if not words_mode:
                write_markdown_report(FLAGGED_PATH, heuristics, REPORT_PATH, len(done_keys), len(rows))
            return 0

        bs = max(1, args.batch_size)
        flagged_total = 0
        t_start = time.monotonic()

        for i in range(0, len(todo), bs):
            batch = todo[i : i + bs]
            t0 = time.monotonic()
            try:
                hits = call_ollama_batch(batch, base_url=args.url, model=args.model, timeout=args.timeout)
            except Exception as exc:
                print(f"[warn] batch {i//bs + 1} failed: {exc}")
                time.sleep(2.0)
                continue

            if hits:
                flagged_total += len(hits)
                if words_mode:
                    print(json.dumps(hits, ensure_ascii=False, indent=2))
                else:
                    with FLAGGED_PATH.open("a", encoding="utf-8") as fh:
                        for h in hits:
                            fh.write(json.dumps(h, ensure_ascii=False) + "\n")

            if not words_mode:
                with PROGRESS_PATH.open("a", encoding="utf-8") as fh:
                    for r in batch:
                        fh.write(r["key"] + "\n")
                        done_keys.add(r["key"])

            dt = time.monotonic() - t0
            processed = min(i + bs, len(todo))
            rate = processed / max(0.1, time.monotonic() - t_start)
            eta_min = (len(todo) - processed) / max(0.01, rate) / 60.0
            hit_words = [h["en"] for h in hits]
            print(
                f"[{processed}/{len(todo)}] {batch[0]['en']}..{batch[-1]['en']} "
                f"({dt:.1f}s, hits={len(hits)}{' ' + str(hit_words) if hit_words else ''}, ETA={eta_min:.1f}m)"
            )

            if not words_mode and ((i // bs) % 5 == 0 or processed == len(todo)):
                write_markdown_report(FLAGGED_PATH, heuristics, REPORT_PATH, len(done_keys), len(rows))

        if not words_mode:
            write_markdown_report(FLAGGED_PATH, heuristics, REPORT_PATH, len(done_keys), len(rows))
            print(f"[done] checked={len(done_keys)}/{len(rows)} | new_flagged={flagged_total} | report={REPORT_PATH}")
        return 0
    finally:
        try:
            lock_fh.close()
        except Exception:
            pass


if __name__ == "__main__":
    raise SystemExit(main())
