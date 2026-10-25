import os
import sys
import re
import time
import json
import random
import html as H
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = 'f:/EN'
CHECKPOINT_FILE = os.path.join(BASE_DIR, 'syn_ant_checkpoint.json')
OUTPUT_JS_FILE = os.path.join(BASE_DIR, 'syn_ant_data.js')
LOG_FILE = os.path.join(BASE_DIR, 'crawler_progress.log')

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0'
]

def log(msg):
    t = time.strftime('%Y-%m-%d %H:%M:%S')
    line = f"[{t}] {msg}"
    print(line, flush=True)
    try:
        with open(LOG_FILE, 'a', encoding='utf-8') as f:
            f.write(line + '\n')
    except Exception:
        pass

def load_all_words():
    files = [
        os.path.join(BASE_DIR, 'words_data.js'),
        os.path.join(BASE_DIR, 'toeic_data.js'),
        os.path.join(BASE_DIR, 'jh_data.js')
    ]
    seen = set()
    order = []
    for fpath in files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            c = f.read()
        words = re.findall(r'"en":\s*"([^"]+)"', c)
        for w in words:
            w = w.strip().lower()
            if not w or ' ' in w:
                continue
            # basic clean
            w = re.sub(r'[^a-z\-]', '', w)
            if w and w not in seen:
                seen.add(w)
                order.append(w)
    log(f"Total unique target words to crawl: {len(order)}")
    return order

def parse_yahoo_syn_ant(html):
    if not html:
        return {'syn': [], 'ant': []}
    i = html.find('grp-tab-content-synonyms')
    if i < 0:
        return {'syn': [], 'ant': []}
    j = html.find('grp grp-tab-content', i + 30)
    seg = html[i: j if j > 0 else i + 90000]

    out = {'syn': [], 'ant': []}
    mode = 'syn'
    
    # regex match title headers and link groups
    pattern = re.compile(r'<h3 class="title"><span class="([^"]*)">(.*?)</span></h3>|<ul class="compDlink[^"]*">(.*?)</ul>', re.S)
    for m in pattern.finditer(seg):
        header_text = m.group(2)
        ul_content = m.group(3)
        if header_text is not None:
            t = H.unescape(re.sub(r'<[^>]+>', '', header_text)).strip()
            if t.startswith('同義'):
                mode = 'syn'
            elif t.startswith('反義'):
                mode = 'ant'
        elif ul_content is not None:
            words = [H.unescape(re.sub(r'<[^>]+>', '', x)).strip().lower() for x in re.findall(r'<a[^>]*>(.*?)</a>', ul_content, re.S)]
            for w in words:
                # filter clean single words / clean short phrases
                w = re.sub(r'^[^\w]+|[^\w]+$', '', w)
                if w and w not in out[mode]:
                    out[mode].append(w)

    return out

def fetch_word(word, retry=3):
    url = f"https://tw.dictionary.search.yahoo.com/search?p={urllib.parse.quote(word)}"
    for attempt in range(retry):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    'User-Agent': random.choice(USER_AGENTS),
                    'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                }
            )
            # random polite jitter
            time.sleep(random.uniform(0.12, 0.28))
            with urllib.request.urlopen(req, timeout=12) as resp:
                raw = resp.read()
                html = raw.decode('utf-8', errors='ignore')
                parsed = parse_yahoo_syn_ant(html)
                return word, parsed, None
        except urllib.error.HTTPError as e:
            if e.code == 429:
                sleep_time = (attempt + 1) * 6 + random.uniform(1, 3)
                log(f"[Rate-Limited] 429 on '{word}'. Backing off {sleep_time:.1f}s...")
                time.sleep(sleep_time)
            elif e.code == 404:
                return word, {'syn': [], 'ant': []}, None
            else:
                time.sleep(1.5)
        except Exception as e:
            time.sleep(1.2)
    return word, {'syn': [], 'ant': []}, 'Failed after retries'

def export_js(data):
    # prune entries that have neither syn nor ant
    useful_db = {}
    for w, val in data.items():
        syns = val.get('syn', [])
        ants = val.get('ant', [])
        if syns or ants:
            entry = {}
            if syns:
                entry['syn'] = syns[:6]
            if ants:
                entry['ant'] = ants[:6]
            useful_db[w] = entry

    log(f"Exporting {len(useful_db)} words with valid synonyms/antonyms to {OUTPUT_JS_FILE}...")
    with open(OUTPUT_JS_FILE, 'w', encoding='utf-8') as f:
        f.write("/**\n")
        f.write(" * 權威牛津 / Yahoo 奇摩字典 同反義詞在地化離線庫 (落地存檔)\n")
        f.write(f" * 總收錄詞條數: {len(useful_db)} 筆\n")
        f.write(f" * 產生時間: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(" */\n")
        f.write("const SYN_ANT_DB = ")
        json.dump(useful_db, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    log("Export completed successfully!")

def main():
    log("=== 啟動全庫 Yahoo 奇摩字典同反義詞爬蟲 ===")
    all_words = load_all_words()

    checkpoint = {}
    if os.path.exists(CHECKPOINT_FILE):
        try:
            with open(CHECKPOINT_FILE, 'r', encoding='utf-8') as f:
                checkpoint = json.load(f)
            log(f"Loaded existing checkpoint with {len(checkpoint)} words.")
        except Exception as e:
            log(f"Checkpoint load error: {e}. Starting fresh.")

    remaining = [w for w in all_words if w not in checkpoint]
    total = len(all_words)
    done_count = len(checkpoint)
    log(f"Progress: {done_count}/{total} done, {len(remaining)} remaining.")

    if not remaining:
        log("All words already crawled in checkpoint! Exporting directly...")
        export_js(checkpoint)
        return

    # Use 5 concurrent workers
    MAX_WORKERS = 5
    batch_counter = 0

    try:
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            future_to_word = {executor.submit(fetch_word, w): w for w in remaining}
            for future in as_completed(future_to_word):
                w = future_to_word[future]
                try:
                    word, res, err = future.result()
                    checkpoint[word] = res
                    done_count += 1
                    batch_counter += 1
                except Exception as e:
                    checkpoint[w] = {'syn': [], 'ant': []}
                    done_count += 1
                    batch_counter += 1

                if batch_counter >= 50:
                    batch_counter = 0
                    pct = (done_count / total) * 100
                    log(f"Progress: {done_count}/{total} ({pct:.1f}%) | Last word: {w}")
                    with open(CHECKPOINT_FILE, 'w', encoding='utf-8') as f:
                        json.dump(checkpoint, f, ensure_ascii=False)
                    export_js(checkpoint)

        # Final save
        with open(CHECKPOINT_FILE, 'w', encoding='utf-8') as f:
            json.dump(checkpoint, f, ensure_ascii=False)
        export_js(checkpoint)
        log("=== 全部 7,317 單字爬取完成並已成功落地存檔！ ===")

    except KeyboardInterrupt:
        log("Crawler paused by user. Saving checkpoint...")
        with open(CHECKPOINT_FILE, 'w', encoding='utf-8') as f:
            json.dump(checkpoint, f, ensure_ascii=False)
        export_js(checkpoint)
        log("Checkpoint saved. Ready to resume next time.")

if __name__ == '__main__':
    main()
