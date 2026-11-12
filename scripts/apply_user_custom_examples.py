import asyncio
import json
import os
import re
import sys
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)

US_VOICE = "en-US-JennyNeural"
EXAMPLES_DIR = os.path.join("audio", "examples")

USER_UPDATES = {
    9064: {
        "example": "[n.] We have two dinner sittings at 6 and 8 p.m.",
        "exampleZh": "我們的晚餐分成下午 6 點和 8 點兩個時段。"
    },
    9065: {
        "example": "[adj.] I bought some frozen vegetables at the supermarket.",
        "exampleZh": "我在超市買了一些冷凍蔬菜。"
    },
    9066: {
        "example": "[v.] My job encompasses IT support and system maintenance.",
        "exampleZh": "我的工作包含 IT 支援和系統維護。"
    },
    9067: {
        "example": "[n.] Kate is my new English teacher.",
        "exampleZh": "Kate 是我的新英文老師。"
    },
    9068: {
        "example": "[adj.] He looked incredulous when I told him the price.",
        "exampleZh": "當我告訴他價格時，他露出難以置信的表情。"
    },
    9069: {
        "example": "[n.] Moira works in the same office as me.",
        "exampleZh": "Moira 和我在同一間辦公室工作。"
    },
    9070: {
        "example": "[n.] I saw Miquela in a social media post.",
        "exampleZh": "我在一則社群媒體貼文中看到 Miquela。"
    },
    9071: {
        "example": "[adv.] The internet is maddeningly slow today.",
        "exampleZh": "今天的網路慢得令人抓狂。"
    },
    9072: {
        "example": "[n.] Jenny usually takes the bus to work.",
        "exampleZh": "Jenny 通常搭公車上班。"
    },
    9073: {
        "example": "[n.] My friend traveled to Mozambique last year.",
        "exampleZh": "我的朋友去年去了莫三比克。"
    },
    9074: {
        "example": "[n.] Seafood is the restaurant's speciality.",
        "exampleZh": "海鮮是這家餐廳的招牌菜。"
    },
    9075: {
        "example": "[n.] The watchmaker repaired the clock's escapement.",
        "exampleZh": "鐘錶師修理了時鐘的擒縱機構。"
    },
    9076: {
        "example": "[n.] George is responsible for the IT department.",
        "exampleZh": "George 負責資訊部門。"
    },
    9077: {
        "example": "[adj.] She bought a funky pair of colorful shoes.",
        "exampleZh": "她買了一雙色彩鮮豔、很有特色的鞋子。"
    },
    9078: {
        "example": "[v.] He masticated the food slowly before swallowing.",
        "exampleZh": "他慢慢咀嚼食物後才吞下去。"
    },
    9079: {
        "example": "[adj.] The project was fraught with unexpected problems.",
        "exampleZh": "這個專案充滿了意想不到的問題。"
    },
    9080: {
        "example": "[int.] Ouch! I burned my finger on the hot pan.",
        "exampleZh": "哎喲！我的手指被熱鍋燙到了。"
    },
    9081: {
        "example": "[v.] I accidentally trod on my glasses.",
        "exampleZh": "我不小心踩到了我的眼鏡。"
    },
    9082: {
        "example": "[adv.] I don't use that old computer anymore.",
        "exampleZh": "我不再使用那台舊電腦了。"
    },
    9083: {
        "example": "[adj.] The factory uses extruded aluminum parts.",
        "exampleZh": "這家工廠使用擠壓成型的鋁製零件。"
    },
    9084: {
        "example": "[n.] Having a day off after a busy week is pure bliss.",
        "exampleZh": "忙碌一週後能休假一天，真是一大享受。"
    },
    9085: {
        "example": "[n.] This pencil contains graphite.",
        "exampleZh": "這支鉛筆含有石墨。"
    },
    9086: {
        "example": "[n.] The children love watching cartoon animations.",
        "exampleZh": "孩子們喜歡看卡通動畫。"
    },
    9087: {
        "example": "[adj.] Scientists study evolutionary changes in animals.",
        "exampleZh": "科學家研究動物的演化變化。"
    },
    9088: {
        "example": "[adj.] The museum displays Manchurian historical artifacts.",
        "exampleZh": "這間博物館展示滿洲歷史文物。"
    },
    9089: {
        "example": "[v.] The company supplied us with new computers.",
        "exampleZh": "公司提供了我們新的電腦。"
    },
    9090: {
        "example": "[adj.] In the story, the narrator seems omniscient.",
        "exampleZh": "在這個故事中，敘述者似乎無所不知。"
    },
    9091: {
        "example": "[v.] Don't overestimate how much time you have.",
        "exampleZh": "不要高估自己有多少時間。"
    },
    9092: {
        "example": "[adj.] I enjoy eating Japanese food.",
        "exampleZh": "我喜歡吃日本料理。"
    },
    9093: {
        "example": "[n.] The kids joked that my old toy had cooties.",
        "exampleZh": "孩子們開玩笑說我的舊玩具有假想病菌。"
    },
    9094: {
        "example": "[n.] We have shedloads of work to do today.",
        "exampleZh": "我們今天有一大堆工作要做。"
    },
    9095: {
        "example": "[adj.] My colleague bought an Australian coffee machine.",
        "exampleZh": "我的同事買了一台澳洲製的咖啡機。"
    },
    9096: {
        "example": "[n.] The government announced a new decree.",
        "exampleZh": "政府公布了一項新法令。"
    },
    9097: {
        "example": "[n.] We plan to visit Fiji during our vacation.",
        "exampleZh": "我們計畫假期期間去斐濟。"
    },
    9098: {
        "example": "[v.] I redeemed my points for a free coffee.",
        "exampleZh": "我用點數兌換了一杯免費咖啡。"
    },
    9099: {
        "example": "[v.] My manager called me this morning.",
        "exampleZh": "我的主管今天早上打電話給我。"
    },
    9100: {
        "example": "[n.] Please read these words aloud.",
        "exampleZh": "請把這些單字大聲唸出來。"
    },
    9101: {
        "example": "[n.] Consumers often compare prices before buying products.",
        "exampleZh": "消費者購買商品前通常會比較價格。"
    }
}

