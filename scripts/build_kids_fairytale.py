#!/usr/bin/env python3
"""Build kids fairy-tale listening stories with sample-accurate MP3 timestamps & full vocab audio.

Uses edge-tts + imageio_ffmpeg (PCM WAV concatenation) so sentence start/end timestamps match
the encoded MP3 boundaries down to the millisecond. Zero external generative API calls.
"""

from __future__ import annotations

import argparse
import asyncio
import json
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

ROLE_VOICE_CONFIG: dict[str, tuple[str, str]] = {
    "Milo": ("en-US-AnaNeural", "-4%"),
    "Owl": ("en-US-GuyNeural", "-4%"),
    "Mouse": ("en-US-AnaNeural", "+0%"),
    "Lion": ("en-US-GuyNeural", "-6%"),
}

PAUSE_SEC = 0.35
SAMPLE_RATE = 24000

STORIES: list[dict[str, Any]] = [
    {
        "id": "2026_kids_fairytale_01",
        "month": "兒童專區",
        "category": "kids",
        "title": "兒童童話 (1): 小熊米洛與橡實燈籠樹 (Milo and the Acorn Lantern Tree)",
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
    },
    {
        "id": "2026_kids_fairytale_02",
        "month": "兒童專區",
        "category": "kids",
        "title": "兒童童話 (2): 獅子與小老鼠 (Aesop's Fable: The Lion and the Mouse)",
        "level": "Pre-A1",
        "isDialogue": True,
        "voice": "en-US-AnaNeural & en-US-GuyNeural",
        "voiceLabel": "雙角色伊索寓言 (小老鼠 Mouse & 大獅子 Lion)",
        "audio": "audio/listening/2026_kids_fairytale_02.mp3",
        "sentences_raw": [
            {
                "speaker": "Lion",
                "role": "B",
                "roleDesc": "大獅子 (Guy)",
                "avatar": "🦁",
                "en": "Roar! Who woke me up from my afternoon nap? A tiny gray mouse!",
                "zh": "吼！是誰把我從午睡中吵醒了？原來是一隻小小灰灰的老鼠！",
            },
            {
                "speaker": "Mouse",
                "role": "A",
                "roleDesc": "小老鼠 (Ana)",
                "avatar": "🐭",
                "en": "Oh, please let me go, King Lion! I was running home in a hurry.",
                "zh": "喔，獅子王請放過我吧！我只是趕著跑回家而已。",
            },
            {
                "speaker": "Lion",
                "role": "B",
                "roleDesc": "大獅子 (Guy)",
                "avatar": "🦁",
                "en": "Hmm, why should a strong lion spare such a tiny little mouse?",
                "zh": "嗯，強壯的獅子為什麼要放過像你這麼渺小的小老鼠呢？",
            },
            {
                "speaker": "Mouse",
                "role": "A",
                "roleDesc": "小老鼠 (Ana)",
                "avatar": "🐭",
                "en": "If you are kind today, I promise I will help you too someday!",
                "zh": "如果你今天對我善良仁慈，我保證有一天我也能幫上你的忙喔！",
            },
            {
                "speaker": "Lion",
                "role": "B",
                "roleDesc": "大獅子 (Guy)",
                "avatar": "🦁",
                "en": "Haha, you are so funny! Okay, run along now, little friend.",
                "zh": "哈哈，你真逗趣！好吧，快跑走吧，小傢伙。",
            },
            {
                "speaker": "Lion",
                "role": "B",
                "roleDesc": "大獅子 (Guy)",
                "avatar": "🦁",
                "en": "Help! Help! A hunter's strong net caught my big paws! I cannot move!",
                "zh": "救命啊！救命！獵人的堅固大網抓住了我的大腳掌！我動彈不得了！",
            },
            {
                "speaker": "Mouse",
                "role": "A",
                "roleDesc": "小老鼠 (Ana)",
                "avatar": "🐭",
                "en": "Hold on, King Lion! I heard your loud roar and came right away.",
                "zh": "撐住，獅子王！我一聽到你響亮的吼聲就立刻趕過來了。",
            },
            {
                "speaker": "Mouse",
                "role": "A",
                "roleDesc": "小老鼠 (Ana)",
                "avatar": "🐭",
                "en": "I can chew through the thick rope with my sharp little teeth. Snap, snap!",
                "zh": "我可以用我尖尖的小牙齒咬斷這條粗繩子。喀嚓、喀嚓！",
            },
            {
                "speaker": "Lion",
                "role": "B",
                "roleDesc": "大獅子 (Guy)",
                "avatar": "🦁",
                "en": "I am free! Thank you, tiny mouse. Even little friends can be great helpers!",
                "zh": "我自由了！謝謝你，小老鼠。原來再小的朋友也能成為最棒的大幫手！",
            },
            {
                "speaker": "Mouse",
                "role": "A",
                "roleDesc": "小老鼠 (Ana)",
                "avatar": "🐭",
                "en": "You are very welcome, my friend! Kindness always comes back to you.",
                "zh": "完全不客氣，我的朋友！善良的心意總是會回到自己身邊喔。",
            },
        ],
        "grammar": [
            {
                "tag": "未來保證與條件句",
                "title": "如果你……，我就會……：If + 現在式, S + will + 原形動詞",
                "pattern": "If + S1 + 現在簡單式, S2 + will + 原形動詞 (V)",
                "explanation": "在伊索寓言和小對話裡用來表達「只要現在這麼做，將來就會有好結果」，注意 If 子句必須用現在式代替未來喔！",
                "keyPoint": "例如：If you are kind today, I will help you someday! (絕不寫 If you will be kind)",
                "example": "<span class='font-bold text-[#0071E3] underline decoration-[#0071E3]/60 decoration-2 underline-offset-4'>If you are kind today, I promise I will help you</span> too someday!",
                "exampleZh": "如果你今天對我善良仁慈，我保證有一天我也能幫上你的忙喔！",
            },
            {
                "tag": "工具介系詞",
                "title": "用某個工具做某事：with + 工具/身體部位",
                "pattern": "動作 + with + my / a + 名詞 (teeth / hands / pen)",
                "explanation": "兒童英文最核心的「使用工具」寫法！表示動作是靠著什麼東西來完成的。",
                "keyPoint": "複數「牙齒」是不規則變化：單數 tooth → 複數 teeth。",
                "example": "I can chew through the thick rope <span class='font-bold text-[#0071E3] underline decoration-[#0071E3]/60 decoration-2 underline-offset-4'>with my sharp little teeth</span>.",
                "exampleZh": "我可以用我尖尖的小牙齒咬斷這條粗繩子。",
            },
        ],
        "quiz": [
            {
                "q": "1. What was the lion doing before the tiny mouse woke him up?",
                "options": [
                    "A. Taking an afternoon nap",
                    "B. Flying a kite",
                    "C. Eating honey cookies",
                    "D. Swimming in a river",
                ],
                "ans": 0,
            },
            {
                "q": "2. How did the hunter catch King Lion?",
                "options": [
                    "A. With a wooden cage",
                    "B. With a strong net",
                    "C. With a deep hole",
                    "D. With a big basket",
                ],
                "ans": 1,
            },
            {
                "q": "3. What lesson does this Aesop's fable teach us?",
                "options": [
                    "A. Big animals never need help",
                    "B. Never sleep in the afternoon",
                    "C. Even little friends can be great helpers",
                    "D. Mice are faster than lions",
                ],
                "ans": 2,
            },
        ],
        "vocabulary": [
            {"en": "lion", "zh": "n. 獅子"},
            {"en": "mouse", "zh": "n. 老鼠、滑鼠"},
            {"en": "net", "zh": "n. 網、漁網、獵網"},
            {"en": "rope", "zh": "n. 繩索、粗繩"},
            {"en": "promise", "zh": "v./n. 承諾、答應、諾言"},
        ],
    },
]

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


