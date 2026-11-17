#!/usr/bin/env python3
"""Deterministic KK-IPA to Traditional Chinese phonetic hook generator (0 API calls)."""

from __future__ import annotations

import re

VOWELS = set("iɪeɛæɑɔoʊuʌəɝɚIWYU")


def normalize_kk(kk: str) -> str:
    s = re.sub(r"[\[\]ˋˈ'͵ˌ\s/()]", "", (kk or "").split(";")[0].split(",")[0])
    return (
        s.replace("tʃ", "C")
        .replace("dʒ", "J")
        .replace("ts", "Z")
        .replace("dz", "D")
        .replace("aɪ", "I")
        .replace("aʊ", "W")
        .replace("ɔɪ", "Y")
        .replace("ju", "U")
        .replace("jʊ", "U")
    )


def get_v_cls(v: str, has_nasal: bool) -> str:
    if v in ("i", "ɪ"):
        return "in" if has_nasal else "i"
    if v in ("e", "ɛ"):
        return "en" if has_nasal else "e"
    if v == "æ":
        return "an" if has_nasal else "ae"
    if v in ("ɑ", "ʌ", "ə"):
        return "an" if has_nasal else "a"
    if v in ("ɔ", "o"):
        return "on" if has_nasal else "o"
    if v in ("u", "ʊ"):
        return "un" if has_nasal else "u"
    if v in ("ɝ", "ɚ"):
        return "en" if has_nasal else "er"
    if v == "I":
        return "an" if has_nasal else "ai"
    if v == "W":
        return "on" if has_nasal else "ao"
    if v == "Y":
        return "on" if has_nasal else "oi"
    if v == "U":
        return "un" if has_nasal else "iu"
    return "a"


