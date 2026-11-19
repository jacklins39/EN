#!/usr/bin/env python3
"""Compile rich dual-track Traditional Chinese mnemonics locally via Ollama (0 external API calls).

Reads vocabulary metadata (KK, UK, zh, syn, ant), NLTK WordNet definitions, and
previously KK-aligned phonetic hooks from existing shards, then invokes a local
Ollama model (default: qwen3:8b on RTX 3050) to produce the 2-track format:
  1. 諧音聯想法（趣味諧音 + 情境聯想畫面）
  2. 字源與拆字記憶法（真實拆解邏輯/語意核心 + 記憶脈絡）

Strictly validates structure, Traditional Chinese (via OpenCC s2tw), bracket balance,
and hook-scene linkage before atomically writing back to f:/EN/mnemonics/*.js.
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

import opencc
from nltk.corpus import wordnet as wn

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR.parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import generate_mnemonics as gm
import kk_hook_helper as kh

DEFAULT_OLLAMA_URL = os.environ.get("OLLAMA_HOST", "http://127.0.0.1:11434").rstrip("/")
DEFAULT_LOCAL_MODEL = "qwen3:8b"

S2TW = opencc.OpenCC("s2tw")

# True historical/etymological ground-truth anchors for classic non-obvious English words
CURATED_ETYMOLOGY: dict[str, str] = {
    "window": "真實古語詞源：來自古諾斯語 vindauga（vindr「風」+ auga「眼睛」），字面即「風的眼睛」（wind's eye），古代牆上用來採光通風的孔洞。",
    "abettance": "真實構詞與詞源：abet（教唆、煽動，源自古法語 abeter「放獵犬去咬／挑動」）+ -ance（名詞行為狀態），絕非「坦白」。",
    "muscle": "真實詞源：來自拉丁語 musculus（「小老鼠」mus + 指小詞尾 -culus），因古人覺得手臂屈伸時鼓起的肌肉像在皮下竄動的小老鼠。",
    "salary": "真實詞源：來自拉丁語 salarium（購買「鹽 sal」的津貼），古羅馬時期鹽是軍人發餉的重要物資。",
    "companion": "真實詞源：com-（共同一起）+ pan（麵包，拉丁語 panis）+ -ion，原本是指「坐在一起分食麵包的人」→ 同伴、夥伴。",
    "disaster": "真實詞源：dis-（壞、偏離）+ aster（星星，字源 astral），古人認為災難是「星象不祥（bad star）」降臨所致。",
    "breakfast": "真實詞源：break（打破、中斷）+ fast（禁食、齋戒），指睡醒後打破整晚禁食的第一餐。",
    "trivial": "真實詞源：tri-（三）+ via（路，如三叉路口），古羅馬人常在三條路交會處閒聊日常瑣事，演變為「瑣碎的、微不足道的」。",
    "candidate": "真實詞源：來自拉丁語 candidatus（穿著「純白長袍」的人，字根 cand- 白／發光），古羅馬參選人穿白袍以示清白廉潔。",
    "panic": "真實詞源：來自希臘神話牧羊神 Pan（潘神），傳說他躲在樹林裡突然大喊，常驚嚇旅人引發集體恐慌。",
    "edible": "真實構詞與詞源：字根 ed-（吃，與 eat 同源，源自印歐語詞根 *ed-「吃」）+ -ible（能……的，形容詞字尾），字面即「能吃的、可食用的」。常見搭配如 edible food（可食用的食物）。",
    "tart": "真實構詞與詞源：名詞「水果餡餅、蛋塔（tart）」源自古法語 tarte（扁平烤餅，如台灣常見的蛋塔、蘋果塔）；形容詞「酸的、尖酸的」與 tartly / tartness 同詞族，本義為口感清爽微酸，引申為說話「尖酸刻薄（a tart remark）」。僅寫甜點與酸味／語氣，嚴禁提及其他任何低俗或職業詞義！",
    "damnedest": "真實構詞與詞源：由口語強調詞 damned 加上最高級字尾 -est 構成（對照 best, greatest），現代日常英文中專指慣用語 do/try one's damnedest（竭盡所能、全力以赴）與 the damnedest thing（極不尋常、最奇妙的事）。嚴禁寫出「死、地獄、詛咒」等任何字眼，請用「極致、全力以赴、奇妙」來解釋！",
    "bravo": "真實構詞與詞源：源自義大利語讚美詞 bravo（優秀的、幹得好！，與英文 brave「勇敢的」同源）。在音樂會、歌劇院或表演結束後，觀眾大喊 Bravo! 就是對演出者熱情喝采「太棒了！」。嚴禁提及殺手或暴力字眼！",
}

DUAL_SYSTEM_PROMPT = """你是一位台灣極受歡迎、治學嚴謹又幽默的資深英文老師，擅長同時用「圖像諧音」與「真實字源詞族」教學生一次記牢單字、不搞混發音。