async def build_story_audio(story: dict[str, Any], ff: str) -> list[dict[str, Any]]:
    AUDIO_LISTENING_DIR.mkdir(parents=True, exist_ok=True)
    sentences_out: list[dict[str, Any]] = []
    pause_frames = int(round(PAUSE_SEC * SAMPLE_RATE))
    silence_bytes = b"\x00\x00" * pause_frames

    with tempfile.TemporaryDirectory(prefix="kids_story_") as tmp_dir:
        tmp = Path(tmp_dir)
        raw_mp3s: list[Path] = []
        tasks = []
        for idx, s in enumerate(story["sentences_raw"]):
            voice, rate = ROLE_VOICE_CONFIG.get(s["speaker"], (US_VOICE, "-4%"))
            mp3_p = tmp / f"line_{idx:02d}.mp3"
            raw_mp3s.append(mp3_p)
            tasks.append(_tts_to_file(s["en"], voice, mp3_p, rate=rate))
        await asyncio.gather(*tasks)

        combined_wav = tmp / "combined.wav"
        cur_time = 0.0
        with wave.open(str(combined_wav), "wb") as out_wf:
            out_wf.setnchannels(1)
            out_wf.setsampwidth(2)
            out_wf.setframerate(SAMPLE_RATE)

            for idx, s in enumerate(story["sentences_raw"]):
                wav_p = tmp / f"line_{idx:02d}.wav"
                n_frames = _decode_to_pcm_wav(ff, raw_mp3s[idx], wav_p)
                dur = n_frames / float(SAMPLE_RATE)
                start_t = round(cur_time, 2)
                end_t = round(cur_time + dur, 2)

                with wave.open(str(wav_p), "rb") as in_wf:
                    out_wf.writeframes(in_wf.readframes(n_frames))

                if idx < len(story["sentences_raw"]) - 1:
                    out_wf.writeframes(silence_bytes)
                    cur_time += dur + PAUSE_SEC
                else:
                    cur_time += dur

                entry = dict(s)
                entry["start"] = start_t
                entry["end"] = end_t
                sentences_out.append(entry)

        final_mp3 = AUDIO_LISTENING_DIR / f"{story['id']}.mp3"
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


