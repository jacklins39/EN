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

S2TW = opencc.OpenCC("s2t")

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
2. 「趣味諧音」必須全是繁體中文（嚴禁夾雜英文或 -us 這類音標字母），貼緊 KK 音標，且每組諧音僅寫一幕對應畫面（1 組諧音只寫「畫面 1」，2 組不同諧音才寫「畫面 1」與「畫面 2」）。
3. 禁止說教水詞（「在課堂上老師講到…」「代表他很努力…」）與占位符標籤（「（音節）」「（幫忙）」）。
4. 情境聯想必須忠實表達【中文釋義】，絕不可把諧音字誤用為詞義（例如不可把 *abettance*「坦絲」寫成「坦白」而非「教唆」）；且 `#### 2.` 中**嚴禁再提到 `#### 1.` 的中文諧音**！
5. **嚴禁捏造詞源**：若沒有把握該字的真實古語／拉丁／希臘源流（或未在提示中提供），一律改用 `* 記憶錨點：` 寫真實詞族（如 *cut → cutter → cutters*）、拼字特徵或高頻片語，絕不瞎編假古英語字根或「某字母長得像某物」、「某尾音代表形狀」。
6. 禁止血腥、粗俗字眼（如 死/殺/屍/屁/屎/鬼）及「名叫XX的人」假人名套路；保留 `#### 1.`、`#### 2.`、`**粗體**` 與 `*` / `  *` 條列縮排，絕不輸出 `### 記憶技巧`。

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
        hints["existing_hook"] = m_hk.group(1).strip()
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

    kk_hook = hints.get("existing_hook") or kh.kk_to_natural_hook(en, kk)

    lines = [
        f"單字：{en}",
        f"美式 KK 音標：{kk or '(無)'}",
        f"英式 UK 音標：{uk or '(無)'}",
        f"中文釋義：{zh}",
    ]
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
        lines.append("構詞提示：若無十足把握的真實英語詞源或透明字根，#### 2. 請直接改用「* 記憶錨點：」說明詞族關係、重要片語或拼字規律，嚴禁臆測古語字根。")
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
) -> dict[str, Any]:
    shards = gm.load_all_shards(gm.MNEMONICS_DIR)
    todo: list[dict[str, Any]] = []
    skipped = 0
    for item in targets:
        key = item["key"]
        sh = gm.shard_for_word(key)
        cur = shards.get(sh, {}).get(key, "")
        if resume and cur:
            rep = gm.audit_mnemonic(key, cur, allowed_zh=item.get("zh") or "")
            if rep.get("format") == "dual_track" and rep.get("score") == 100:
                skipped += 1
                continue
        todo.append(item)

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
            if rep.get("format") == "dual_track" and rep.get("score") == 100 and not rep.get("issues"):
                accepted_text = cand
                break
            last_issues = list(rep.get("issues") or [f"format={rep.get('format')},score={rep.get('score')}"])
            retry_note = f"上一次輸出未通過檢查：{last_issues}。請確保使用純繁體中文、保留 #### 1. 與 #### 2.、趣味諧音字元有出現於畫面 1/2 中，並避免粗俗與簡體字。"

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
    parser.add_argument("--save-every", type=int, default=1, help="Flush dirty shards every N successes (default: 1)")
    parser.add_argument("--temperature", type=float, default=0.45, help="Ollama temperature (default: 0.45)")
    parser.add_argument("--timeout", type=float, default=90.0, help="Per-word request timeout seconds")
    args = parser.parse_args(argv)

    verify_ollama_ready(args.url, args.model)
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

    res = compile_entries(
        targets,
        model=args.model,
        base_url=args.url,
        resume=not args.no_resume,
        dry_run=args.dry_run,
        save_every=max(1, args.save_every),
        temperature=args.temperature,
        timeout=args.timeout,
    )
    print(f"[done] ok={res['ok']} failed={len(res['failed'])} skipped={res['skipped']}")
    return 0 if not res["failed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
