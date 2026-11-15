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
    "gemini-3.6-flash",
    "gemini-3.8-flash",
    "gemini-2.5-flash",
)
DEFAULT_THINKING_LEVEL = "low"
DEFAULT_TEMPERATURE = 0.6
DEFAULT_BATCH_SIZE = 8
MAX_MNEMONIC_LENGTH = 1500
MIN_MNEMONIC_LENGTH = 40

SYSTEM_INSTRUCTION = """你是一位專精台灣英文教學的記憶大師，擅長幫學習者建立「一聽一拆就能秒反應字義」的真實記憶橋樑（字根字首拆解、雙關台灣諧音、或拼字詞中詞聯想 ＋ 因果緊扣的雙聯想畫面 ＋ 擴充／KK 音標 ＋ 高頻同義字）。

請嚴格遵守以下品質鐵則，違規將直接退回重寫：

【規則一：挑選最自然的記憶掛鉤（禁止為諧音而硬湊無意義音譯）】
1. 多音節、拉丁／希臘字根字首字（例如 protect, polite, decide, accelerate, important）→ 優先用「字根／字首／熟詞拆解」，直接講清字根如何推出字義；唯有當字根太冷門時，才輔以自然諧音。
2. 短字或發音剛好能「一秒變成有意義的台灣中文詞句」→ 才用「雙關諧音法」（如 stubborn → 「死不認」，撞到人還死不認錯＝固執；ponder → 「胖的」，變胖後天天坐在樹下沉思；happy → 「黑皮」，去黑皮開趴很快樂）。
3. 拼字剛好藏著熟詞（如 believe → be + lie 謊言 + ve；island → is + land）→ 用「拼字拆解」。

【規則二：五大絕對禁令（發現任一條直接判死退件）】
❌ 禁令 1（無意義音譯）：嚴禁硬湊唸起來毫無中文意義的音譯字，如「破來得」「怕趴啦」「普洛特客」「科瑞特」「阿客色咧去勒巡」「低賽的」「硬撲滑」。
❌ 禁令 2（引號偷塞字義）：掛鉤「...」內絕對不能偷加頓號或括號貼中文意思（❌ 嚴禁「破來得、有禮貌的」「怕趴啦、受歡迎的」「發音端（朋友）」）。
❌ 禁令 3（假人名敷衍梗）：嚴禁編造「特務普洛特客」「發明家科瑞特」「阿伯叫吉擬」這類用音譯硬套人名或地名的偷懶故事。
❌ 禁令 4（畫面與掛鉤脫節）：「聯想畫面 1」**必須直接出現並演出**上方「拆解 / 諧音」的核心關鍵詞，讓掛鉤因果導向英文原義；嚴禁寫一句跟掛鉤毫無關聯的普通例句！（❌ 反例：掛鉤寫「破來得」，畫面 1 卻只寫「他對長輩很有禮貌，開口閉口都是謝謝」→ 毫無記憶效果，退件！）
❌ 禁令 5（混雜英文與錯字簡體）：中文敘述內不可直接夾帶目標英文單字（❌ 反例：「你必須 decide 要往左走」），嚴禁錯字（聯型畫面）與簡體字（画面、计划），嚴禁任何 Markdown 符號（**、`、#、- / * 項目符號）。

【好壞範本對照（請比照好範例的水準）】
❌ 劣質：「拆解 / 諧音：『破來得、有禮貌的』... 聯想畫面 1：他對長輩總是很有禮貌。」
✅ 優質（polite [pəˋlaɪt] 有禮貌的）：
諧音聯想：
拆解 / 諧音：pol（同 polish 磨光、磨圓滑）+ 諧音「怕賴」

聯想畫面 1：把自己的脾氣磨光（pol-）磨圓滑，深怕別人嫌你賴（-lite）皮粗魯，對長輩待人接物自然變得客氣有禮貌。

聯想畫面 2：餐廳服務生說話像被拋光過一樣圓潤得體，完全展現職場社交禮節與禮貌。

高效擴充：polite 與 polish（拋光、使優雅）同源，加上字尾 -ness 成名詞 politeness（禮貌），反義字為 impolite / rude。
KK 音標：[pəˋlaɪt] -> 主重音在第二音節 lite，字尾不發音的 e 讓 i 發長雙母音 [aɪ]。

【輸出格式要求（繁體中文純文字，每字約 180～340 字，段落間保留一個空行）】
諧音聯想：
拆解 / 諧音：...（或 諧音：「...」——說明如何連到核心意義）

聯想畫面 1：...（必含上方掛鉤關鍵詞，因果緊扣第一字義）

聯想畫面 2：...（另一生活情境或延伸字義，補強記憶）

高效擴充：...（真實字根／衍生字／拼寫陷阱提醒）
KK 音標：<完全照抄輸入 KK> -> <重音位置與嘴型／母音子音發音提醒>

常見同義字：

word1（簡短中文詞義與用法／語氣差異）

word2（簡短中文詞義與用法／語氣差異）

word3（簡短中文詞義與用法／語氣差異）

忠於輸入提供的 word、kk 與 zh；禁止篡改 kk 音標，描述重音務必與 kk 中的「ˋ」位置一致；JSON items 須精確涵蓋輸入批次中的每個 word。"""

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