請嚴格輸出且「只輸出」以下純繁體中文 Markdown 結構（不要額外寒暄、不要程式碼圍欄 ```）：

#### 1. 諧音聯想法（適合快速圖像掛鉤）

* 趣味諧音：**「諧音A」** 或 **「諧音B」**（若 1 組就很貼音又自然，只寫 **「諧音A」** 即可，絕不硬湊雷同的第二組！）
* 情境聯想畫面：
  * **畫面 1（諧音A）**：用生動具體的台灣生活場景，把字義**「中文（英文單字）」**與諧音每個音節拆開融進動作（例如把 **「問兜」** 拆成「向老闆**問**衣**兜**裡有什麼」），嚴禁只整串貼上「某某是個…」。
  * **畫面 2（諧音B）**：（僅在有第二組諧音時寫；場景、角色與情節必須與畫面 1 **完全不同**，禁止套用同一句型複製貼上！）

#### 2. 字源與拆字記憶法（避免諧音斷鏈，回歸語意本質）

* 拆解邏輯：只寫**真正符合英語構詞或詞源學**的拆解（如字首＋字根＋字尾、複合詞、動詞→名詞音變如 *speak → speech*、古英語／拉丁源流如 *window = wind + ēage*）。**嚴禁瞎編假字根**（例如絕不可把 *window* 亂拆成 `win 風 + dow 向下`，也絕不可把單字亂拆為無根據的字母圖案象形）！若該字本身無透明拆解（基礎核心短字、專有名詞等），改寫成 `* 記憶錨點：`（說明拼字特徵、重要片語搭配或與同／反義字的核心區別）。
* 記憶脈絡：
  * 說明字源、詞族變化或關鍵搭配如何自然推導出今天的實際字義，用 **粗體** 標出核心脈絡。
  * 一句精練口訣總結核心字義與發音／拼字重點。

【鐵律】
1. 絕對使用台灣繁體中文，嚴禁用簡體字（不可寫 画面/记忆/联想/谐音/拆解逻辑/脉络/与/这）。
2. 「趣味諧音」必須**全部使用純繁體中文字**，嚴禁夾雜任何英文字母 A–Z（例：*able* 不可寫「A 伯」，只能寫「欸伯」）；每組諧音只寫一幕畫面（1 組只寫畫面 1；2 組不同諧音才寫畫面 1 與畫面 2）。
3. 禁止說教水詞、堆疊逐字括號翻譯（不可寫「額（我）爸（爸）扶（扶著）」或「腦內自動浮現／課堂上老師講到」），也不可輸出「（音節）」「（幫忙）」等標籤。
4. 情境聯想必須忠實表達【中文釋義】，絕不可把諧音字誤用為詞義；且 `#### 2.` 中**嚴禁再提到 `#### 1.` 的中文諧音**！
5. **嚴禁捏造詞源或亂引古語**：對於介系詞、連接詞、日常短字或提示中未提供明確詞源時，**絕不可自創「來自拉丁語 *xxx*」「源自古英語 *xxx*」「某詞的變體」**！找不到 100% 確定的字根拆解就直接改寫 `* 記憶錨點：`（高頻片語搭配、空間/反義對比 *above ↔ below*、或真實英語原型關係）。
6. 禁止血腥、粗俗字眼及「名叫XX的人」假人名套路；保留 `#### 1.`、`#### 2.`、`**粗體**` 與 `*` / `  *` 條列縮排，絕不輸出 `### 記憶技巧`。

【範例一（有真實字源／拆解的單字）】
#### 1. 諧音聯想法（適合快速圖像掛鉤）

