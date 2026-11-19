#!/usr/bin/env python3
"""Build a kids fairy-tale listening story with sample-accurate MP3 timestamps & full vocab audio.

Uses edge-tts + imageio_ffmpeg (PCM WAV concatenation) so sentence start/end timestamps match
the encoded MP3 boundaries down to the millisecond. Zero external generative API calls.
"""

from __future__ import annotations

import asyncio
import json
import os
import re
import subprocess
import sys
import tempfile
import wave
from pathlib import Path
from typing import Any

import edge_tts
import imageio_ffmpeg

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

BASE_DIR = Path(__file__).resolve().parent.parent
LISTENING_DATA_PATH = BASE_DIR / "listening_data.js"
LISTENING_WORDS_PATH = BASE_DIR / "listening_words_data.js"
AUDIO_LISTENING_DIR = BASE_DIR / "audio" / "listening"

US_VOICE = "en-US-JennyNeural"
UK_VOICE = "en-GB-RyanNeural"
ZH_VOICE = "zh-TW-HsiaoChenNeural"

ROLE_VOICES = {
    "Milo": "en-US-AnaNeural",
    "Owl": "en-US-GuyNeural",
}

PAUSE_SEC = 0.35
SAMPLE_RATE = 24000

STORY_META: dict[str, Any] = {
    "id": "2026_kids_fairytale_01",
    "month": "兒童專區",
    "category": "kids",
    "title": "兒童童話 (1): 森林裡的魔法許願樹 (The Magic Wishing Tree in the Woods)",
    "level": "Pre-A1",
    "isDialogue": True,
    "voice": "en-US-AnaNeural & en-US-GuyNeural",
    "voiceLabel": "雙角色童話 (小熊 Milo & 貓頭鷹爺爺)",
    "audio": "audio/listening/2026_kids_fairytale_01.mp3",
    "sentences_raw": [
        {
            "speaker": "Milo",
            "role": "A",
            "roleDesc": "小熊 Milo (Ana)",
            "avatar": "🐻",
            "en": "Hello, Grandpa Owl! Why is that giant oak tree glowing gold tonight?",
            "zh": "你好，貓頭鷹爺爺！為什麼那棵大橡樹今晚在發金光呢？",
        },
        {
            "speaker": "Owl",
            "role": "B",
            "roleDesc": "貓頭鷹爺爺 (Guy)",
            "avatar": "🦉",
            "en": "Haha, good evening, little Milo! That is the magic wishing tree of the forest.",
            "zh": "呵呵，晚安，小熊米洛！那是森林裡的魔法許願樹喔。",
        },
        {
            "speaker": "Milo",
            "role": "A",
            "roleDesc": "小熊 Milo (Ana)",
            "avatar": "🐻",
            "en": "Wow, it is full of yellow lanterns! Look at the shiny acorn on the branch!",
            "zh": "哇，樹上掛滿了黃色小燈籠！你看樹枝上那顆閃亮的橡實！",
        },
        {
            "speaker": "Owl",
            "role": "B",
            "roleDesc": "貓頭鷹爺爺 (Guy)",
            "avatar": "🦉",
            "en": "A kind squirrel hid sweet honey cookies inside that golden acorn for sleepy friends.",
            "zh": "一隻善良的小松鼠把甜甜的蜂蜜餅乾藏進那顆金色橡實裡，要送給愛睏的朋友們。",
        },
        {
            "speaker": "Milo",
            "role": "A",
            "roleDesc": "小熊 Milo (Ana)",
            "avatar": "🐻",
            "en": "Oh, yummy! Can I share one cookie with the shy white rabbit over there?",
            "zh": "喔，好香喔！我可以分一塊餅乾給那邊害羞的小白兔嗎？",
        },
        {
            "speaker": "Owl",
            "role": "B",
            "roleDesc": "貓頭鷹爺爺 (Guy)",
            "avatar": "🦉",
            "en": "Of course! When you share kindness, the forest stars always shine even brighter!",
            "zh": "當然可以！當你願意分享善意時，森林裡的星星總是會閃耀得更亮喔！",
        },
        {
            "speaker": "Milo",
            "role": "A",
            "roleDesc": "小熊 Milo (Ana)",
            "avatar": "🐻",
            "en": "Look! A little green frog and a sleepy hedgehog are hopping here too!",
            "zh": "你看！一隻綠色小青蛙和一隻愛睏的小刺蝟也一跳一跳走過來了！",
        },
        {
            "speaker": "Owl",
            "role": "B",
            "roleDesc": "貓頭鷹爺爺 (Guy)",
            "avatar": "🦉",
            "en": "Let's have a cozy moonlight picnic under the glowing oak tree together.",
            "zh": "讓我們一起在這棵發光的橡樹下，舉辦一場溫暖的月光野餐吧。",
        },
        {
            "speaker": "Milo",
            "role": "A",
            "roleDesc": "小熊 Milo (Ana)",
            "avatar": "🐻",
            "en": "A sweet honey cookie for everyone! Cheers under the silver moon!",
            "zh": "每個人都有一塊甜甜的蜂蜜餅乾喔！在銀色月亮下乾杯！",
        },
        {
            "speaker": "Owl",
            "role": "B",
            "roleDesc": "貓頭鷹爺爺 (Guy)",
            "avatar": "🦉",
            "en": "Goodnight, little bear! A warm heart makes every starry night feel like a happy dream.",
            "zh": "晚安，小熊！一顆溫暖的心會讓每個星空夜晚都像一場幸福的美夢。",
        },
    ],
    "grammar": [
        {
            "tag": "描述場景與充滿",
            "title": "充滿了……：be full of + 名詞",
            "pattern": "主詞 (S) + is/are + full of + 名詞",
            "explanation": "用來生動描述一個空間或物品裡「裝滿了、掛滿了」滿滿的東西，童話故事描寫魔法景象時超常用！",
            "keyPoint": "full of 後面可接複數名詞 (yellow lanterns)，也可接不可數名詞 (magic)。",
            "example": "It is <span class='font-bold text-[#0071E3] underline decoration-[#0071E3]/60 decoration-2 underline-offset-4'>full of yellow lanterns</span>!",
            "exampleZh": "樹上掛滿了黃色小燈籠！",
        },
        {
            "tag": "邀請一起活動",
            "title": "大家一起來……：Let's + 原形動詞 (V)",
            "pattern": "Let's + 原形動詞 (have / play / share)...",
            "explanation": "Let's (= Let us) 是邀請朋友與家人「一起做某件事」最快樂親切的開頭句型！",
            "keyPoint": "英語說「舉辦野餐」習慣用 have a picnic，不說 play a picnic 喔！",
            "example": "<span class='font-bold text-[#0071E3] underline decoration-[#0071E3]/60 decoration-2 underline-offset-4'>Let's have a cozy moonlight picnic</span> under the glowing oak tree together.",
            "exampleZh": "讓我們一起在這棵發光的橡樹下，舉辦一場溫暖的月光野餐吧。",
        },
    ],
    "quiz": [
        {
            "q": "1. What is glowing gold in the forest?",
            "options": [
                "A. A giant oak tree",
                "B. A blue river",
                "C. A little rock",
                "D. A tall bridge",
            ],
            "ans": 0,
        },
        {
            "q": "2. Who hid the sweet honey cookies inside the golden acorn?",
            "options": [
                "A. A white rabbit",
                "B. A kind squirrel",
                "C. A green frog",
                "D. A sleepy hedgehog",
            ],
            "ans": 1,
        },
        {
            "q": "3. What do Milo and his forest friends do under the oak tree?",
            "options": [
                "A. They fly a colorful kite",
                "B. They ride bicycles",
                "C. They have a cozy moonlight picnic",
                "D. They brush their teeth",
            ],
            "ans": 2,
        },
    ],
    "vocabulary": [
        {"en": "lantern", "zh": "n. 燈籠、提燈"},
        {"en": "acorn", "zh": "n. 橡實、橡樹果"},
        {"en": "squirrel", "zh": "n. 松鼠"},
        {"en": "hedgehog", "zh": "n. 刺蝟"},
        {"en": "picnic", "zh": "n. 野餐、郊遊"},
    ],
}