def clean_example_for_tts(ex_str):
    if not ex_str:
        return ''
    return re.sub(r'^\[[^\]]+\]\s*', '', ex_str).strip()

async def generate_example_audio(text, wid, sem):
    out_path = os.path.join(EXAMPLES_DIR, f"{wid}.mp3")
    async with sem:
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(text, US_VOICE)
                await comm.save(out_path)
                if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
                    return wid, True
            except Exception as e:
                await asyncio.sleep(0.5 * (attempt + 1))
        return wid, False

async def main():
    print("=== Step 1: Updating examples_unit9_data.js with user's examples ===")
    u9_path = "examples_unit9_data.js"
    with open(u9_path, "r", encoding="utf-8") as f:
        code = f.read()

    m = re.search(r'const\s+examplesUnit9WordsDB\s*=\s*(\[[\s\S]*?\]);\s*$', code)
    if not m:
        print("Error: Could not parse examplesUnit9WordsDB!")
        return

    items = json.loads(m.group(1))
    updated_count = 0
    for it in items:
        wid = it["id"]
        if wid in USER_UPDATES:
            u = USER_UPDATES[wid]
            it["example"] = u["example"]
            it["exampleZh"] = u["exampleZh"]
            if wid == 9099:
                it["zh"] = "v. 打電話、稱呼、呼叫（call 之過去式與過去分詞）；adj. 被稱為…的、名叫…的"
            updated_count += 1

    print(f"Updated {updated_count} records in examplesUnit9WordsDB.")

    header_m = re.match(r'^(\/\*\*[\s\S]*?\*\/)\s*const examplesUnit9WordsDB =', code)
    header = header_m.group(1) + "\n" if header_m else "/**\n * 高中 7000 單字擴充單元 - 例句實戰高頻詞庫\n */\n"
    with open(u9_path, "w", encoding="utf-8") as f:
        f.write(f"{header}const examplesUnit9WordsDB = {json.dumps(items, ensure_ascii=False, indent=2)};\n")
    print("Saved updated examples_unit9_data.js.")

    print("\n=== Step 2: Regenerating 38 example audio files via Edge-TTS ===")
    sem = asyncio.Semaphore(10)
    tasks = []
    for wid, u in USER_UPDATES.items():
        spoken_text = clean_example_for_tts(u["example"])
        tasks.append(generate_example_audio(spoken_text, wid, sem))

    results = await asyncio.gather(*tasks)
    success_count = sum(1 for wid, ok in results if ok)
    print(f"Example audio regeneration: {success_count}/{len(USER_UPDATES)} successful.")

if __name__ == "__main__":
    asyncio.run(main())