_HEADER_SYN_RE = re.compile(r"(?<!\n)[ \t]*(?=(?:聯想畫面\s*[12]|高效擴充|常見同義字)[：:])")
_KK_INLINE_RE = re.compile(r"(?<!\n)[ \t]*(?=KK\s*音標[：:])")


def _cjk_only(s: str) -> str:
    return "".join(re.findall(r"[\u4e00-\u9fff]+", s or ""))


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

    # Fix typos and simplified Chinese leaks before section normalization
    for wrong, right in (
        ("聯型畫面", "聯想畫面"),
        ("聯行畫面", "聯想畫面"),
        ("聯想画面", "聯想畫面"),
        ("联型畫面", "聯想畫面"),
        ("联想画面", "聯想畫面"),
        ("联想", "聯想"),
        ("谐音", "諧音"),
        ("扩充", "擴充"),
        ("同义", "同義"),
        ("音标", "音標"),
        ("画面", "畫面"),
        ("计划", "計畫"),
        ("体形", "體形"),
        ("记忆", "記憶"),
    ):
        s = s.replace(wrong, right)

    # Restore paragraph breaks for old single-blob entries
    s = _HEADER_SYN_RE.sub("\n\n", s)
    s = _KK_INLINE_RE.sub("\n", s)
    syn_idx = s.find("常見同義字")
    if syn_idx >= 0:
        head_part, syn_part = s[:syn_idx], s[syn_idx:]
        syn_part = re.sub(r"^常見同義字[：:][ \t]*(?=\S)", "常見同義字：\n\n", syn_part)
        syn_part = re.sub(r"(?<=[）\)])[，,、][ \t]*(?=[a-zA-Z])", "\n\n", syn_part)
        s = head_part + syn_part

    # Normalize top hook header ("諧音：X\n\n諧音：「X」...", "諧音：\n拆解 / 諧音：...", single-line "諧音聯想：諧音：...")
    lines = s.split("\n")
    if lines:
        first = lines[0].strip()
        if re.match(r"^諧音聯想[：:]\s*\S+", first):
            rest_first = re.sub(r"^諧音聯想[：:]\s*", "", first, count=1).strip()
            lines = ["諧音聯想：", rest_first] + lines[1:]
        elif re.match(r"^(?:諧音|諧音聯想)[：:]\s*$", first):
            idx = 1
            while idx < len(lines) and not lines[idx].strip():
                idx += 1
            if idx < len(lines):
                lines = ["諧音聯想："] + lines[idx:]
        elif re.match(r"^諧音[：:]\s*\S+", first):
            val1 = re.sub(r"^諧音[：:]\s*", "", first, count=1).strip()
            idx = 1
            while idx < len(lines) and not lines[idx].strip():
                idx += 1
            if idx < len(lines) and re.match(r"^(?:諧音|拆解\s*/\s*諧音|拼字拆解)[：:]", lines[idx].strip()):
                val2 = lines[idx].strip()
                c1, c2 = _cjk_only(val1), _cjk_only(val2)
                if c1 and (c1 in c2 or len(c1) <= len(c2)):
                    lines = ["諧音聯想：", val2] + lines[idx + 1 :]
                else:
                    lines = ["諧音聯想：", first] + lines[idx:]
            else:
                lines = ["諧音聯想：", first] + lines[1:]
        elif re.match(r"^(?:拆解\s*/\s*諧音|拼字拆解|諧音聯想)[：:]", first):
            if not first.startswith("諧音聯想"):
                lines = ["諧音聯想："] + lines
        s = "\n".join(lines)

    s = re.sub(r"\n{3,}", "\n\n", s)
    s = s.strip()
    if len(s) > MAX_MNEMONIC_LENGTH:
        s = s[:MAX_MNEMONIC_LENGTH].rstrip()
    return s


