import json
import requests
from bs4 import BeautifulSoup
import concurrent.futures
import time

with open('temp_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Identify words missing info
missing = []
for i, w in enumerate(db):
    # Only try to fetch if missing kk, zh, or example
    if not w.get('kk') or not w.get('zh') or not w.get('example'):
        missing.append((i, w['en']))

def fetch_info(word):
    url = f"https://tw.dictionary.search.yahoo.com/search?p={word}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    try:
        r = requests.get(url, headers=headers, timeout=5)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # KK
        kk = ""
        kk_elem = soup.find('span', text=lambda t: t and 'KK' in t)
        if not kk_elem:
            # try to find the pronunciation element
            kk_elem = soup.select_one('.compList ul li span.fz-14')
        if kk_elem:
            kk = kk_elem.text.replace('KK', '').strip()
            
        # Translation
        zh = ""
        trans_elems = soup.select('.compList ul li .fz-14, .compTitle .fz-16')
        for el in trans_elems:
            if any(c >= '\u4e00' and c <= '\u9fff' for c in el.text): # Contains Chinese
                zh += el.text.strip() + " "
                
        # Example
        example = ""
        exampleZh = ""
        example_en_elem = soup.select_one('.compArticleList .fc-2nd')
        if example_en_elem:
            example = example_en_elem.text.strip()
            # The next sibling usually has the Chinese translation of the example
            next_div = example_en_elem.find_next_sibling('div')
            if next_div:
                exampleZh = next_div.text.strip()
                
        return word, kk, zh.strip(), example, exampleZh
    except Exception as e:
        return word, "", "", "", ""

print(f"Crawling {len(missing)} words...")

# ThreadPool for fast crawling
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(fetch_info, m[1]): m[0] for m in missing}
    count = 0
    for future in concurrent.futures.as_completed(futures):
        idx = futures[future]
        word, kk, zh, ex, ex_zh = future.result()
        
        # update DB
        if not db[idx].get('kk') and kk: db[idx]['kk'] = kk
        if not db[idx].get('zh') and zh: db[idx]['zh'] = zh
        if not db[idx].get('example') and ex: 
            db[idx]['example'] = ex
            db[idx]['exampleZh'] = ex_zh
            
        count += 1
        if count % 50 == 0:
            print(f"Processed {count}/{len(missing)}")

with open('temp_db_updated.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, ensure_ascii=False, indent=2)

print("Finished crawling.")