* 趣味諧音：**「不瑞克發斯特」** 或 **「不累可發」**
* 情境聯想畫面：
  * **畫面 1（不瑞克發斯特）**：趕車出門前狼吞虎嚥把熱騰騰的三明治**「早餐（breakfast）」**塞進嘴裡，邊嚼邊喊「再趕也**不瑞克**（煞車）、立刻**發斯特**衝刺出門」！
  * **畫面 2（不累可發）**：週末悠閒喝豆漿配蛋餅當**「早餐（breakfast）」**，吃完精神飽滿一點都**「不累」**，大腦**「可」**以全力**「發」**動了！

#### 2. 字源與拆字記憶法（避免諧音斷鏈，回歸語意本質）

* 拆解邏輯：**break**（打破、中斷）+ **fast**（禁食、齋戒）
* 記憶脈絡：
  * 人睡眠時整晚未進食，等同進行了一夜「禁食（*fast*）」，早上醒來吃的第一頓飯就是**「打破禁食」（break the fast）**。
  * 記住「早上**打破（break）**整夜**禁食（fast）**的第一餐」就是**「早餐」**，還能一併記熟 *fast* 當名詞「禁食／齋戒」的進階義。

【範例二（無透明字源的短字，改用真實詞族與記憶錨點）】
#### 1. 諧音聯想法（適合快速圖像掛鉤）

* 趣味諧音：**「斯批奇」**
* 情境聯想畫面：
  * **畫面 1（斯批奇）**：畢業典禮上全場安靜等他發表**「演講（speech）」**，平時總是**「斯」**斯文文又慢條斯理的學長，竟然**「批」**哩啪啦講出超**「奇」**妙的爆笑金句！

#### 2. 字源與拆字記憶法（避免諧音斷鏈，回歸語意本質）

