import asyncio
import json
import os
import re
import sys
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)

US_VOICE = "en-US-JennyNeural"
UK_VOICE = "en-GB-RyanNeural"
ZH_VOICE = "zh-TW-HsiaoChenNeural"

NEW_38_WORDS = [
    {
        "en": "sittings",
        "kk": "[ˋsɪtɪŋz]",
        "uk": "/ˈsɪtɪŋz/",
        "zh": "n. 議會開會期、就餐時段、會議、孵蛋期（sitting 之複數）",
        "unit": 9,
        "example": "[n.] The popular restaurant served dinner in two separate sittings.",
        "exampleZh": "這家熱門餐廳將晚餐分為兩個用餐時段進行。"
    },
    {
        "en": "frozen",
        "kk": "[ˋfroʊz(ə)n]",
        "uk": "/ˈfrəʊzn/",
        "zh": "adj. 結冰的、冷凍的、嚇呆的；v. 結冰、凍結（freeze 之過去分詞）",
        "unit": 9,
        "example": "[adj.] We carefully walked across the frozen surface of the lake.",
        "exampleZh": "我們小心翼翼地走在結冰的湖面上。"
    },
    {
        "en": "encompasses",
        "kk": "[ɪnˋkʌmpəsɪz]",
        "uk": "/ɪnˈkʌmpəsɪz/",
        "zh": "v. 包含、包括、圍繞（encompass 之第三人稱單數）",
        "unit": 9,
        "example": "[v.] A thorough education encompasses far more than just taking exams.",
        "exampleZh": "全面的教育所包含的遠遠不只是參加考試而已。"
    },
    {
        "en": "kate",
        "kk": "[ket]",
        "uk": "/keɪt/",
        "zh": "n. 凱特（女子名，Catherine 之暱稱）",
        "unit": 9,
        "example": "[n.] Kate smiled warmly as she welcomed the new students to class.",
        "exampleZh": "凱特熱情地微笑著歡迎新同學來到班上。"
    },
    {
        "en": "incredulous",
        "kk": "[ɪnˋkredʒələs]",
        "uk": "/ɪnˈkredjələs/",
        "zh": "adj. 難以置信的、表示懷疑的、不輕信的",
        "unit": 9,
        "example": "[adj.] Her face showed an incredulous expression when she heard the unexpected news.",
        "exampleZh": "當她聽到這個出乎意料的消息時，臉上露出了難以置信的表情。"
    },
    {
        "en": "moira",
        "kk": "[ˋmɔɪrə]",
        "uk": "/ˈmɔɪrə/",
        "zh": "n. 莫伊拉（女子名）",
        "unit": 9,
        "example": "[n.] Moira joined the research team to lead the new project.",
        "exampleZh": "莫伊拉加入了研究團隊以領導這項新專案。"
    },
    {
        "en": "miquela",
        "kk": "[mɪˋkɛlə]",
        "uk": "/mɪˈkɛlə/",
        "zh": "n. 蜜凱拉（女子名、虛擬網紅）",
        "unit": 9,
        "example": "[n.] Many young followers enjoy tracking Miquela on social media.",
        "exampleZh": "許多年輕的追隨者喜歡在社群媒體上關注蜜凱拉。"
    },
    {
        "en": "maddeningly",
        "kk": "[ˋmædnɪŋli]",
        "uk": "/ˈmædnɪŋli/",
        "zh": "adv. 令人發狂地、使人惱火地、極端慢地",
        "unit": 9,
        "example": "[adv.] Traffic was moving maddeningly slow during the evening rush hour.",
        "exampleZh": "在傍晚尖峰時段，交通進展緩慢得令人抓狂。"
    },
    {
        "en": "jenny",
        "kk": "[ˋdʒeni]",
        "uk": "/ˈdʒeni/",
        "zh": "n. 珍妮（女子名）；雌驢（jenny ass）",
        "unit": 9,
        "example": "[n.] Jenny completed her medical degree with highest honors.",
        "exampleZh": "珍妮以最高榮譽完成了她的醫學學位。"
    },
    {
        "en": "mozambique",
        "kk": "[͵moʊzæmˋbik]",
        "uk": "/ˌməʊzæmˈbiːk/",
        "zh": "n. 莫三比克（非洲東南部國家，首都馬普托）",
        "unit": 9,
        "example": "[n.] Mozambique is famous for its beautiful coastal wildlife reserves.",
        "exampleZh": "莫三比克以其美麗的沿海野生動物保護區而聞名。"
    },
    {
        "en": "speciality",
        "kk": "[͵speʃiˋæləti]",
        "uk": "/ˌspeʃiˈæləti/",
        "zh": "n. 特色菜、特產、專業、專長（美作 specialty）",
        "unit": 9,
        "example": "[n.] The chef introduced his signature speciality to the dinner guests.",
        "exampleZh": "主廚向晚餐賓客介紹了他的招牌特色菜。"
    },
    {
        "en": "escapement",
        "kk": "[ɪˋskeɪpmənt]",
        "uk": "/ɪˈskeɪpmənt/",
        "zh": "n. 擒縱機構、擒縱器（鐘錶的核心節拍控制裝置）",
        "unit": 9,
        "example": "[n.] The antique clock stopped ticking because its delicate escapement was worn out.",
        "exampleZh": "那座古董鐘停止了滴答聲，因為它精密的擒縱機構已經磨損了。"
    },
    {
        "en": "george",
        "kk": "[dʒɔrdʒ]",
        "uk": "/dʒɔːdʒ/",
        "zh": "n. 喬治（男子名）",
        "unit": 9,
        "example": "[n.] George decided to pursue a new career in software engineering.",
        "exampleZh": "喬治決定在軟體工程領域開創新的職業生涯。"
    },
    {
        "en": "funky",
        "kk": "[ˋfʌŋki]",
        "uk": "/ˈfʌŋki/",
        "zh": "adj. 時髦別緻的、有強烈節奏感的、奇特的",
        "unit": 9,
        "example": "[adj.] The designer created a funky jacket decorated with colorful patterns.",
        "exampleZh": "設計師打造了一件裝飾有鮮豔圖案的時髦別緻外套。"
    },
    {
        "en": "masticated",
        "kk": "[ˋmæstɪkeɪtɪd]",
        "uk": "/ˈmæstɪkeɪtɪd/",
        "zh": "v. 咀嚼、細嚼慢嚥（masticate 之過去式與過去分詞）",
        "unit": 9,
        "example": "[v.] The patient slowly masticated his food to aid healthy digestion.",
        "exampleZh": "病人慢慢咀嚼食物以幫助健康消化。"
    },
    {
        "en": "fraught",
        "kk": "[frɔt]",
        "uk": "/frɔːt/",
        "zh": "adj. 充滿（危險或憂慮）的、令人焦慮不安的",
        "unit": 9,
        "example": "[adj.] The peace negotiations were fraught with difficulties from the start.",
        "exampleZh": "和平談判從一開始就充滿了重重困難。"
    },
    {
        "en": "ouch",
        "kk": "[aʊtʃ]",
        "uk": "/aʊtʃ/",
        "zh": "int. 哎喲（突然疼痛時發出的叫聲）",
        "unit": 9,
        "example": "[int.] Ouch! I accidentally bumped my knee against the coffee table.",
        "exampleZh": "哎喲！我的膝蓋不小心撞到了咖啡桌。"
    },
    {
        "en": "trod",
        "kk": "[trɑd]",
        "uk": "/trɒd/",
        "zh": "v. 踩、踐踏、行走（tread 之過去式與過去分詞）",
        "unit": 9,
        "example": "[v.] The weary travelers trod silently along the snowy mountain path.",
        "exampleZh": "疲憊的旅人沿著白雪皚皚的山徑默默前行。"
    },
    {
        "en": "anymore",
        "kk": "[͵eniˋmɔr]",
        "uk": "/ˌeniˈmɔː/",
        "zh": "adv. （不）再、再也（不）",
        "unit": 9,
        "example": "[adv.] He does not work for the advertising company anymore.",
        "exampleZh": "他已經不再為那家廣告公司工作了。"
    },
    {
        "en": "extruded",
        "kk": "[ɪkˋstrudɪd]",
        "uk": "/ɪkˈstruːdɪd/",
        "zh": "adj. 擠壓成型的；v. 擠出、壓出（extrude 之過去式與過去分詞）",
        "unit": 9,
        "example": "[adj.] The factory specializes in manufacturing extruded aluminum frames.",
        "exampleZh": "該工廠專門製造擠壓成型的鋁合金框架。"
    },
    {
        "en": "bliss",
        "kk": "[blɪs]",
        "uk": "/blɪs/",
        "zh": "n. 極樂、無上的幸福、福氣",
        "unit": 9,
        "example": "[n.] Sitting on the quiet beach at sunset was pure bliss.",
        "exampleZh": "在日落時分坐在寧靜的海灘上是純粹的幸福。"
    },
    {
        "en": "graphite",
        "kk": "[ˋɡræfaɪt]",
        "uk": "/ˈɡræfaɪt/",
        "zh": "n. 石墨、黑鉛",
        "unit": 9,
        "example": "[n.] Modern tennis rackets are often reinforced with strong graphite fibers.",
        "exampleZh": "現代網球拍通常以高強度的石墨纖維進行加固。"
    },
    {
        "en": "animations",
        "kk": "[͵ænɪˋmeɪʃnz]",
        "uk": "/ˌænɪˈmeɪʃnz/",
        "zh": "n. 動畫片、動畫效果（animation 之複數）",
        "unit": 9,
        "example": "[n.] The graphic studio produced colorful animations for the mobile game.",
        "exampleZh": "這家圖像工作室為該手機遊戲製作了生動鮮豔的動畫。"
    },
    {
        "en": "evolutionary",
        "kk": "[͵evəˋluʃəneri]",
        "uk": "/ˌiːvəˈluːʃnri/",
        "zh": "adj. 進化的、演變的、漸進發展的",
        "unit": 9,
        "example": "[adj.] The fossil discovery provided crucial evolutionary evidence of early bird species.",
        "exampleZh": "這塊化石的發現為早期鳥類物種提供了關鍵的演化證據。"
    },
    {
        "en": "manchurian",
        "kk": "[mænˋtʃʊriən]",
        "uk": "/mænˈtʃʊəriən/",
        "zh": "adj. 中國東北的、滿洲的；n. 東北人、滿洲人",
        "unit": 9,
        "example": "[adj.] Visitors can observe the rare Manchurian tiger in the protected reserve.",
        "exampleZh": "遊客可以在保護區內觀察珍稀的東北虎。"
    },
    {
        "en": "supplied",
        "kk": "[səˋplaɪd]",
        "uk": "/səˈplaɪd/",
        "zh": "adj. 配備充足的；v. 提供、供應（supply 之過去式與過去分詞）",
        "unit": 9,
        "example": "[v.] The medical center supplied clean drinking water and bandages to refugees.",
        "exampleZh": "醫療中心向難民提供了乾淨的飲用水和繃帶。"
    },
    {
        "en": "omniscient",
        "kk": "[ɑmˋnɪʃənt]",
        "uk": "/ɒmˈnɪsiənt/",
        "zh": "adj. 全知的、無所不知的；n. 無所不知者、上帝",
        "unit": 9,
        "example": "[adj.] The classic novel is narrated from the perspective of an omniscient storyteller.",
        "exampleZh": "這部經典小說是從一位全知敘述者的視角展開講述的。"
    },
    {
        "en": "overestimate",
        "kk": "[͵oʊvərˋestɪmeɪt]",
        "uk": "/ˌəʊvərˈestɪmeɪt/",
        "zh": "v. 高估、過高估計；n. 過高的估計",
        "unit": 9,
        "example": "[v.] Do not overestimate your stamina when hiking steep mountain trails.",
        "exampleZh": "在攀登陡峭山路時，不要高估自己的體力。"
    },
    {
        "en": "japanese",
        "kk": "[͵dʒæpəˋniz]",
        "uk": "/ˌdʒæpəˈniːz/",
        "zh": "adj. 日本的、日語的；n. 日本人、日語",
        "unit": 9,
        "example": "[adj.] She enjoys traditional Japanese green tea and handmade pottery.",
        "exampleZh": "她喜歡傳統的日本綠茶和手工陶器。"
    },
    {
        "en": "cooties",
        "kk": "[ˋkutiz]",
        "uk": "/ˈkuːtiz/",
        "zh": "n. （兒童玩笑用語）假想病菌、髒東西；蝨子",
        "unit": 9,
        "example": "[n.] The playful school children teased that the old playground bench had cooties.",
        "exampleZh": "愛玩鬧的小學生開玩笑說操場的老舊長凳上有髒細菌。"
    },
    {
        "en": "shedloads",
        "kk": "[ˋʃɛdˌlodz]",
        "uk": "/ˈʃedləʊdz/",
        "zh": "n. 大量、成堆、許多（shedload 之複數）",
        "unit": 9,
        "example": "[n.] The successful viral campaign generated shedloads of positive customer feedback.",
        "exampleZh": "這場成功的網路宣傳活動引來了成堆的顧客正面反饋。"
    },
    {
        "en": "australian",
        "kk": "[ɔˋstreɪliən]",
        "uk": "/ɒˈstreɪliən/",
        "zh": "adj. 澳洲的、澳洲人的；n. 澳洲人",
        "unit": 9,
        "example": "[adj.] The kangaroo is an iconic Australian animal found across the country.",
        "exampleZh": "袋鼠是遍布全澳洲的代表性動物。"
    },
    {
        "en": "decree",
        "kk": "[dɪˋkri]",
        "uk": "/dɪˈkriː/",
        "zh": "n. 法令、政令、裁定；v. 頒布、判決",
        "unit": 9,
        "example": "[n.] The government issued an official decree to protect coastal marine habitats.",
        "exampleZh": "政府頒布了一項官方法令以保護沿海海洋棲息地。"
    },
    {
        "en": "fiji",
        "kk": "[ˋfidʒi]",
        "uk": "/ˈfiːdʒiː/",
        "zh": "n. 斐濟（南太平洋島國，首都蘇瓦）",
        "unit": 9,
        "example": "[n.] Fiji is world-famous for its crystal-clear waters and coral reefs.",
        "exampleZh": "斐濟以其清澈見底的海水和珊瑚礁聞名於世。"
    },
    {
        "en": "redeemed",
        "kk": "[rɪˋdimd]",
        "uk": "/rɪˈdiːmd/",
        "zh": "adj. 已兌現的、被救贖的；v. 贖回、兌現、挽回（redeem 之過去式與過去分詞）",
        "unit": 9,
        "example": "[v.] He redeemed his shopping reward vouchers at the supermarket checkout.",
        "exampleZh": "他在超市結帳時兌換了購物獎勵禮券。"
    },
    {
        "en": "called",
        "kk": "[kɔld]",
        "uk": "/kɔːld/",
        "zh": "adj. 被稱為…的、名叫…的；v. 打電話、稱呼、呼叫（call 之過去式與過去分詞）",
        "unit": 9,
        "example": "[adj.] A friendly software engineer called David helped us solve the technical issue.",
        "exampleZh": "一位名叫戴維的和藹軟體工程師幫助我們解決了技術問題。"
    },
    {
        "en": "words",
        "kk": "[wɝdz]",
        "uk": "/wɜːdz/",
        "zh": "n. 言詞、話語；台詞、歌詞、爭吵（word 之複數）",
        "unit": 9,
        "example": "[n.] Her encouraging words inspired the entire team to keep moving forward.",
        "exampleZh": "她鼓舞人心的話語激勵了整個團隊繼續前進。"
    },
    {
        "en": "consumers",
        "kk": "[kənˋsjumɚz]",
        "uk": "/kənˈsjuːməz/",
        "zh": "n. 消費者、顧客、用戶（consumer 之複數）",
        "unit": 9,
        "example": "[n.] Modern consumers demand higher transparency regarding food ingredients.",
        "exampleZh": "現代消費者對食品成分的要求具有更高的透明度。"
    }
]

