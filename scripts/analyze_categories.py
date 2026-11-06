import json, re

with open('words_data.js', 'r', encoding='utf-8') as f:
    hs_words = json.loads(re.search(r'const\s+externalVocabularyDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

with open('jh_data.js', 'r', encoding='utf-8') as f:
    jh_words = json.loads(re.search(r'const\s+jhWordsDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

hs_by_en = {w['en'].lower().strip(): w for w in hs_words}
jh_by_id = {w['id']: w for w in jh_words}

with open('JH_Vocabulary_Correction_Report.md.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = text.split('________________')

for sec_idx, sec in enumerate(sections):
    lines = [l.strip() for l in sec.strip().split('\n') if l.strip()]
    header = lines[0] if lines else f"Section {sec_idx}"
    print(f"\n==================== {header} ====================")
    
    items = re.findall(r'\*\s*(\d{5})\s+([a-zA-Z\.\-]+)', sec)
    for jid_s, en in items:
        jid = int(jid_s)
        jw = jh_by_id.get(jid)
        hw = hs_by_en.get(en.lower())
        
        in_hs = hw is not None
        if in_hs:
            # Check if HS has pollution
            hs_has_slang_or_noise = False
            # Check keywords from report
            keywords = ['性交', '性關係', '陰莖', '陽物', '大麻', '興奮劑', '老色鬼', '上床', '粗俗稱呼',
                        '火項鍊', '皮扎', '烹呼叫油', '不列顛之戰', '艾滋病', '申初經', '俄勒岡州', '巨蟹宮', 'WORM',
                        '空旅通俗讀物', '電梯梯廂', '感恩禮拜', '短禱文', '應得的賞罰', '鯕鰍', '發動機', '環形室',
                        '暴跌', '選民', '圖畫紙', '具有流線型', '發現狐狸', '接合板', '加褶邊', '褲門襟', '線圈架',
                        '免費郵寄權', '法國佬', '電刑', '蛆', '代人寫作', '啤酒杯打', '程式碼', '鷹嘴豆', '戈瑞',
                        '搭便車', '支索', '道袍', '無線通訊', '絞刑', '執政者', '招致', '此外還有', '書皮',
                        '擦網球', '校運動隊', '紙幣', '洞穴', '流音', '狠狠地打', '告密', '上當受騙的人',
                        '平底鞋', '狼吞虎嚥', '車輛頂部', '作弊', '紅葡萄酒', '盾形徽章', '失敗之作', '植物人', '上風']
            matched_kw = [kw for kw in keywords if kw in hw['zh']]
            print(f"- [{en}] (JH ID {jid} / HS ID {hw['id']}):")
            print(f"    高中目前：{hw['zh']}")
            if matched_kw:
                print(f"    ⚠️ 高中亦殘留冷僻/污染詞：{matched_kw}")
            else:
                print(f"    ✅ 高中已是乾淨規範釋義")
        else:
            print(f"- [{en}] (JH ID {jid}): ❌ 高中無此單字 (國中專有)")