NEW_WORDS: list[dict[str, Any]] = [
    {
        "en": "acorn",
        "kk": "[ˋekɔrn]",
        "uk": "/ˈeɪkɔːn/",
        "zh": "n. 橡實、橡樹果",
        "unit": 19,
        "example": "[n.] The little brown squirrel carried a shiny acorn up the oak tree.",
        "exampleZh": "那隻棕色的小松鼠抱著一顆閃亮的橡實爬上橡樹。",
    },
    {
        "en": "hedgehog",
        "kk": "[ˋhɛdʒ͵hɑɡ]",
        "uk": "/ˈhedʒhɒɡ/",
        "zh": "n. 刺蝟",
        "unit": 19,
        "example": "[n.] A sleepy hedgehog curled up under the warm leaves at night.",
        "exampleZh": "一隻愛睏的小刺蝟夜晚在溫暖的樹葉下捲成一團睡覺。",
    },
]


def _clean_example_for_tts(ex: str) -> str:
    return re.sub(r"^\s*\[[^\]]+\]\s*", "", ex).strip()


def _clean_zh_for_tts(zh: str) -> str:
    parts = [p.strip() for p in re.split(r"[；;]", zh) if p.strip()]
    cleaned = []
    for p in parts:
        p = re.sub(r"^(?:n|v|vt|vi|adj|adv|prep|conj|pron|int)\.\s*", "", p, flags=re.I)
        p = re.sub(r"（[^）]*）|\([^)]*\)", "", p).strip()
        if p:
            cleaned.append(p)
    return "，".join(cleaned) or zh


