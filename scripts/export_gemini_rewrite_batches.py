#!/usr/bin/env python3
"""Audit existing mnemonics for KK phonetic distortion, forced clichés, and fake etymologies,
then export prioritized copy-paste prompt batches for Gemini Web (--apply-json compatible).
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any

SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR.parent
OUT_DIR = BASE_DIR / "tmp" / "gemini_rewrite"

if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import compile_local_mnemonics as clm
import generate_mnemonics as gm
import kk_hook_helper as kh

CLICHE_RE = re.compile(
    r"還真的把|比那些.{1,8}還真實|這.{1,6}（[a-zA-Z]+）才叫|把「?[^」]{1,12}」?當成|當成.{1,8}來"
    r"|一邊喊著.{1,10}一邊|嘴裡一直念著|念著「?[^」]{1,8}」?這句"
)
BAD_ECHO_EI_RE = re.compile(r"^[得為塞佩貝妹費給黑雷內飛][欸耶]$")
REVERSE_MORPH_RE = re.compile(
    r"(?:的簡化版|的簡化形式|同源[^，。\n]*字尾\s*-[a-zA-Z]+\s*→)"
)
FAKE_COGNATE_PAIR_RE = re.compile(
    r"與\s*\*\*app\*\*\s*（應用程式）同源"
    r"|happy\s*→\s*happy"
    r"|cake the cake"
    r"|與\s*\*\*global\*\*.*同源"
)

GEMINI_WEB_PROMPT_HEADER = """你是一位台灣極受歡迎、治學嚴謹又超懂台灣口語與台語梗的資深英文老師。
我要修補單字書裡「發音不夠貼近 KK / 硬湊廢話 / 亂編假字源」的記憶法。

請幫我把下面清單中的每一個單字，**全面重寫為高品質的「繁體中文雙軌記憶法」**。

【諧音發音絕對標準（修正舊版缺陷）】
1. **區分 KK 長母音 `/e/`（IPA `/eɪ/`）與短母音 `/ɛ/`**：
   - `/e/`（如 *tale [tel], cake [kek], date [det], day [de], sale [sel]*）要對應近似 **「貼／鐵／泰／凱／戴／賽」** 等自然雙母音質感；**嚴禁**翻成短母音 **「特／客／得／塞」**（例：`tale [tel]` 不可翻「特喔」，應用 **「貼喔」**、**「鐵喔」** 或借台語 **「踢喔／太」** 才準！）。
2. **禁止怪異機器斷音尾字**：嚴禁用毫無詞義的「……喔」去湊 `-l` 尾音（例：不要再寫「歐喔、波喔、美喔、費喔」），或單音節硬補「……欸」（如「得欸、為欸、塞欸」）；請找本身讀起來像、又有畫面感的自然 2～4 字台灣中文或台語口語諧音詞（例如 *all* →「歐全」/「奧」、*ball* →「爆」/「抱喔」可自然融進「抱」動詞、*day* →「爹」/「低」等或合理組詞）。
3. **純繁體中文漢字**：`趣味諧音` 的引號 `「...」` 內**不可含英文字母 A–Z**；若借台語讀音請自然帶入語境並簡單點出（例如台語「踢」）。
4. **拒絕湊字廢話**：每個諧音漢字都要自然化進具體生活動作（例如把「貼喔」拆成「把海報**貼**在牆上**喔**」），**嚴禁**出現「還真的把Ｘ當成Ｙ來講／這Ｙ才叫精彩／比那些Ｙ還真實」這種硬塞廢話。

【Track 2 真實字源與防胡謅標準】
1. **嚴禁假詞源與逆向推導**：絕不可出現「*apple* 與 *app* 同源」、「*cat* 是 *catty* 簡化」、「*able* 是 *ability* 簡化」、「*ball* 與 *global* 同源」，或自創不存在的片語（如 `cake the cake`）。
2. **無透明字源的短字直接寫 `* 記憶錨點：`**：用「與高頻同源詞比較、常見高頻搭配片語（必須 100% 真實存在）、拼字規律」來寫即可，**且 `#### 2.` 內嚴禁再提到 `#### 1.` 的中文諧音**。

【每個單字的 `mnemonic` 欄位必須嚴格遵守以下 Markdown 格式（用 `\\n` 換行）】
#### 1. 諧音聯想法（適合快速圖像掛鉤）

* 趣味諧音：**「諧音A」**
* 情境聯想畫面：
  * **畫面 1（諧音A）**：具體生動的台灣生活畫面，將**「中文核心意思（英文單字）」**與諧音各字自然融入劇情。

#### 2. 字源與拆字記憶法（避免諧音斷鏈，回歸語意本質）

* 記憶錨點：寫真實字根拆解（改用 `* 拆解邏輯：`）或高頻真搭配/拼字錨點（短字用 `* 記憶錨點：`）
* 記憶脈絡：
  * 一句講透語意核心與實際用法脈絡，重點用 **粗體** 標出。
  * 一句精練口訣收尾鎖定拼字與核心字義。