_HOOK_STOPWORDS = frozenset({
    "拆解", "諧音", "拼字", "聯想", "字首", "字根", "字尾", "前綴", "後綴",
    "加上", "代表", "意思", "音似", "念作", "唸作", "來自", "同源", "源自", "中文", "台灣",
})
_FAKE_PERSON_EXPLICIT_RE = re.compile(
    r"(?:名叫|叫做|名為|稱為)[\u4e00-\u9fff「」]{2,6}"
    r"|(?:特務|發明家|魔法師|探險家|科學家|考古學家|偵探|騎士|大師|專家|將軍|國王)「[\u4e00-\u9fff]{2,5}」"
)
_ROLE_CANDIDATE_RE = re.compile(
    r"(?:特務|發明家|魔法師|探險家|科學家|考古學家|偵探|騎士|大師|專家|將軍|國王)([\u4e00-\u9fff]{2,5})"
)


def _has_fake_person_trope(hook_block: str, scene1: str) -> bool:
    combined = f"{hook_block}\n{scene1}"
    if _FAKE_PERSON_EXPLICIT_RE.search(combined):
        return True
    hook_cjk = _cjk_only(re.sub(r"^(?:諧音聯想|諧音|拆解\s*/\s*諧音)[：:]", "", hook_block, flags=re.M))
    for m in _ROLE_CANDIDATE_RE.finditer(combined):
        name_cand = m.group(1)
        if hook_cjk and any(name_cand[i : i + 2] in hook_cjk for i in range(max(0, len(name_cand) - 1))):
            if "+" not in hook_block and "＋" not in hook_block:
                return True
    return False