def clean_zh_for_tts(zh_str):
    if not zh_str:
        return ''
    s = re.sub(r'[\(（][^\)）]*[\)）]', '', zh_str)
    s = re.sub(r'(?:^|[；;、,\s])(?:[a-zA-Z./]+)\.\s*', ' ', s)
    s = re.sub(r'^[a-zA-Z./\s]+', '', s)
    s = re.sub(r'[/;；、~]+', '，', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip(' ，,;；、.')

def clean_example_for_tts(ex_str):
    if not ex_str:
        return ''
    return re.sub(r'^\[[^\]]+\]\s*', '', ex_str).strip()

async def generate_audio_file(text, voice, out_path, sem):
    if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
        return True
    async with sem:
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(text, voice)
                await comm.save(out_path)
                if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
                    return True
            except Exception as e:
                await asyncio.sleep(0.5 * (attempt + 1))
        return False

async def main():
    print("=== Step 1: Ingesting 38 words into examples_unit9_data.js ===")
    u9_path = "examples_unit9_data.js"
    with open(u9_path, "r", encoding="utf-8") as f:
        code = f.read()
    
    m = re.search(r'const\s+examplesUnit9WordsDB\s*=\s*(\[[\s\S]*?\]);\s*$', code)
    if not m:
        print("Error: Could not parse examplesUnit9WordsDB!")
        return
    
    existing_list = json.loads(m.group(1))
    max_id = max(item["id"] for item in existing_list)
    print(f"Current list size: {len(existing_list)}, max_id: {max_id}")
    
    # Check if words already appended
    existing_ens = set(item["en"].lower() for item in existing_list)
    start_id = max_id + 1
    
    assigned_items = []
    for item in NEW_38_WORDS:
        item_copy = dict(item)
        item_copy["id"] = start_id
        start_id += 1
        assigned_items.append(item_copy)
    
    combined_list = existing_list + assigned_items
    print(f"New total size: {len(combined_list)} (appended {len(assigned_items)} words, IDs {assigned_items[0]['id']} ~ {assigned_items[-1]['id']})")
    
    header_m = re.match(r'^(\/\*\*[\s\S]*?\*\/)\s*const examplesUnit9WordsDB =', code)
    header = header_m.group(1) + "\n" if header_m else "/**\n * 高中 7000 單字擴充單元 - 例句實戰高頻詞庫\n */\n"
    with open(u9_path, "w", encoding="utf-8") as f:
        f.write(f"{header}const examplesUnit9WordsDB = {json.dumps(combined_list, ensure_ascii=False, indent=2)};\n")
    print("Saved updated examples_unit9_data.js successfully.")
    
    print("\n=== Step 2: Register UK Phonetics in uk_phonetics_manifest.js ===")
    uk_manifest_path = "uk_phonetics_manifest.js"
    with open(uk_manifest_path, "r", encoding="utf-8") as f:
        uk_code = f.read()
    
    for it in assigned_items:
        en = it["en"].lower()
        uk = it["uk"]
        pattern = rf"window\.UK_PHONETICS_MANIFEST\['{re.escape(en)}'\]\s*="
        if not re.search(pattern, uk_code):
            uk_code = uk_code.rstrip() + f"\nwindow.UK_PHONETICS_MANIFEST['{en}'] = \"{uk}\";\n"
    
    with open(uk_manifest_path, "w", encoding="utf-8") as f:
        f.write(uk_code)
    print("uk_phonetics_manifest.js updated.")

    print("\n=== Step 3: Generating Neural Audio Files with edge-tts ===")
    os.makedirs(os.path.join("audio", "words", "us"), exist_ok=True)
    os.makedirs(os.path.join("audio", "words", "uk"), exist_ok=True)
    os.makedirs(os.path.join("audio", "examples"), exist_ok=True)
    os.makedirs(os.path.join("audio", "zh"), exist_ok=True)
    
    sem = asyncio.Semaphore(10)
    tasks = []
    
    for it in assigned_items:
        en = it["en"]
        wid = it["id"]
        ex_text = clean_example_for_tts(it["example"])
        zh_text = clean_zh_for_tts(it["zh"])
        
        # 1. Word US
        tasks.append((f"word_us_{en}", generate_audio_file(en, US_VOICE, os.path.join("audio", "words", "us", f"{en}.mp3"), sem)))
        # 2. Word UK
        tasks.append((f"word_uk_{en}", generate_audio_file(en, UK_VOICE, os.path.join("audio", "words", "uk", f"{en}.mp3"), sem)))
        # 3. Example
        tasks.append((f"ex_{wid}", generate_audio_file(ex_text, US_VOICE, os.path.join("audio", "examples", f"{wid}.mp3"), sem)))
        # 4. Zh
        tasks.append((f"zh_{wid}", generate_audio_file(zh_text, ZH_VOICE, os.path.join("audio", "zh", f"{wid}.mp3"), sem)))
    
    print(f"Total audio tracks to generate: {len(tasks)} (4 tracks * 38 words)")
    results = await asyncio.gather(*[t[1] for t in tasks])
    success_count = sum(1 for r in results if r)
    print(f"Audio generation completed: {success_count}/{len(tasks)} successful.")

    print("\n=== Step 4: Updating Audio Manifests ===")
    # 4A: Words Audio Manifest
    words_manifest_path = "words_audio_manifest.js"
    with open(words_manifest_path, "r", encoding="utf-8") as f:
        wm_code = f.read()
    
    wm_set = set(re.findall(r"'([^']+)'", wm_code))
    for it in assigned_items:
        wm_set.add(it["en"].lower())
    
    sorted_words = sorted(list(wm_set))
    with open(words_manifest_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated offline words audio manifest\nwindow.WORDS_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(sorted_words), 20):
            chunk = sorted_words[i:i+20]
            f.write("  " + ", ".join(f"'{w}'" for w in chunk) + ",\n")
        f.write("]);\n")
    print(f"words_audio_manifest.js updated ({len(sorted_words)} words total).")

    # 4B: Examples Audio Manifest
    ex_manifest_path = "examples_audio_manifest.js"
    with open(ex_manifest_path, "r", encoding="utf-8") as f:
        em_code = f.read()
    em_set = set(map(int, re.findall(r"\b\d+\b", em_code)))
    for it in assigned_items:
        em_set.add(it["id"])
    sorted_ex_ids = sorted(list(em_set))
    with open(ex_manifest_path, "w", encoding="utf-8") as f:
        f.write("// 自動產生的 Edge-TTS 例句真人音檔清單 (ID 集合)\nwindow.EXAMPLES_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(sorted_ex_ids), 25):
            chunk = sorted_ex_ids[i:i+25]
            f.write("  " + ", ".join(map(str, chunk)) + ",\n")
        f.write("]);\n")
    print(f"examples_audio_manifest.js updated ({len(sorted_ex_ids)} IDs total).")

    # 4C: Zh Audio Manifest
    zh_manifest_path = "zh_audio_manifest.js"
    with open(zh_manifest_path, "r", encoding="utf-8") as f:
        zm_code = f.read()
    zm_set = set(map(int, re.findall(r"\b\d+\b", zm_code)))
    for it in assigned_items:
        zm_set.add(it["id"])
    sorted_zh_ids = sorted(list(zm_set))
    with open(zh_manifest_path, "w", encoding="utf-8") as f:
        f.write("// Edge-TTS zh manifest\nwindow.ZH_AUDIO_MANIFEST = new Set([\n")
        for i in range(0, len(sorted_zh_ids), 25):
            chunk = sorted_zh_ids[i:i+25]
            f.write("  " + ", ".join(map(str, chunk)) + ",\n")
        f.write("]);\n")
    print(f"zh_audio_manifest.js updated ({len(sorted_zh_ids)} IDs total).")

    print("\n=== SOP Process Completed! ===")

if __name__ == "__main__":
    asyncio.run(main())