* 記憶錨點：與動詞 **speak**（說話）同源名詞化（字尾 *k → ch* 音變，對照 *break → breach*、*bake → batch*）
* 記憶脈絡：
  * 把動詞 **speak**（說）的尾音轉成名詞感的 **speech**，字義便從「開口說」定格成**「演說、發言、言語（speech）」**。
  * 記住「**speak** 變名詞就是 **speech**」，搭配常見片語 *give a speech*（發表演說）一次鎖定拼字與重音。"""


def _extract_existing_hints(existing_text: str) -> dict[str, str]:
    """Extract KK-aligned hook or verified root hints from current shard entry."""
    hints: dict[str, str] = {}
    if not existing_text:
        return hints
    m_hk = re.search(r"幽默諧音法[：:]\s*「([^」]+)」", existing_text)
    if m_hk:
        hk = m_hk.group(1).strip()
        if not re.search(r"[A-Za-z]", hk):
            hints["existing_hook"] = hk
    m_rt = re.search(r"字根幽默拆解法[：:]\s*([^\n]+)", existing_text)
    if m_rt:
        hints["existing_roots"] = m_rt.group(1).strip()
    return hints


def _extract_wordnet_hints(word: str) -> tuple[str, list[str]]:
    clean = re.sub(r"[^a-zA-Z-]", "", (word or "").split()[0].lower())
    if not clean:
        return "", []
    syns = wn.synsets(clean.replace("-", "_")) or wn.synsets(clean.replace("-", ""))
    defs = []
    seen = set()
    related: set[str] = set()
    base = wn.morphy(clean)
    if base and base != clean:
        related.add(base)
    for s in syns[:3]:
        d = s.definition().strip()
        if d and d not in seen:
            seen.add(d)
            defs.append(f"{s.pos()}: {d}")
        for lem in s.lemmas():
            for drv in lem.derivationally_related_forms():
                rn = drv.name().replace("_", " ")
                if rn.lower() != clean:
                    related.add(rn)
    return "; ".join(defs[:2]), sorted(related)[:6]


def _build_word_prompt(meta: dict[str, Any], existing_text: str) -> str:
    en = meta["en"]
    key = meta["key"]
    kk = meta.get("kk") or ""
    uk = meta.get("uk") or ""
    zh = (meta.get("zh") or "")[:240]
    syn = meta.get("syn") or []
    ant = meta.get("ant") or []
    hints = _extract_existing_hints(existing_text)
    wn_def, wn_rel = _extract_wordnet_hints(en)
    etym_note = CURATED_ETYMOLOGY.get(key, "")
    if wn_def and re.search(
        r"\b(?:murderer|kills for hire|sexual intercourse|eternal punishment|through hell|death or the dead)\b",
        wn_def,
        re.I,
    ):
        wn_def = ""
        wn_rel = []
    if etym_note:
        wn_rel = []
    if key in {"tart", "bravo", "damnedest"}:
        syn = []
        ant = []

    raw_existing_hook = hints.get("existing_hook")
    if key == "mrs" and raw_existing_hook == "密斯":
        raw_existing_hook = ""
    kk_hook = raw_existing_hook or kh.kk_to_natural_hook(en, kk)

    lines = [
        f"單字：{en}",
        f"美式 KK 音標：{kk or '(無)'}",
        f"英式 UK 音標：{uk or '(無)'}",
        f"中文釋義：{zh}",
    ]
    if key in {"valley", "condemn", "ghastly", "damnedest", "dante", "tart", "bravo"}:
        lines.append("清新安全提醒：請用正向、陽光的日常情境記憶，嚴禁提及「死、亡、殺、鬼、地獄、妓、恐怖片」等不吉詞彙！")
    if wn_def:
        lines.append(f"英文核心釋義參考：{wn_def}")
    if wn_rel:
        lines.append(f"真實詞族／原型參考：{', '.join(wn_rel)}")
    if kk_hook:
        lines.append(f"已校對的 KK 精準諧音基準：「{kk_hook}」（請優先採用此純中文諧音，必要時可再配另一組真正貼音且完全不同場景的純中文諧音）")
    if etym_note:
        lines.append(etym_note)
    elif hints.get("existing_roots"):
        lines.append(f"現有字根參考：{hints['existing_roots']}（請確認是否為真實英語構詞後精煉展開，若屬牽強附會或無法確認源流，請改用記憶錨點）")
    else:
        short_rule = "短字或專有名詞絕對禁止出現「來自／源自拉丁語、古英語、古法語、希臘語、古諾斯語」等字眼！" if len(key) <= 6 else ""
        lines.append(f"構詞提示：若無十足把握的真實英語詞源或透明字根，#### 2. 請直接改用「* 記憶錨點：」說明詞族關係、重要片語或拼字規律，嚴禁臆測古語字根。{short_rule}")
    if syn:
        lines.append(f"同義詞：{', '.join(str(x) for x in syn[:4])}")
    if ant:
        lines.append(f"反義詞：{', '.join(str(x) for x in ant[:4])}")
    lines.append("\n請直接依規定格式輸出該單字的雙軌記憶技巧：")
    return "\n".join(lines)


def _normalize_dual_output(raw: str) -> str:
    s = (raw or "").strip()
    # Strip <think>...</think> if model emitted reasoning block
    s = re.sub(r"<think>[\s\S]*?</think>", "", s, flags=re.I).strip()
    # Strip fenced markdown wrappers
    s = re.sub(r"^```(?:markdown|md)?\s*", "", s, flags=re.I)
    s = re.sub(r"\s*```$", "", s)
    # Remove redundant top ### 記憶技巧 heading
    s = re.sub(r"^\s*#{1,3}\s*(?:\*\*)?\s*記憶技巧\s*(?:\*\*)?\s*\n+", "", s)
    # Force Traditional Chinese conversion while keeping natural Taiwan "台" usage
    s = S2TW.convert(s)
    for tai_old, tai_new in (
        ("臺灣", "台灣"), ("臺語", "台語"), ("臺北", "台北"), ("臺中", "台中"), ("臺南", "台南"), ("臺東", "台東"),
        ("窗臺", "窗台"), ("舞臺", "舞台"), ("櫃臺", "櫃台"), ("平臺", "平台"), ("電臺", "電台"), ("講臺", "講台"),
        ("陽臺", "陽台"), ("月臺", "月台"), ("天臺", "天台"), ("後臺", "後台"), ("前臺", "前台"), ("吧臺", "吧台"),
    ):
        s = s.replace(tai_old, tai_new)
    # Fix standard header labels in case model varied punctuation
    s = re.sub(r"^#{2,4}\s*1[\.、]\s*", "#### 1. ", s, flags=re.M)
    s = re.sub(r"^#{2,4}\s*2[\.、]\s*", "#### 2. ", s, flags=re.M)
    # Normalize bullet markers (`- ` -> `* `)
    s = re.sub(r"^([\t ]*)-\s+", r"\1* ", s, flags=re.M)
    # Remove redundant trailing "* 記憶錨點：..." when Track 2 already has "* 拆解邏輯："
    sec2_idx = s.find("#### 2.")
    if sec2_idx >= 0:
        head_s, tail_s = s[:sec2_idx], s[sec2_idx:]
        if "* 拆解邏輯：" in tail_s and "* 記憶錨點：" in tail_s:
            tail_s = re.sub(r"\n+\*\s*記憶錨點[：:][^\n]*(?:\n|$)", "\n", tail_s)
        s = head_s + tail_s
    return gm.clean_mnemonic_text(s)


def _call_ollama_chat(
    *,
    base_url: str,
    model: str,
    user_prompt: str,
    temperature: float,
    timeout: float,
    retry_note: str = "",
) -> str:
    messages = [
        {"role": "system", "content": DUAL_SYSTEM_PROMPT},
        {"role": "user", "content": user_prompt + (f"\n\n【修正要求】{retry_note}" if retry_note else "")},
    ]
    payload: dict[str, Any] = {
        "model": model,
        "messages": messages,
        "stream": False,
        "think": False,
        "keep_alive": "30m",
        "options": {
            "temperature": temperature,
            "num_predict": 650,
            "top_p": 0.9,
        },
    }
    req = urllib.request.Request(
        f"{base_url}/api/chat",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return str((data.get("message") or {}).get("content") or "")


def verify_ollama_ready(base_url: str, model: str) -> None:
    try:
        with urllib.request.urlopen(f"{base_url}/api/tags", timeout=5) as resp:
            tags = json.loads(resp.read().decode("utf-8"))
    except Exception as exc:
        raise RuntimeError(f"無法連線至本機 Ollama ({base_url})：{exc}") from exc
    installed = [m.get("name", "") for m in tags.get("models", [])]
    if not any(name == model or name.startswith(model + ":") for name in installed):
        raise RuntimeError(f"Ollama 尚未下載模型 '{model}'（目前已安裝：{installed}）")


def _acquire_single_instance_lock() -> Any:
    """Prevent concurrent background/scheduled runs from racing on shards."""
    lock_dir = BASE_DIR / "tmp"
    lock_dir.mkdir(parents=True, exist_ok=True)
    lock_path = lock_dir / "compile_dual.lock"
    fh = lock_path.open("a+", encoding="utf-8")
    if os.name == "nt":
        try:
            fh.seek(0)
            msvcrt.locking(fh.fileno(), msvcrt.LK_NBLCK, 1)
        except OSError:
            fh.close()
            return None
    fh.seek(0)
    fh.truncate()
    fh.write(str(os.getpid()))
    fh.flush()
    return fh


def _load_failed_words() -> set[str]:
    fail_log_path = BASE_DIR / "tmp" / "local_compile_failures.jsonl"
    if not fail_log_path.is_file():
        return set()
    bad: set[str] = set()
    for line in fail_log_path.read_text(encoding="utf-8", errors="replace").splitlines():
        try:
            obj = json.loads(line)
            if obj.get("word"):
                bad.add(str(obj["word"]).strip().lower())
        except Exception:
            pass
    return bad


def _collect_pending(
    targets: list[dict[str, Any]],
    shards: dict[str, dict[str, str]],
    *,
    resume: bool,
    skip_failed: bool = False,
) -> tuple[list[dict[str, Any]], int]:
    todo: list[dict[str, Any]] = []
    skipped = 0
    failed_set = _load_failed_words() if skip_failed else set()
    for item in targets:
        key = item["key"]
        if key in failed_set:
            skipped += 1
            continue
        sh = gm.shard_for_word(key)
        cur = shards.get(sh, {}).get(key, "")
        if resume and cur and "#### 1." in cur and "#### 2." in cur:
            rep = gm.audit_mnemonic(key, cur, allowed_zh=item.get("zh") or "")
            if rep.get("format") == "dual_track" and rep.get("score") == 100:
                skipped += 1
                continue
        todo.append(item)
    return todo, skipped


def compile_entries(
    targets: list[dict[str, Any]],
    *,
    model: str,
    base_url: str,
    resume: bool,
    dry_run: bool,
    save_every: int,
    temperature: float,
    timeout: float,
    skip_failed: bool = False,
) -> dict[str, Any]:
    shards = gm.load_all_shards(gm.MNEMONICS_DIR)
    todo, skipped = _collect_pending(targets, shards, resume=resume, skip_failed=skip_failed)

    print(
        f"[plan] model={model} | targets={len(targets)} | already_dual_track={skipped} | todo={len(todo)} | dry_run={dry_run}"
    )
    if not todo:
        return {"ok": 0, "failed": [], "skipped": skipped}

    fail_log_dir = BASE_DIR / "tmp"
    fail_log_dir.mkdir(parents=True, exist_ok=True)
    fail_log_path = fail_log_dir / "local_compile_failures.jsonl"
    dirty_shards: set[str] = set()
    ok_count = 0
    failed: list[dict[str, Any]] = []
    times: list[float] = []

    for idx, meta in enumerate(todo, 1):
        key = meta["key"]
        sh = gm.shard_for_word(key)
        cur = shards.get(sh, {}).get(key, "")
        user_prompt = _build_word_prompt(meta, cur)

        t0 = time.monotonic()
        accepted_text = ""
        last_issues: list[str] = []
        retry_note = ""

        for attempt in range(3):
            try:
                raw = _call_ollama_chat(
                    base_url=base_url,
                    model=model,
                    user_prompt=user_prompt,
                    temperature=temperature if attempt == 0 else max(0.2, temperature - 0.15),
                    timeout=timeout,
                    retry_note=retry_note,
                )
            except Exception as exc:
                last_issues = [f"ollama_error:{exc}"]
                time.sleep(1.5)
                continue

            cand = _normalize_dual_output(raw)
            rep = gm.audit_mnemonic(key, cand, allowed_zh=meta.get("zh") or "")
            has_ungrounded_etym = (
                len(key) <= 6
                and key not in CURATED_ETYMOLOGY
                and not _extract_existing_hints(cur).get("existing_roots")
                and bool(re.search(r"(?:來自|源自)(?:拉丁|古英語|古諾斯|古法|希臘)語", cand))
            )
            if has_ungrounded_etym:
                rep["issues"].append("ungrounded_dead_language_etymology")
                rep["score"] = min(rep["score"], 70)
            if rep.get("format") == "dual_track" and rep.get("score") == 100 and not rep.get("issues"):
                accepted_text = cand
                break
            last_issues = list(rep.get("issues") or [f"format={rep.get('format')},score={rep.get('score')}"])
            extra_fix = ""
            if "non_cjk_in_hook" in last_issues:
                extra_fix = " 注意：「趣味諧音」不可包含任何英文字母 A-Z（例如不可寫「A 伯」），必須全部是純繁體中文！"
            elif "phonetic_leak_in_sec2" in last_issues:
                extra_fix = " 注意：#### 2. 裡不可再次出現 #### 1. 的中文諧音詞！"
            elif "placeholder_leak" in last_issues:
                extra_fix = " 注意：不可寫「腦內自動浮現」「腦海浮現」「（音節）」等套語！"
            elif "ungrounded_dead_language_etymology" in last_issues:
                extra_fix = " 注意：請勿在 #### 2. 編造或提及「來自拉丁語／古英語／古法語／希臘語」，直接改寫高頻片語搭配、反義詞對比或現代構詞關係即可！"
            elif "vulgar_or_unlucky" in last_issues:
                extra_fix = " 注意：嚴禁出現死、亡、殺、鬼、屍、屁、屎、蠢、智障、血腥、地獄等不雅或不吉利詞彙，改寫為完全清新卡通的生活情境！"
            elif "duplicate_scene_hook" in last_issues or "unbalanced_markdown" in last_issues:
                extra_fix = " 注意：僅 1 組諧音時只寫「畫面 1」，不要寫「畫面 2」；並確認每一行 **粗體** 星號成對！"
            retry_note = f"上一次輸出未通過檢查：{last_issues}。{extra_fix}請確保使用純繁體中文、保留 #### 1. 與 #### 2.、諧音字元真實出現於畫面 1/2 中。"

        dt = time.monotonic() - t0
        times.append(dt)
        avg = sum(times[-30:]) / len(times[-30:])
        eta_min = (len(todo) - idx) * avg / 60.0

        if accepted_text:
            ok_count += 1
            print(f"[{idx}/{len(todo)}] {key:<18} OK ({dt:.1f}s, avg={avg:.1f}s, ETA={eta_min:.1f}m)")
            if dry_run:
                print("--- PREVIEW START ---")
                print(accepted_text)
                print("--- PREVIEW END ---\n")
            else:
                shards.setdefault(sh, {})[key] = accepted_text
                dirty_shards.add(sh)
                if ok_count % save_every == 0:
                    for dsh in sorted(dirty_shards):
                        gm.write_shard(dsh, shards[dsh], gm.MNEMONICS_DIR)
                    dirty_shards.clear()
        else:
            print(f"[{idx}/{len(todo)}] {key:<18} FAIL ({dt:.1f}s) issues={last_issues}")
            failed.append({"word": key, "issues": last_issues})
            if not dry_run:
                with fail_log_path.open("a", encoding="utf-8") as fh:
                    fh.write(json.dumps({"word": key, "issues": last_issues}, ensure_ascii=False) + "\n")

    if not dry_run and dirty_shards:
        for dsh in sorted(dirty_shards):
            gm.write_shard(dsh, shards[dsh], gm.MNEMONICS_DIR)

    return {"ok": ok_count, "failed": failed, "skipped": skipped}


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Compile dual-track mnemonics locally with Ollama (0 API).")
    parser.add_argument("--model", default=DEFAULT_LOCAL_MODEL, help=f"Local Ollama model (default: {DEFAULT_LOCAL_MODEL})")
    parser.add_argument("--url", default=DEFAULT_OLLAMA_URL, help=f"Ollama endpoint (default: {DEFAULT_OLLAMA_URL})")
    parser.add_argument("--units", type=str, default="", help="Comma-separated units (e.g. 1 or 1,2)")
    parser.add_argument("--words", type=str, default="", help="Comma-separated words (e.g. window,speech,funny)")
    parser.add_argument("--all", action="store_true", help="Compile all 9,422 catalog words")
    parser.add_argument("--offset", type=int, default=0, help="Skip first N selected entries")
    parser.add_argument("--limit", type=int, default=0, help="Only process N entries")
    parser.add_argument("--no-resume", action="store_true", help="Recompile even if already dual_track score=100")
    parser.add_argument("--dry-run", action="store_true", help="Print outputs without writing shards")
    parser.add_argument("--check-pending", action="store_true", help="Report pending count without running Ollama")
    parser.add_argument("--skip-failed", action="store_true", help="Skip words previously logged in tmp/local_compile_failures.jsonl")
    parser.add_argument("--save-every", type=int, default=1, help="Flush dirty shards every N successes (default: 1)")
    parser.add_argument("--temperature", type=float, default=0.45, help="Ollama temperature (default: 0.45)")
    parser.add_argument("--timeout", type=float, default=120.0, help="Per-word request timeout seconds")
    args = parser.parse_args(argv)

    catalog = gm.load_vocab_metadata(BASE_DIR)

    if args.words:
        req = [gm.normalize_word_key(w) for w in args.words.split(",") if gm.normalize_word_key(w)]
        targets = [catalog[w] for w in req if w in catalog]
    elif args.units:
        wanted = {int(x.strip()) for x in args.units.split(",") if x.strip()}
        targets = [v for v in catalog.values() if wanted & set(v.get("units", []))]
        targets.sort(key=lambda item: (min(item.get("units") or [999]), item["key"]))
    elif args.all:
        targets = sorted(catalog.values(), key=lambda item: (min(item.get("units") or [999]), item["key"]))
    else:
        parser.print_help()
        return 1

    if args.offset > 0:
        targets = targets[args.offset :]
    if args.limit > 0:
        targets = targets[: args.limit]

    if args.check_pending:
        shards = gm.load_all_shards(gm.MNEMONICS_DIR)
        todo, skipped = _collect_pending(targets, shards, resume=not args.no_resume, skip_failed=args.skip_failed)
        print(f"PENDING={len(todo)} DONE={skipped} TOTAL={len(targets)}")
        return 0

    lock_fh = None
    if not args.dry_run:
        lock_fh = _acquire_single_instance_lock()
        if lock_fh is None:
            print("[skip] another compile_local_mnemonics instance is already running.")
            return 0

    try:
        verify_ollama_ready(args.url, args.model)
        res = compile_entries(
            targets,
            model=args.model,
            base_url=args.url,
            resume=not args.no_resume,
            dry_run=args.dry_run,
            save_every=max(1, args.save_every),
            temperature=args.temperature,
            timeout=args.timeout,
            skip_failed=args.skip_failed,
        )
        print(f"[done] ok={res['ok']} failed={len(res['failed'])} skipped={res['skipped']}")
        return 0 if not res["failed"] else 1
    finally:
        if lock_fh is not None:
            try:
                lock_fh.close()
            except Exception:
                pass


if __name__ == "__main__":
    raise SystemExit(main())