CV_TABLE: dict[str, dict[str, str]] = {
    "":   {"i": "伊", "in": "印", "e": "欸", "en": "恩", "ae": "愛", "a": "阿", "an": "安", "o": "歐", "on": "昂", "u": "烏", "un": "溫", "er": "爾", "ai": "愛", "ao": "傲", "oi": "歐伊", "iu": "優"},
    "p":  {"i": "批", "in": "拼", "e": "佩", "en": "噴", "ae": "拍", "a": "帕", "an": "盼", "o": "破", "on": "龐", "u": "撲", "un": "噴", "er": "婆", "ai": "派", "ao": "泡", "oi": "破伊", "iu": "批優"},
    "b":  {"i": "必", "in": "賓", "e": "貝", "en": "奔", "ae": "白", "a": "巴", "an": "班", "o": "波", "on": "邦", "u": "布", "un": "本", "er": "伯", "ai": "拜", "ao": "包", "oi": "波伊", "iu": "比優"},
    "t":  {"i": "替", "in": "聽", "e": "特", "en": "騰", "ae": "太", "a": "塔", "an": "坦", "o": "偷", "on": "湯", "u": "兔", "un": "吞", "er": "特", "ai": "泰", "ao": "掏", "oi": "掏伊", "iu": "踢優"},
    "d":  {"i": "弟", "in": "定", "e": "得", "en": "等", "ae": "代", "a": "達", "an": "單", "o": "豆", "on": "當", "u": "度", "un": "頓", "er": "德", "ai": "呆", "ao": "導", "oi": "豆伊", "iu": "丟"},
    "k":  {"i": "奇", "in": "金", "e": "客", "en": "肯", "ae": "開", "a": "卡", "an": "看", "o": "扣", "on": "康", "u": "酷", "un": "困", "er": "可", "ai": "開", "ao": "考", "oi": "扣伊", "iu": "奇優"},
    "kw": {"i": "奎", "in": "昆", "e": "快", "en": "寬", "ae": "快", "a": "誇", "an": "寬", "o": "擴", "on": "狂", "u": "酷", "un": "困", "er": "闊", "ai": "快", "ao": "誇", "oi": "快", "iu": "奎"},
    "g":  {"i": "吉", "in": "金", "e": "給", "en": "跟", "ae": "蓋", "a": "嘎", "an": "敢", "o": "夠", "on": "剛", "u": "古", "un": "滾", "er": "哥", "ai": "蓋", "ao": "高", "oi": "夠伊", "iu": "給優"},
    "f":  {"i": "菲", "in": "芬", "e": "費", "en": "粉", "ae": "發", "a": "發", "an": "放", "o": "佛", "on": "芳", "u": "富", "un": "粉", "er": "佛", "ai": "發", "ao": "發", "oi": "佛伊", "iu": "飛優"},
    "v":  {"i": "維", "in": "文", "e": "威", "en": "文", "ae": "凡", "a": "瓦", "an": "凡", "o": "佛", "on": "汪", "u": "伏", "un": "文", "er": "佛", "ai": "外", "ao": "瓦", "oi": "佛伊", "iu": "飛優"},
    "θ":  {"i": "希", "in": "辛", "e": "塞", "en": "森", "ae": "賽", "a": "薩", "an": "善", "o": "搜", "on": "桑", "u": "蘇", "un": "順", "er": "色", "ai": "晒", "ao": "騷", "oi": "搜伊", "iu": "修"},
    "ð":  {"i": "里", "in": "林", "e": "雷", "en": "人", "ae": "賴", "a": "拉", "an": "藍", "o": "摟", "on": "朗", "u": "盧", "un": "倫", "er": "惹", "ai": "賴", "ao": "老", "oi": "摟伊", "iu": "留"},
    "s":  {"i": "細", "in": "新", "e": "塞", "en": "森", "ae": "賽", "a": "沙", "an": "散", "o": "搜", "on": "桑", "u": "蘇", "un": "順", "er": "色", "ai": "晒", "ao": "騷", "oi": "搜伊", "iu": "修"},
    "z":  {"i": "茲", "in": "林", "e": "賊", "en": "忍", "ae": "在", "a": "扎", "an": "讚", "o": "肉", "on": "髒", "u": "租", "un": "尊", "er": "澤", "ai": "在", "ao": "早", "oi": "肉伊", "iu": "揪"},
    "ʃ":  {"i": "希", "in": "欣", "e": "誰", "en": "神", "ae": "莎", "a": "莎", "an": "閃", "o": "秀", "on": "香", "u": "修", "un": "順", "er": "設", "ai": "晒", "ao": "嘯", "oi": "秀伊", "iu": "休"},
    "ʒ":  {"i": "日", "in": "仁", "e": "熱", "en": "人", "ae": "惹", "a": "惹", "an": "然", "o": "柔", "on": "讓", "u": "如", "un": "潤", "er": "熱", "ai": "來", "ao": "繞", "oi": "柔伊", "iu": "柔"},
    "h":  {"i": "希", "in": "欣", "e": "黑", "en": "恨", "ae": "嗨", "a": "哈", "an": "喊", "o": "厚", "on": "哄", "u": "呼", "un": "昏", "er": "喝", "ai": "嗨", "ao": "好", "oi": "厚伊", "iu": "休"},
    "C":  {"i": "奇", "in": "親", "e": "切", "en": "趁", "ae": "恰", "a": "查", "an": "趁", "o": "秋", "on": "搶", "u": "處", "un": "春", "er": "車", "ai": "拆", "ao": "吵", "oi": "秋伊", "iu": "秋"},
    "J":  {"i": "吉", "in": "金", "e": "傑", "en": "真", "ae": "加", "a": "哲", "an": "真", "o": "揪", "on": "講", "u": "局", "un": "君", "er": "哲", "ai": "摘", "ao": "找", "oi": "揪伊", "iu": "揪"},
    "m":  {"i": "蜜", "in": "明", "e": "美", "en": "門", "ae": "賣", "a": "媽", "an": "滿", "o": "摸", "on": "忙", "u": "木", "un": "悶", "er": "麼", "ai": "買", "ao": "貓", "oi": "摸伊", "iu": "謬"},
    "n":  {"i": "泥", "in": "您", "e": "內", "en": "嫩", "ae": "耐", "a": "拿", "an": "難", "o": "諾", "on": "囊", "u": "努", "un": "暖", "er": "呢", "ai": "奶", "ao": "鬧", "oi": "諾伊", "iu": "牛"},
    "l":  {"i": "利", "in": "林", "e": "累", "en": "冷", "ae": "賴", "a": "拉", "an": "藍", "o": "摟", "on": "龍", "u": "路", "un": "輪", "er": "樂", "ai": "來", "ao": "撈", "oi": "摟伊", "iu": "溜"},
    "r":  {"i": "瑞", "in": "林", "e": "瑞", "en": "人", "ae": "瑞", "a": "拉", "an": "然", "o": "肉", "on": "讓", "u": "入", "un": "潤", "er": "惹", "ai": "來", "ao": "繞", "oi": "肉伊", "iu": "如"},
    "w":  {"i": "威", "in": "聞", "e": "為", "en": "問", "ae": "哇", "a": "哇", "an": "萬", "o": "我", "on": "汪", "u": "屋", "un": "溫", "er": "窩", "ai": "外", "ao": "哇", "oi": "我伊", "iu": "威"},
    "j":  {"i": "伊", "in": "音", "e": "夜", "en": "言", "ae": "呀", "a": "呀", "an": "央", "o": "優", "on": "央", "u": "有", "un": "雲", "er": "也", "ai": "愛", "ao": "要", "oi": "優伊", "iu": "有"},
    "Z":  {"i": "次", "in": "親", "e": "測", "en": "層", "ae": "猜", "a": "擦", "an": "參", "o": "湊", "on": "倉", "u": "粗", "un": "村", "er": "策", "ai": "猜", "ao": "操", "oi": "湊伊", "iu": "秋"},
    "D":  {"i": "自", "in": "進", "e": "責", "en": "怎", "ae": "在", "a": "雜", "an": "讚", "o": "走", "on": "髒", "u": "足", "un": "尊", "er": "澤", "ai": "在", "ao": "早", "oi": "走伊", "iu": "揪"},
}
CV_TABLE["ɡ"] = CV_TABLE["g"]
CV_TABLE["ŋ"] = CV_TABLE["n"]