def audit_mnemonic(word: str, text: str) -> dict[str, Any]:
    """Return programmatic quality score (0..100) and concrete issue codes for one mnemonic."""
    issues: list[str] = []
    score = 100
    s = (text or "").replace("\r\n", "\n")

    if len(s.strip()) < MIN_MNEMONIC_LENGTH:
        return {"score": 0, "issues": ["too_short"]}

    if re.search(r"聯型畫面|聯行畫面|联|画面|谐音|联想|扩充|同义|音标", s):
        issues.append("format_typo")
        score -= 20
    if re.match(r"^諧音[：:]", s):
        issues.append("bad_header")
        score -= 10

    s1_m = re.search(r"聯想畫面\s*1[：:]\s*([^\n]+)", s)
    s2_m = re.search(r"聯想畫面\s*2[：:]\s*([^\n]+)", s)
    kk_m = re.search(r"KK\s*音標[：:]\s*([^\n]+)", s)
    if not s1_m:
        issues.append("missing_scene1")
        score -= 30
    if not s2_m:
        issues.append("missing_scene2")
        score -= 20
    if not kk_m:
        issues.append("missing_kk")
        score -= 15

    hook_block = s[: s1_m.start()] if s1_m else s.split("\n\n", 1)[0]
    scene1 = s1_m.group(1).strip() if s1_m else ""
    scene2 = s2_m.group(1).strip() if s2_m else ""

    # 1. Definition stuffed inside hook quotes: 「破來得、有禮貌的」 / 「發音端（朋友）」
    for q in re.findall(r"「([^」]{2,40})」", hook_block):
        if re.search(r"[、，,]\s*[\u4e00-\u9fff]{2,8}$", q) or (
            "+" not in hook_block
            and "＋" not in hook_block
            and re.search(r"^[\u4e00-\u9fff]{2,5}（[\u4e00-\u9fff]{2,6}）$", q)
        ):
            issues.append("def_in_hook")
            score -= 45
            break

    # 2. Fake transliterated person trope
    if _has_fake_person_trope(hook_block, scene1):
        issues.append("name_person_trope")
        score -= 40

    # 3. Target English word lazily dropped raw inside Chinese scene sentence
    clean_w = re.sub(r"[^a-zA-Z]", "", word or "").lower()
    if len(clean_w) >= 4:
        s1_low, s2_low = scene1.lower(), scene2.lower()
        if clean_w in s1_low or clean_w in s2_low:
            raw_en_re = re.compile(rf"[\u4e00-\u9fff]\s*\b{re.escape(clean_w)}\b\s*[\u4e00-\u9fff]", re.I)
            if raw_en_re.search(scene1) or raw_en_re.search(scene2):
                issues.append("raw_english_in_scene")
                score -= 25

    # 4. Disconnected scene 1: scene 1 must reuse >=1 keyword/2-gram/root from the hook block
    if s1_m:
        hook_for_match = re.sub(r"[、，,]\s*[\u4e00-\u9fff]{2,8}(?=」)", "", hook_block)
        cjk_chunks = re.findall(r"[\u4e00-\u9fff]{2,}", hook_for_match)
        grams: set[str] = set()
        for ch in cjk_chunks:
            if ch in _HOOK_STOPWORDS:
                continue
            for sw in _HOOK_STOPWORDS:
                ch = ch.replace(sw, "")
            if len(ch) >= 2:
                for i in range(len(ch) - 1):
                    grams.add(ch[i : i + 2])
        roots = {r.lower() for r in re.findall(r"[a-zA-Z]{3,}", hook_for_match)}
        scene_lower = scene1.lower()
        has_cjk_bridge = any(g in scene1 for g in grams) if grams else True
        has_root_bridge = any(r in scene_lower for r in roots) if roots else False
        if not has_cjk_bridge and not has_root_bridge:
            issues.append("scene1_disconnected")
            score -= 35

    return {"score": max(0, score), "issues": issues}


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


def _parse_batch_response(
    raw_text: str,
    *,
    strict_quality: bool = True,
    verbose: bool = True,
) -> dict[str, str]:
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
        if not key or len(cleaned) < MIN_MNEMONIC_LENGTH:
            continue
        if strict_quality:
            rep = audit_mnemonic(key, cleaned)
            critical = {"def_in_hook", "name_person_trope", "scene1_disconnected", "raw_english_in_scene"}
            if rep["score"] < 75 or critical.intersection(rep["issues"]):
                if verbose:
                    print(
                        f"[quality-reject] {key} (score={rep['score']}, issues={rep['issues']})",
                        file=sys.stderr,
                        flush=True,
                    )
                continue
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


def _resolve_thinking_level(active_model: str, requested_level: str) -> str | None:
    lvl = str(requested_level or "").strip().lower()
    if not lvl or lvl in ("off", "none", "disabled"):
        return None
    if lvl == "minimal" and (
        active_model.startswith("gemini-3.8") or active_model.startswith("gemini-2.5")
    ):
        return "low"
    return lvl


