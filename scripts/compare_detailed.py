import json, re

with open('words_data.js', 'r', encoding='utf-8') as f:
    hs_words = json.loads(re.search(r'const\s+externalVocabularyDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

with open('jh_data.js', 'r', encoding='utf-8') as f:
    jh_words = json.loads(re.search(r'const\s+jhWordsDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

hs_by_en = {w['en'].lower().strip(): w for w in hs_words}
jh_by_id = {w['id']: w for w in jh_words}

with open('JH_Vocabulary_Correction_Report.md.txt', 'r', encoding='utf-8') as f:
    text = f.read()

items = re.findall(r'\*\s*(\d{5})\s+([a-zA-Z\.\-]+)', text)

print("Comparison of JH items with HS (words_data.js):")
for jid_s, en in items:
    jid = int(jid_s)
    jw = jh_by_id.get(jid)
    hw = hs_by_en.get(en.lower())
    if hw:
        zh_same = (jw.get('zh') == hw.get('zh'))
        ex_same = (jw.get('example') == hw.get('example'))
        print(f"[{jid}] {en:12s} | HS ID {hw['id']:4d} | zh_same={zh_same} | ex_same={ex_same}")
        if not zh_same:
            print(f"    JH zh: {jw.get('zh')}")
            print(f"    HS zh: {hw.get('zh')}")
        if not ex_same:
            print(f"    JH ex: {jw.get('example')}")
            print(f"    HS ex: {hw.get('example')}")
    else:
        print(f"[{jid}] {en:12s} | NOT IN HS! JH zh: {jw.get('zh')}")