def upsert_listening_data(story: dict[str, Any], sentences: list[dict[str, Any]] | None) -> None:
    raw = LISTENING_DATA_PATH.read_text(encoding="utf-8")
    idx = raw.find("[")
    header = raw[:idx]
    arr = json.loads(raw[idx:].rstrip(";\r\n "))

    existing = next((a for a in arr if a.get("id") == story["id"]), None)
    final_sentences = sentences if sentences is not None else (existing or {}).get("sentences", [])

    article_obj = {
        "id": story["id"],
        "month": story["month"],
        "category": story["category"],
        "title": story["title"],
        "level": story["level"],
        "isDialogue": story["isDialogue"],
        "text": " ".join(s["en"] for s in final_sentences),
        "sentences": final_sentences,
        "grammar": story["grammar"],
        "quiz": story["quiz"],
        "voice": story["voice"],
        "voiceLabel": story["voiceLabel"],
        "audio": story["audio"],
        "vocabulary": story["vocabulary"],
    }

    replaced = False
    for i, a in enumerate(arr):
        if a.get("id") == story["id"]:
            arr[i] = article_obj
            replaced = True
            break
    if not replaced:
        arr.append(article_obj)

    LISTENING_DATA_PATH.write_text(
        f"{header}{json.dumps(arr, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"[DB] {'Updated' if replaced else 'Appended'} {story['id']} in listening_data.js (total={len(arr)})")


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
    return active_items


async def main() -> int:
    parser = argparse.ArgumentParser(description="Build kids fairy-tale listening stories")
    parser.add_argument("--id", type=str, default="", help="Only regenerate audio for specific story ID")
    parser.add_argument("--overwrite-audio", action="store_true", help="Regenerate MP3 even if already present")
    args = parser.parse_args()

    ff = imageio_ffmpeg.get_ffmpeg_exe()
    for story in STORIES:
        if args.id and story["id"] != args.id:
            continue
        mp3_path = BASE_DIR / story["audio"]
        if args.overwrite_audio or not mp3_path.exists():
            sentences = await build_story_audio(story, ff)
            upsert_listening_data(story, sentences)
        else:
            # Metadata update only (e.g. title update without touching timestamps/MP3)
            upsert_listening_data(story, None)

    await register_new_words_and_audio()
    return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