【輸出格式鐵律】
- **只輸出單一個 ```json 程式碼區塊**，格式為 JSON 陣列：`[{"word": "英文key", "mnemonic": "#### 1. ..."}, ...]`。
- 必須逐字對齊輸入清單的所有單字（不可漏字），並確保雙引號、換行 (`\\n`) 為合法 JSON，全部使用台灣繁體中文（勿用簡體字）。

請處理以下這一批單字（每個條目已附上 `bad_hook` 與 `why_flagged`，請避開這些地雷）：
```json
"""


def parse_mnemonic(txt: str) -> tuple[list[str], str, str]:
    m1 = re.search(r"趣味諧音[：:]\s*([^\n]+)", txt)
    hooks = re.findall(r"「([^」]+)」", m1.group(1)) if m1 else []
    m2 = re.search(r"情境聯想畫面[：:]\s*([\s\S]*?)(?:\n#{2,4}\s*2\.|\Z)", txt)
    scene1 = m2.group(1).strip() if m2 else ""
    scene1_body = re.sub(r"\*\*畫面\s*\d+（[^）]+）\*\*[：:]?", "", scene1)
    m3 = re.search(r"#### 2\.[\s\S]*", txt)
    sec2 = m3.group(0) if m3 else ""
    return hooks, scene1_body, sec2


def audit_word_reasons(key: str, meta: dict[str, Any], txt: str) -> tuple[int, list[str], str]:
    """Return (severity_score, human_reasons, current_hook_summary)."""
    hooks, body, sec2 = parse_mnemonic(txt)
    kk = meta.get("kk") or ""
    nk = kh.normalize_kk(kk)
    reasons: list[str] = []
    severity = 0
    hk0 = hooks[0] if hooks else ""

    if CLICHE_RE.search(body):
        reasons.append("情境含機械重複/硬湊廢話套句")
        severity += 40
    if hooks and body and len(hk0) >= 2:
        if body.count(hk0) >= 2 and not re.search(r"[「」]", body):
            reasons.append("諧音詞未拆解融入動作，直接硬重複")
            severity += 30
        elif body.count(hk0) >= 3:
            reasons.append("畫面內文過度重複同一諧音詞(>=3次)")
            severity += 25

    if hooks:
        if len(hk0) >= 5 and len(key) <= 7:
            reasons.append(f"短字諧音過長硬譯({len(hk0)}字)")
            severity += 25
        if re.search(r"(?:^|[^aɪɔ])[tdkslnrCJzθ]e", nk):
            for m_on in re.finditer(r"([tdkslnrCJzθ]?)e", nk):
                c = m_on.group(1)
                if c == "t":
                    prefix_hk = hk0[:-1] if (nk.endswith("t") and len(hk0) >= 2) else hk0
                    if any(ch in prefix_hk for ch in ("特", "提")):
                        reasons.append("KK長母音/e/(/eɪ/)誤翻成短母音「特/提」，應改貼近「貼/鐵/太/踢」")
                        severity += 45
                elif c == "k" and ("客客" in hk0 or "刻客" in hk0 or hk0.startswith(("客", "刻", "科"))):
                    reasons.append("KK長母音/e/(/eɪ/)誤翻成「客/刻」，請改貼近雙母音讀感")
                    severity += 45
                elif c == "d" and (hk0.startswith(("得", "德")) or "得特" in hk0 or "得欸" in hk0):
                    reasons.append("KK長母音/e/(/eɪ/)誤翻成「得」，應改貼近「戴/代/低」")
                    severity += 40
                elif c == "s" and (hk0.startswith(("誰", "師")) or "塞欸" in hk0):
                    reasons.append("字首s或/e/音配字失真(勿用誰/師/塞欸)")
                    severity += 35
                elif c == "r" and hk0.startswith(("人", "認", "任")):
                    reasons.append("r+/e/誤翻成「人」")
                    severity += 35
                elif c == "l" and hk0.startswith(("冷", "勒")):
                    reasons.append("l+/e/誤翻成「冷/勒」")
                    severity += 35
        if BAD_ECHO_EI_RE.match(hk0):
            reasons.append("單音節硬補尾音「欸」造成斷音感")
            severity += 40
        if "kæ" in nk and hk0.startswith(("客", "刻", "克")):
            reasons.append("短母音/kæ/誤翻成「客」，應貼近「凱/開/卡」")
            severity += 35
        if "ʃ" not in nk and "ʃ" not in kk and (hk0.startswith(("師", "誰", "十", "時")) or hk0.endswith(("時", "十", "師"))):
            reasons.append("清齒齦音/s/誤翻捲舌「師/誰/時」")
            severity += 30
        if len(hk0) == 2 and hk0[0] == hk0[1]:
            reasons.append("同字疊音諧音過於單調")
            severity += 25
        if len(hk0) <= 3 and hk0.endswith("喔") and hk0 != "貼喔":
            reasons.append("結尾硬加「喔」湊字(-l尾音不自然)")
            severity += 30
        elif nk.endswith("l") and hk0.endswith("喔"):
            reasons.append("-l尾音結尾「喔」可再更自然生活化")
            severity += 15

    # Track 2 checks
    if FAKE_COGNATE_PAIR_RE.search(sec2) or REVERSE_MORPH_RE.search(sec2):
        reasons.append("Track 2含逆向推導或疑似假詞源/假片語")
        severity += 45
    elif len(key) <= 5 and re.search(r"(?:來自|源自)(?:古英語|古法語|古諾斯|拉丁|希臘)", sec2) and key not in clm.CURATED_ETYMOLOGY:
        reasons.append("短字Track 2無根據推測古語詞源，請改寫為真實片語/同源記憶錨點")
        severity += 20

    # Dedup keeping order
    seen: set[str] = set()
    uniq_reasons: list[str] = []
    for r in reasons:
        if r not in seen:
            seen.add(r)
            uniq_reasons.append(r)
    return severity, uniq_reasons, " / ".join(hooks) if hooks else "(無)"


def main() -> int:
    parser = argparse.ArgumentParser(description="Export prioritized mnemonic rewrite batches for Gemini Web.")
    parser.add_argument("--batch-size", type=int, default=50, help="Words per prompt file (default: 50)")
    parser.add_argument("--scope", choices=["core", "all"], default="core", help="Export core/JH batches or all units")
    parser.add_argument("--max-batches", type=int, default=0, help="Optional cap on number of prompt files (0 = all)")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    catalog = gm.load_vocab_metadata(BASE_DIR)
    nested = gm.load_all_shards(gm.MNEMONICS_DIR)
    flat = {k: v for d in nested.values() for k, v in d.items()}

    flagged: list[dict[str, Any]] = []
    reason_stats: Counter[str] = Counter()

    for key, meta in catalog.items():
        txt = flat.get(key, "")
        if not txt:
            continue
        sev, reasons, bad_hook = audit_word_reasons(key, meta, txt)
        if sev < 25:
            # Skip mild standalone short-word etymology heuristics unless paired with phonetic/fake-cognate issue
            continue
        units = meta.get("units") or []
        is_core = bool(set(units) & {1, 2, 17, 18})
        for r in reasons:
            reason_stats[r] += 1
        flagged.append({
            "word": key,
            "en": meta["en"],
            "kk": meta.get("kk") or "",
            "uk": meta.get("uk") or "",
            "zh": meta.get("zh") or "",
            "units": units,
            "is_core": is_core,
            "severity": sev,
            "bad_hook": bad_hook,
            "why_flagged": reasons,
        })

    # Prioritize: "tale" #1, then Core/JH sorted by severity desc + min unit + alpha, then remaining
    flagged.sort(
        key=lambda x: (
            0 if x["word"] == "tale" else 1,
            0 if x["is_core"] else 1,
            -x["severity"],
            min(x["units"] or [999]),
            x["word"],
        )
    )

    report = {
        "total_catalog": len(catalog),
        "total_flagged_sev_ge_25": len(flagged),
        "core_jh_flagged": sum(1 for x in flagged if x["is_core"]),
        "non_core_flagged": sum(1 for x in flagged if not x["is_core"]),
        "reason_counts": dict(reason_stats.most_common()),
        "top_25_core": [
            {"word": x["word"], "kk": x["kk"], "bad_hook": x["bad_hook"], "severity": x["severity"], "why": x["why_flagged"]}
            for x in flagged[:25]
        ],
    }
    (OUT_DIR / "priority_audit_report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    pool = [x for x in flagged if x["is_core"]] if args.scope == "core" else flagged
    bs = max(10, args.batch_size)
    written_files = []
    for idx in range(0, len(pool), bs):
        batch_num = idx // bs + 1
        if args.max_batches > 0 and batch_num > args.max_batches:
            break
        chunk = pool[idx : idx + bs]
        payload = [
            {
                "word": x["word"],
                "en": x["en"],
                "kk": x["kk"],
                "uk": x["uk"],
                "zh": x["zh"][:160],
                "bad_hook": x["bad_hook"],
                "why_flagged": "; ".join(x["why_flagged"]),
            }
            for x in chunk
        ]
        txt_out = GEMINI_WEB_PROMPT_HEADER + json.dumps(payload, ensure_ascii=False, indent=2) + "\n```\n"
        out_file = OUT_DIR / f"batch_{batch_num:02d}_{args.scope}_prompt.txt"
        out_file.write_text(txt_out, encoding="utf-8")
        written_files.append((out_file.name, len(chunk), [x["word"] for x in chunk[:5]]))

    print(json.dumps({
        "total_flagged": len(flagged),
        "core_jh_flagged": report["core_jh_flagged"],
        "non_core_flagged": report["non_core_flagged"],
        "exported_scope": args.scope,
        "batch_files": written_files,
        "out_dir": str(OUT_DIR),
    }, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