def _call_gemini_batch_sync(
    api_key: str,
    batch: list[dict[str, Any]],
    model: str,
    thinking_level: str,
    max_retries: int = 3,
    rpm: float = 14.0,
    temperature: float = DEFAULT_TEMPERATURE,
    strict_quality: bool = True,
) -> dict[str, str]:
    from google.genai import types

    prompt = _build_batch_prompt(batch)
    last_err: Exception | None = None
    attempt = 0
    switches = 0
    max_switches = len(MODEL_FALLBACK_ORDER) + 2
    disable_thinking_cfg = False

    while attempt < max_retries and switches < max_switches:
        candidates = _pick_candidate_models(model)
        if not candidates:
            return {}
        active_model = candidates[0]
        try:
            _wait_rate_slot(rpm)
            client = _get_thread_client(api_key)
            cfg_kwargs: dict[str, Any] = {
                "system_instruction": SYSTEM_INSTRUCTION,
                "temperature": temperature,
                "response_mime_type": "application/json",
                "response_schema": RESPONSE_SCHEMA,
            }
            resolved_lvl = None if disable_thinking_cfg else _resolve_thinking_level(active_model, thinking_level)
            if resolved_lvl:
                cfg_kwargs["thinking_config"] = types.ThinkingConfig(thinking_level=resolved_lvl)
            cfg = types.GenerateContentConfig(**cfg_kwargs)
            resp = client.models.generate_content(
                model=active_model,
                contents=prompt,
                config=cfg,
            )
            raw_text = (getattr(resp, "text", None) or "").strip()
            if not raw_text:
                raise ValueError(f"Empty response from {active_model}")
            parsed = _parse_batch_response(raw_text, strict_quality=strict_quality, verbose=True)
            if not parsed:
                raise ValueError(f"Parsed zero valid mnemonic items from {active_model}")
            return parsed
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            err_msg = str(exc)
            _thread_local.client = None
            if not disable_thinking_cfg and ("thinking" in err_msg.lower() and ("400" in err_msg or "INVALID_ARGUMENT" in err_msg)):
                disable_thinking_cfg = True
                continue
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
        left = _call_gemini_batch_sync(
            api_key, batch[:mid], model, thinking_level, max_retries=2, rpm=rpm,
            temperature=temperature, strict_quality=strict_quality,
        )
        right = _call_gemini_batch_sync(
            api_key, batch[mid:], model, thinking_level, max_retries=2, rpm=rpm,
            temperature=temperature, strict_quality=strict_quality,
        )
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
    batch_size: int = DEFAULT_BATCH_SIZE,
    concurrency: int = 3,
    rpm: float = 14.0,
    temperature: float = DEFAULT_TEMPERATURE,
    strict_quality: bool = True,
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
            f"(model={model}, thinking={thinking_level}, temp={temperature}, batch_size={batch_size}, concurrency={concurrency})",
            flush=True,
        )

    dirty_shards: set[str] = set()
    completed_keys: set[str] = set()
    done_batches = 0
    start_ts = time.perf_counter()
    target_keys = {item["key"] for item in deduped}

    pool = concurrent.futures.ThreadPoolExecutor(max_workers=max(1, concurrency))
    stalled = False
    try:
        pending = {
            pool.submit(
                _call_gemini_batch_sync, api_key, b, model, thinking_level, 3, rpm, temperature, strict_quality
            ): b
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
                        completed_keys.add(k)

                if dirty_shards and (done_batches % 5 == 0 or not pending):
                    for s in sorted(dirty_shards):
                        write_shard(s, shard_map[s], mnemonics_dir)
                    dirty_shards.clear()

                if verbose and (done_batches % 3 == 0 or not pending):
                    elapsed = time.perf_counter() - start_ts
                    rate = len(completed_keys) / elapsed if elapsed > 0 else 0.0
                    print(
                        f"[mnemonics] Batches {done_batches}/{len(batches)} | "
                        f"generated {len(completed_keys)}/{total_words} ({elapsed:.1f}s, {rate:.1f} words/s)",
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
            if item["key"] not in completed_keys
        ]

        if not stalled and still_missing and _pick_candidate_models(model):
            missing_key_set = {item["key"] for item in deduped if item["key"] not in completed_keys}
            retry_entries = [item for item in deduped if item["key"] in missing_key_set]
            step = max(1, min(3, batch_size))
            retry_batches = [retry_entries[i : i + step] for i in range(0, len(retry_entries), step)]
            if verbose:
                print(
                    f"[mnemonics] Retrying {len(retry_entries)} missed/rejected words in {len(retry_batches)} small batches...",
                    flush=True,
                )
            retry_dirty: set[str] = set()
            retry_pending = {
                pool.submit(
                    _call_gemini_batch_sync, api_key, b, model, thinking_level, 3, rpm, temperature, strict_quality
                ): b
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
                        completed_keys.add(k)
            for s in sorted(retry_dirty):
                write_shard(s, shard_map[s], mnemonics_dir)
            still_missing = [
                item["en"]
                for item in deduped
                if item["key"] not in completed_keys
            ]
    finally:
        pool.shutdown(wait=not stalled, cancel_futures=True)

    if verbose and still_missing:
        print(f"[mnemonics] Warning: {len(still_missing)} words failed: {still_missing[:15]}", file=sys.stderr)

    return {
        "requested": total_words,
        "generated": len(completed_keys),
        "failed": still_missing,
        "stalled": stalled,
    }


async def generate_for_entries(
    entries: list[dict[str, Any]],
    *,
    api_key: str,
    model: str = DEFAULT_MODEL,
    thinking_level: str = DEFAULT_THINKING_LEVEL,
    batch_size: int = DEFAULT_BATCH_SIZE,
    concurrency: int = 3,
    rpm: float = 14.0,
    temperature: float = DEFAULT_TEMPERATURE,
    strict_quality: bool = True,
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
        temperature=temperature,
        strict_quality=strict_quality,
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
    batch_size: int = DEFAULT_BATCH_SIZE,
    concurrency: int = 3,
    rpm: float = 14.0,
    temperature: float = DEFAULT_TEMPERATURE,
    strict_quality: bool = True,
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
        temperature=temperature,
        strict_quality=strict_quality,
        overwrite=overwrite,
        mnemonics_dir=mnemonics_dir,
        verbose=verbose,
    )


def fix_all_shards_format(mnemonics_dir: Path = MNEMONICS_DIR) -> dict[str, int]:
    """Deterministically normalize typos, duplicated headers, and missing paragraph spacing (0 API calls)."""
    shard_map = load_all_shards(mnemonics_dir)
    total = 0
    updated = 0
    shards_written = 0
    for shard, entries in shard_map.items():
        dirty = False
        for key, raw in list(entries.items()):
            total += 1
            cleaned = clean_mnemonic_text(raw)
            if cleaned and cleaned != raw:
                entries[key] = cleaned
                updated += 1
                dirty = True
        if dirty:
            write_shard(shard, entries, mnemonics_dir)
            shards_written += 1
    return {"total": total, "updated": updated, "shards_written": shards_written}


def audit_all_shards(
    mnemonics_dir: Path = MNEMONICS_DIR,
    max_score: int = 79,
) -> dict[str, Any]:
    """Audit all loaded shard entries and return issue summary + weak keys sorted worst-first."""
    shard_map = load_all_shards(mnemonics_dir)
    issue_counts: dict[str, int] = {}
    weak: list[tuple[int, str, list[str]]] = []
    total = 0
    score_ge80 = 0
    for shard_entries in shard_map.values():
        for key, val in shard_entries.items():
            total += 1
            rep = audit_mnemonic(key, val)
            for iss in rep["issues"]:
                issue_counts[iss] = issue_counts.get(iss, 0) + 1
            if rep["score"] >= 80:
                score_ge80 += 1
            if rep["score"] <= max_score:
                weak.append((rep["score"], key, rep["issues"]))
    weak.sort(key=lambda t: (t[0], -len(t[2]), t[1]))
    return {
        "total": total,
        "score_ge80": score_ge80,
        "weak_count": len(weak),
        "issue_counts": dict(sorted(issue_counts.items(), key=lambda kv: -kv[1])),
        "weak_items": weak,
    }


def _select_target_entries(
    args: argparse.Namespace,
    catalog: dict[str, dict[str, Any]],
) -> list[dict[str, Any]]:
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

    if args.regen_weak:
        report = audit_all_shards(MNEMONICS_DIR, max_score=args.max_score)
        selected = []
        for _score, key, _issues in report["weak_items"]:
            if key in catalog:
                selected.append(catalog[key])
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
    parser.add_argument("--fix-format", action="store_true", help="Clean format typos, doubled headers & missing blank lines (0 API calls)")
    parser.add_argument("--audit", action="store_true", help="Audit mnemonic quality across all shards (0 API calls)")
    parser.add_argument("--regen-weak", action="store_true", help="Regenerate low-scoring mnemonics flagged by --audit (implies --overwrite)")
    parser.add_argument("--max-score", type=int, default=79, help="Quality score ceiling for --audit/--regen-weak (default: 79)")
    parser.add_argument("--units", type=int, nargs="+", help="Target one or more vocabulary units (e.g. --units 1 2)")
    parser.add_argument("--words", nargs="+", help="Target specific words (e.g. --words also abandon)")
    parser.add_argument("--all", action="store_true", help="Target all missing words across all units")
    parser.add_argument("--overwrite", action="store_true", help="Regenerate even if already present in shard")
    parser.add_argument("--limit", type=int, default=0, help="Optional cap on target unique words for pilot runs")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Gemini model (default: {DEFAULT_MODEL})")
    parser.add_argument("--thinking", default=DEFAULT_THINKING_LEVEL, help=f"Thinking level (default: {DEFAULT_THINKING_LEVEL})")
    parser.add_argument("--temperature", type=float, default=DEFAULT_TEMPERATURE, help=f"Sampling temperature (default: {DEFAULT_TEMPERATURE})")
    parser.add_argument("--no-strict-quality", action="store_true", help="Disable quality gate rejection in batch parser")
    parser.add_argument("--batch-size", type=int, default=DEFAULT_BATCH_SIZE, help=f"Words per Gemini API call (default: {DEFAULT_BATCH_SIZE})")
    parser.add_argument("--concurrency", type=int, default=3, help="Concurrent API worker threads (default: 3)")
    parser.add_argument("--rpm", type=float, default=14.0, help="Max API requests per minute (default: 14, 0=unlimited)")
    args = parser.parse_args(argv)

    load_local_env()

    if args.init_shards:
        created = init_empty_shards(MNEMONICS_DIR)
        print(f"[mnemonics] Initialized {created} new shard files in {MNEMONICS_DIR} (27 total).")
        if not (args.stats or args.fix_format or args.audit or args.regen_weak or args.units or args.words or args.all):
            return 0

    if args.fix_format:
        fx = fix_all_shards_format(MNEMONICS_DIR)
        print(
            f"[fix-format] updated={fx['updated']}/{fx['total']} entries across {fx['shards_written']} shards."
        )
        if not (args.stats or args.audit or args.regen_weak or args.units or args.words or args.all):
            return 0

    if args.audit:
        rep = audit_all_shards(MNEMONICS_DIR, max_score=args.max_score)
        print(
            f"[audit] total={rep['total']} | score>=80: {rep['score_ge80']} | "
            f"weak (score<={args.max_score}): {rep['weak_count']}"
        )
        print(f"  issues: {rep['issue_counts']}")
        print("  worst samples:")
        for sc, k, iss in rep["weak_items"][:15]:
            print(f"    {k:<18} score={sc:<3} issues={iss}")
        if not (args.stats or args.regen_weak or args.units or args.words or args.all):
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
        if not (args.regen_weak or args.units or args.words or args.all):
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
        temperature=args.temperature,
        strict_quality=not args.no_strict_quality,
        overwrite=bool(args.overwrite or args.regen_weak),
        mnemonics_dir=MNEMONICS_DIR,
        verbose=True,
    )
    print(f"[done] generated={res['generated']}/{res['requested']} failed={len(res['failed'])}")
    return 0 if not res["failed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