CODA_CHAR = {
    "p": "噗", "b": "吧", "t": "特", "d": "的", "k": "客", "g": "格", "ɡ": "格",
    "f": "夫", "v": "福", "θ": "思", "ð": "茲", "s": "絲", "z": "茲", "ʃ": "許",
    "ʒ": "日", "C": "奇", "J": "吉", "Z": "次", "D": "茲", "m": "姆", "n": "恩",
    "ŋ": "恩", "l": "喔", "r": "兒",
}

CLUSTER_CHAR = {
    "s": "斯", "p": "撲", "b": "不", "t": "特", "d": "得", "k": "可", "g": "格", "ɡ": "格", "f": "福",
}


def kk_to_natural_hook(en: str, kk: str, max_len: int = 8) -> str:
    """Convert KK phonetics string into a Mandarin sound-alike hook."""
    s = normalize_kk(kk)
    if not s:
        return "愛客"
    v_count = sum(1 for c in s if c in VOWELS)
    n = len(s)
    i = 0
    chars: list[str] = []
    while i < n:
        cons = []
        while i < n and s[i] not in VOWELS:
            cons.append(s[i])
            i += 1
        if i >= n:
            for c in cons:
                if c in CODA_CHAR:
                    chars.append(CODA_CHAR[c])
            break
        v = s[i]
        i += 1
        has_nasal = False
        coda_nasal_char = None
        if i < n and s[i] in ("m", "n", "ŋ") and (i + 1 >= n or s[i + 1] not in VOWELS):
            if v_count == 1 and i + 1 == n:
                coda_nasal_char = CODA_CHAR[s[i]]
                i += 1
            elif s[i] == "m" and v not in ("æ", "ɑ", "ʌ", "ə"):
                coda_nasal_char = "姆"
                i += 1
            else:
                has_nasal = True
                i += 1

        onset = ""
        if len(cons) == 1:
            onset = cons[0]
        elif len(cons) >= 2:
            if cons[-2:] == ["k", "w"]:
                for c_pre in cons[:-2]:
                    if c_pre in CLUSTER_CHAR:
                        chars.append(CLUSTER_CHAR[c_pre])
                onset = "kw"
            else:
                for c_pre in cons[:-1]:
                    if c_pre in CLUSTER_CHAR:
                        chars.append(CLUSTER_CHAR[c_pre])
                onset = cons[-1]

        v_cls = get_v_cls(v, has_nasal)
        chars.append(CV_TABLE.get(onset, CV_TABLE[""]).get(v_cls, "阿"))
        if coda_nasal_char:
            chars.append(coda_nasal_char)

        if i < n and s[i] in ("r", "l") and (i + 1 >= n or s[i + 1] not in VOWELS):
            if len(s) <= 4 or v_count == 1:
                chars.append(CODA_CHAR[s[i]])
            i += 1

    res = "".join(chars)
    if len(res) == 1:
        last_v = [c for c in s if c in VOWELS]
        v0 = last_v[-1] if last_v else "a"
        echo = {
            "i": "伊", "ɪ": "伊", "e": "欸", "ɛ": "欸", "æ": "愛", "ɑ": "阿",
            "ɔ": "喔", "o": "歐", "ʊ": "嗚", "u": "嗚", "ʌ": "阿", "ə": "額",
            "ɝ": "兒", "ɚ": "兒", "I": "愛", "W": "傲", "Y": "伊", "U": "優",
        }.get(v0, "呀")
        res = res + ("呀" if echo == res else echo)
    return res[:max_len] if len(res) > max_len else res
