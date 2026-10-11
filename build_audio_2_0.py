import asyncio
import json
import os
import re
import sys
import edge_tts

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

VOICE_MAP = {
    "us_female": "en-US-JennyNeural",
    "us_male": "en-US-GuyNeural",
    "uk_male": "en-GB-RyanNeural"
}

def pick_voice(article):
    title = article.get("title", "")
    category = article.get("category", "")
    if "廣播" in title or "航班" in title or "機場" in title:
        return VOICE_MAP["uk_male"], "英式男聲 (UK)"
    elif category == "toeic":
        # 輪替或依情境
        if "會議" in title or "維修" in title or "交貨" in title or "租約" in title:
            return VOICE_MAP["us_male"], "美式男聲 (US)"
        else:
            return VOICE_MAP["us_female"], "美式女聲 (US)"
    else:
        if "火車" in title or "租車" in title or "診所" in title:
            return VOICE_MAP["us_male"], "美式男聲 (US)"
        return VOICE_MAP["us_female"], "美式女聲 (US)"

async def generate_article_audio_with_timestamps(article, output_audio_path):
    text = article["text"]
    voice, voice_label = pick_voice(article)
    article["voice"] = voice
    article["voiceLabel"] = voice_label

    communicate = edge_tts.Communicate(text, voice)
    word_boundaries = []

    with open(output_audio_path, "wb") as f_out:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                f_out.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                # offset and duration in 100ns units (ticks), divide by 10,000,000 to get seconds
                offset_sec = chunk["offset"] / 10_000_000.0
                duration_sec = chunk["duration"] / 10_000_000.0
                word_boundaries.append({
                    "offset": offset_sec,
                    "duration": duration_sec,
                    "text": chunk["text"],
                    "end": offset_sec + duration_sec
                })

    # Now calculate sentence timestamps
    sentences = article.get("sentences", [])
    if sentences and word_boundaries:
        # Match words sequentially into sentences
        # For each sentence, find the first and last word matching
        current_word_idx = 0
        total_wb = len(word_boundaries)

        for s_idx, s in enumerate(sentences):
            s_words = re.findall(r"\b[a-zA-Z0-9']+\b", s["en"].lower())
            if not s_words:
                continue

            s_start = None
            s_end = None

            # Look ahead for matching words
            matched_count = 0
            start_cand_idx = current_word_idx

            while current_word_idx < total_wb and matched_count < len(s_words):
                wb_word = re.sub(r"[^a-zA-Z0-9']", "", word_boundaries[current_word_idx]["text"].lower())
                target_word = s_words[matched_count]

                if wb_word and (wb_word in target_word or target_word in wb_word):
                    if s_start is None:
                        s_start = word_boundaries[current_word_idx]["offset"]
                    s_end = word_boundaries[current_word_idx]["end"]
                    matched_count += 1
                current_word_idx += 1

            if s_start is not None and s_end is not None:
                s["start"] = round(s_start, 2)
                s["end"] = round(s_end, 2)
            else:
                # Fallback estimate if strict matching desynced
                prev_end = sentences[s_idx - 1]["end"] if s_idx > 0 and "end" in sentences[s_idx - 1] else 0.0
                s["start"] = prev_end
                s["end"] = round(prev_end + max(2.0, len(s["en"].split()) * 0.4), 2)
    elif sentences:
        # Fallback if no word boundaries
        cur_t = 0.0
        for s in sentences:
            dur = max(2.5, len(s["en"].split()) * 0.45)
            s["start"] = round(cur_t, 2)
            s["end"] = round(cur_t + dur, 2)
            cur_t = s["end"]

    article["audio"] = output_audio_path.replace("\\", "/")
    print(f"✔ 已生成 [{article['id']}] {article['title']} ({voice_label}) -> {output_audio_path}")

async def main():
    audio_dir = os.path.join("audio", "listening")
    os.makedirs(audio_dir, exist_ok=True)

    data_file = "listening_data.js"
    with open(data_file, "r", encoding="utf-8") as f:
        content = f.read()

    prefix = "const listeningArticlesDB = "
    suffix = ";\n\n// 相容"
    json_str = content.split(prefix)[1].split(suffix)[0]
    articles = json.loads(json_str)

    print(f"開始為 {len(articles)} 篇短文生成 AI 真人語音 (Edge-TTS 2.0)...")

    # Process sequentially to avoid rate limits
    for a in articles:
        out_path = os.path.join("audio", "listening", f"{a['id']}.mp3")
        await generate_article_audio_with_timestamps(a, out_path)

    # Write back updated listening_data.js
    new_json_str = json.dumps(articles, ensure_ascii=False, indent=2)
    new_content = prefix + new_json_str + suffix + content.split(suffix)[1]
    with open(data_file, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("★ 全部 32 篇音檔生成完畢並已回寫至 listening_data.js！")

if __name__ == "__main__":
    asyncio.run(main())
