import json, re

with open('words_data.js', 'r', encoding='utf-8') as f:
    hs_words = json.loads(re.search(r'const\s+externalVocabularyDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

with open('jh_data.js', 'r', encoding='utf-8') as f:
    jh_words = json.loads(re.search(r'const\s+jhWordsDB\s*=\s*(\[[\s\S]*\]);?', f.read()).group(1))

hs_by_en = {w['en'].lower().strip(): w for w in hs_words}
jh_by_id = {w['id']: w for w in jh_words}

with open('JH_Vocabulary_Correction_Report.md.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Match items like "* 30297 chopstick (筷子)："
items = re.findall(r'\*\s*(\d{5})\s+([a-zA-Z\.\-]+)', text)
print(f"Total extracted report items: {len(items)}")

in_hs = 0
not_in_hs = 0

analysis_rows = []

for jid_s, en in items:
    jid = int(jid_s)
    jw = jh_by_id.get(jid)
    hw = hs_by_en.get(en.lower())
    if hw:
        in_hs += 1
        analysis_rows.append({
            'jid': jid,
            'en': en,
            'in_hs': True,
            'hs_id': hw['id'],
            'hs_zh': hw['zh'],
            'hs_example': hw.get('example', ''),
            'hs_exampleZh': hw.get('exampleZh', ''),
            'jh_zh': jw.get('zh', '') if jw else '',
            'jh_example': jw.get('example', '') if jw else '',
            'jh_exampleZh': jw.get('exampleZh', '') if jw else ''
        })
    else:
        not_in_hs += 1
        analysis_rows.append({
            'jid': jid,
            'en': en,
            'in_hs': False,
            'jh_zh': jw.get('zh', '') if jw else '',
            'jh_example': jw.get('example', '') if jw else '',
            'jh_exampleZh': jw.get('exampleZh', '') if jw else ''
        })

print(f"Items in HS: {in_hs}, Items NOT in HS: {not_in_hs}")

# Print items not in HS
print("\nItems NOT in HS:")
for r in analysis_rows:
    if not r['in_hs']:
        print(f"  ID {r['jid']} ({r['en']}) - JH only")