async def _tts_to_file(text: str, voice: str, out_path: Path, rate: str = "+0%") -> None:
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(str(out_path))


def _decode_to_pcm_wav(ff: str, mp3_path: Path, wav_path: Path) -> int:
    """Convert MP3 to 24kHz mono 16-bit PCM WAV and return exact sample frame count."""
    cmd = [
        ff, "-y", "-loglevel", "error",
        "-i", str(mp3_path),
        "-ar", str(SAMPLE_RATE),
        "-ac", "1",
        "-sample_fmt", "s16",
        str(wav_path),
    ]
    subprocess.run(cmd, check=True)
    with wave.open(str(wav_path), "rb") as wf:
        return wf.getnframes()


async def build_story_audio(ff: str) -> list[dict[str, Any]]:
    AUDIO_LISTENING_DIR.mkdir(parents=True, exist_ok=True)
    sentences_out: list[dict[str, Any]] = []
    pause_frames = int(round(PAUSE_SEC * SAMPLE_RATE))
    silence_bytes = b"\x00\x00" * pause_frames

    with tempfile.TemporaryDirectory(prefix="kids_story_") as tmp_dir:
        tmp = Path(tmp_dir)
        raw_mp3s: list[Path] = []
        pcm_wavs: list[Path] = []

        # Synthesize each dialogue line sequentially/concisely
        tasks = []
        for idx, s in enumerate(STORY_META["sentences_raw"]):
            voice = ROLE_VOICES[s["speaker"]]
            mp3_p = tmp / f"line_{idx:02d}.mp3"
            raw_mp3s.append(mp3_p)
            tasks.append(_tts_to_file(s["en"], voice, mp3_p, rate="-4%"))
        await asyncio.gather(*tasks)

        combined_wav = tmp / "combined.wav"
        cur_time = 0.0
        with wave.open(str(combined_wav), "wb") as out_wf:
            out_wf.setnchannels(1)
            out_wf.setsampwidth(2)
            out_wf.setframerate(SAMPLE_RATE)

            for idx, s in enumerate(STORY_META["sentences_raw"]):
                wav_p = tmp / f"line_{idx:02d}.wav"
                n_frames = _decode_to_pcm_wav(ff, raw_mp3s[idx], wav_p)
                dur = n_frames / float(SAMPLE_RATE)
                start_t = round(cur_time, 2)
                end_t = round(cur_time + dur, 2)

                with wave.open(str(wav_p), "rb") as in_wf:
                    out_wf.writeframes(in_wf.readframes(n_frames))

                if idx < len(STORY_META["sentences_raw"]) - 1:
                    out_wf.writeframes(silence_bytes)
                    cur_time += dur + PAUSE_SEC
                else:
                    cur_time += dur

                entry = dict(s)
                entry["start"] = start_t
                entry["end"] = end_t
                sentences_out.append(entry)

        final_mp3 = AUDIO_LISTENING_DIR / f"{STORY_META['id']}.mp3"
        subprocess.run(
            [
                ff, "-y", "-loglevel", "error",
                "-i", str(combined_wav),
                "-ar", str(SAMPLE_RATE),
                "-ac", "1",
                "-b:a", "48k",
                str(final_mp3),
            ],
            check=True,
        )
        print(f"[Audio] Wrote {final_mp3} ({final_mp3.stat().st_size} bytes, duration={cur_time:.2f}s)")

    return sentences_out


