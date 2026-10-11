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
    boundaries = []

    with open(output_audio_path, "wb") as f_out:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                f_out.write(chunk["data"])
            elif chunk["type"] == "SentenceBoundary":
                offset_sec = chunk["offset"] / 10_000_000.0
                dur_sec = chunk["duration"] / 10_000_000.0
                boundaries.append({
                    "start": round(offset_sec, 2),
                    "end": round(offset_sec + dur_sec, 2),
                    "text": chunk.get("text", "")
                })

    # Calculate exact sentence timestamps
    sentences = article.get("sentences", [])
    if sentences and boundaries:
        def clean_str(s):
            return re.sub(r"[^a-zA-Z0-9]", "", s).lower()

        b_idx = 0
        total_b = len(boundaries)

        for s_idx, s in enumerate(sentences):
            target_clean = clean_str(s["en"])
            matched_text = ""
            s_start = None
            s_end = None

            while b_idx < total_b:
                b = boundaries[b_idx]
                b_clean = clean_str(b["text"])

                if s_start is None:
                    s_start = b["start"]
                s_end = b["end"]
                matched_text += b_clean
                b_idx += 1

                if target_clean in matched_text or matched_text in target_clean:
                    if len(matched_text) >= len(target_clean) * 0.9:
                        break

            s["start"] = s_start if s_start is not None else (sentences[s_idx - 1]["end"] if s_idx > 0 else 0.0)
            s["end"] = s_end if s_end is not None else round(s["start"] + 3.0, 2)

        # Gapless transitions between consecutive sentences
        for i in range(len(sentences) - 1):
            if sentences[i + 1]["start"] > sentences[i]["start"]:
                sentences[i]["end"] = sentences[i + 1]["start"]

        if sentences:
            sentences[0]["start"] = 0.0

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