def upsert_listening_data(sentences: list[dict[str, Any]]) -> None:
    raw = LISTENING_DATA_PATH.read_text(encoding="utf-8")
    idx = raw.find("[")
    header = raw[:idx]
    arr = json.loads(raw[idx:].rstrip(";\r\n "))

    article_obj = {
        "id": STORY_META["id"],
        "month": STORY_META["month"],
        "category": STORY_META["category"],
        "title": STORY_META["title"],
        "level": STORY_META["level"],
        "isDialogue": STORY_META["isDialogue"],
        "text": " ".join(s["en"] for s in sentences),
        "sentences": sentences,
        "grammar": STORY_META["grammar"],
        "quiz": STORY_META["quiz"],
        "voice": STORY_META["voice"],
        "voiceLabel": STORY_META["voiceLabel"],
        "audio": STORY_META["audio"],
        "vocabulary": STORY_META["vocabulary"],
    }

    replaced = False
    for i, a in enumerate(arr):
        if a.get("id") == STORY_META["id"]:
            arr[i] = article_obj
            replaced = True
            break
    if not replaced:
        arr.append(article_obj)

    LISTENING_DATA_PATH.write_text(
        f"{header}{json.dumps(arr, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"[DB] {'Updated' if replaced else 'Appended'} {STORY_META['id']} in listening_data.js (total={len(arr)})")


async def register_new_words_and_audio() -> list[dict[str, Any]]:
    raw = LISTENING_WORDS_PATH.read_text(encoding="utf-8")
    m = re.search(r"const listeningWordsDB\s*=\s*(\[[\s\S]*\])\s*;", raw)
    if not m:
        raise RuntimeError("Could not parse listening_words_data.js")
    header = raw[: raw.find("const listeningWordsDB")]
    db_list: list[dict[str, Any]] = json.loads(m.group(1))
    by_en = {str(it.get("en") or "").strip().lower(): it for it in db_list}
    next_id = max(int(it["id"]) for it in db_list) + 1

    active_items: list[dict[str, Any]] = []
    for nw in NEW_WORDS:
        key = nw["en"].strip().lower()
        if key in by_en:
            active_items.append(by_en[key])
        else:
            item = dict(nw)
            item["id"] = next_id
            next_id += 1
            db_list.append(item)
            by_en[key] = item
            active_items.append(item)

    LISTENING_WORDS_PATH.write_text(
        f"{header}const listeningWordsDB = {json.dumps(db_list, ensure_ascii=False, indent=4)};\n",
        encoding="utf-8",
    )
    print(f"[Vocab] listening_words_data.js total={len(db_list)} | active IDs={[x['id'] for x in active_items]}")

    # Generate 4 tracks per word
    (BASE_DIR / "audio" / "words" / "us").mkdir(parents=True, exist_ok=True)
    (BASE_DIR / "audio" / "words" / "uk").mkdir(parents=True, exist_ok=True)
    (BASE_DIR / "audio" / "examples").mkdir(parents=True, exist_ok=True)
    (BASE_DIR / "audio" / "zh").mkdir(parents=True, exist_ok=True)

    tts_tasks = []
    for it in active_items:
        en = it["en"]
        wid = it["id"]
        us_p = BASE_DIR / "audio" / "words" / "us" / f"{en}.mp3"
        uk_p = BASE_DIR / "audio" / "words" / "uk" / f"{en}.mp3"
        ex_p = BASE_DIR / "audio" / "examples" / f"{wid}.mp3"
        zh_p = BASE_DIR / "audio" / "zh" / f"{wid}.mp3"
        if not us_p.exists():
            tts_tasks.append(_tts_to_file(en, US_VOICE, us_p))
        if not uk_p.exists():
            tts_tasks.append(_tts_to_file(en, UK_VOICE, uk_p))
        if not ex_p.exists():
            tts_tasks.append(_tts_to_file(_clean_example_for_tts(it["example"]), US_VOICE, ex_p))
        if not zh_p.exists():
            tts_tasks.append(_tts_to_file(_clean_zh_for_tts(it["zh"]), ZH_VOICE, zh_p))
    if tts_tasks:
        await asyncio.gather(*tts_tasks)
        print(f"[Vocab Audio] Generated {len(tts_tasks)} MP3 tracks.")

    # Update UK phonetics JSON manifest cleanly
    uk_path = BASE_DIR / "uk_phonetics_manifest.js"
    uk_raw = uk_path.read_text(encoding="utf-8")
    obj_start = uk_raw.find("{")
    dec = json.JSONDecoder()
    uk_dict, obj_end = dec.raw_decode(uk_raw, obj_start)
    for it in active_items:
        uk_dict[it["en"].lower()] = it["uk"]
    uk_dict_sorted = dict(sorted(uk_dict.items()))
    uk_path.write_text(
        uk_raw[:obj_start] + json.dumps(uk_dict_sorted, ensure_ascii=False, indent=2) + uk_raw[obj_end:],
        encoding="utf-8",
    )

    # Update words_audio_manifest.js
    us_dir = BASE_DIR / "audio" / "words" / "us"
    uk_dir = BASE_DIR / "audio" / "words" / "uk"
    us_files = sorted({p.stem.lower() for p in us_dir.glob("*.mp3")})
    uk_files = sorted({p.stem.lower() for p in uk_dir.glob("*.mp3")})
    (BASE_DIR / "words_audio_manifest.js").write_text(
        "// Auto-generated real human voice audio manifest (US Female & UK Male)\n"
        f"window.WORDS_AUDIO_MANIFEST_US = new Set({json.dumps(us_files, ensure_ascii=False)});\n"
        f"window.WORDS_AUDIO_MANIFEST_UK = new Set({json.dumps(uk_files, ensure_ascii=False)});\n"
        "window.WORDS_AUDIO_MANIFEST = window.WORDS_AUDIO_MANIFEST_US;\n",
        encoding="utf-8",
    )

    # Update examples & zh ID manifests
    for fname, var_name, comment in (
        ("examples_audio_manifest.js", "EXAMPLES_AUDIO_MANIFEST", "// 自動產生的 Edge-TTS 例句真人音檔清單 (ID 集合)"),
        ("zh_audio_manifest.js", "ZH_AUDIO_MANIFEST", "// Edge-TTS zh manifest"),
    ):
        p = BASE_DIR / fname
        ids = set(map(int, re.findall(r"\b\d+\b", p.read_text(encoding="utf-8"))))
        for it in active_items:
            ids.add(int(it["id"]))
        sorted_ids = sorted(ids)
        lines = [f"{comment}\n", f"window.{var_name} = new Set([\n"]
        for i in range(0, len(sorted_ids), 25):
            lines.append("  " + ", ".join(map(str, sorted_ids[i : i + 25])) + ",\n")
        lines.append("]);\n")
        p.write_text("".join(lines), encoding="utf-8")

    print("[Manifests] Updated uk_phonetics, words_audio, examples_audio, and zh_audio manifests.")
    return active_items


async def main() -> int:
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    sentences = await build_story_audio(ff)
    upsert_listening_data(sentences)
    await register_new_words_and_audio()
    return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
