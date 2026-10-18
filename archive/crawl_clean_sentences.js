const fs = require('fs');

const CACHE_FILE = 'clean_sentences_cache.json';
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
const saveCache = () => fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// 從 Youdao 牛津/柯林斯挑選最佳短例句
async function fetchYoudao(word) {
    try {
        const cleanWord = word.trim().toLowerCase();
        const res = await fetch(`https://dict.youdao.com/jsonapi?q=${encodeURIComponent(cleanWord)}`, { signal: AbortSignal.timeout(8000) });
        if (!res.ok) return null;
        const data = await res.json();
        const sents = [];
        const re = new RegExp('\\b' + cleanWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(s|es|ed|d|ing|ly)?\\b', 'i');

        if (data.blng_sents_part && data.blng_sents_part['sentence-pair']) {
            for (const item of data.blng_sents_part['sentence-pair']) {
                const raw = item.sentence ? item.sentence.replace(/<[^>]*>/g, '').trim() : '';
                const wordCount = raw.split(/\s+/).length;
                const isDict = item.source && (item.source.includes('词典') || item.source.includes('柯林斯') || item.source.includes('牛津'));
                const hasQuote = raw.includes('"') || raw.includes('“') || raw.includes('”') || raw.includes('\'\'');
                
                if (raw && wordCount >= 4 && wordCount <= 11 && re.test(raw) && /[.?!]$/.test(raw) && !hasQuote) {
                    let score = 0;
                    if (isDict) score += 6;
                    if (wordCount >= 5 && wordCount <= 8) score += 3;
                    if (!raw.includes(';')) score += 1;
                    sents.push({ en: raw, wordCount, score });
                }
            }
        }
        if (sents.length > 0) {
            sents.sort((a, b) => b.score - a.score || a.wordCount - b.wordCount);
            return sents[0].en;
        }
    } catch(e) {}
    return null;
}

// 備選 Tatoeba
async function fetchTatoeba(word) {
    try {
        const cleanWord = word.trim().toLowerCase();
        const res = await fetch(`https://tatoeba.org/en/api_v0/search?from=eng&sort=relevance&unapproved=no&orphans=no&word_count_max=10&query=${encodeURIComponent('"' + cleanWord + '"')}`, { signal: AbortSignal.timeout(8000) });
        if (!res.ok) return null;
        const data = await res.json();
        const re = new RegExp('\\b' + cleanWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(s|es|ed|d|ing|ly)?\\b', 'i');
        const cands = (data.results || []).map(x => x.text).filter(t => {
            const wc = t.split(/\s+/).length;
            return wc >= 4 && wc <= 10 && re.test(t) && /[.?!]$/.test(t) && !t.includes('"') && !t.includes('\n');
        });
        if (cands.length > 0) {
            cands.sort((a, b) => a.length - b.length);
            return cands[0];
        }
    } catch(e) {}
    return null;
}

// 備選 Google Translate dt=ex
async function fetchGoogleEx(word) {
    try {
        const cleanWord = word.trim().toLowerCase();
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=ex&q=${encodeURIComponent(cleanWord)}`, { signal: AbortSignal.timeout(8000) });
        if (!res.ok) return null;
        const data = await res.json();
        if (data[13] && data[13][0] && data[13][0][0] && data[13][0][0][0]) {
            let ex = data[13][0][0][0].replace(/<[^>]*>?/gm, '').trim();
            const wc = ex.split(/\s+/).length;
            if (wc >= 4 && wc <= 11) {
                if (!/[.?!]$/.test(ex)) ex += '.';
                return ex;
            }
        }
    } catch(e) {}
    return null;
}

// 翻譯為繁體中文
async function translateToZh(en) {
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(en)}`, { signal: AbortSignal.timeout(8000) });
            if (res.ok) {
                const data = await res.json();
                if (data && data[0]) {
                    return data[0].map(x => x[0]).join('').trim();
                }
            }
        } catch(e) {
            await sleep(500 * (attempt + 1));
        }
    }
    return '';
}

async function processWord(word) {
    if (word in cache && cache[word] && cache[word].ex) {
        return;
    }
    
    let ex = await fetchYoudao(word);
    if (!ex) ex = await fetchTatoeba(word);
    if (!ex) ex = await fetchGoogleEx(word);
    
    if (ex) {
        const exZh = await translateToZh(ex);
        cache[word] = { ex, exZh };
    } else {
        cache[word] = { ex: '', exZh: '' };
    }
}

async function main() {
    console.log('=== 1. 讀取所有單字庫清單 ===');
    const w = (new Function(fs.readFileSync('words_data.js', 'utf8') + '\nreturn externalVocabularyDB;'))();
    const t = (new Function(fs.readFileSync('toeic_data.js', 'utf8') + '\nreturn toeicWordsDB;'))();
    const j = (new Function(fs.readFileSync('jh_data.js', 'utf8') + '\nreturn jhWordsDB;'))();

    const allWordSet = new Set();
    w.forEach(x => allWordSet.add(x.en.trim().toLowerCase()));
    t.forEach(x => allWordSet.add(x.en.trim().toLowerCase()));
    j.forEach(x => allWordSet.add(x.en.trim().toLowerCase()));

    const wordList = Array.from(allWordSet);
    const todo = wordList.filter(word => !(word in cache && cache[word] && cache[word].ex));
    console.log(`總獨立單字數: ${wordList.length} | 已有快取: ${wordList.length - todo.length} | 待爬取: ${todo.length}`);

    if (todo.length === 0) {
        console.log('✔ 所有單字例句已完成！');
        return;
    }

    const CONCURRENCY = 6;
    let completed = 0;
    let successCount = Object.values(cache).filter(x => x && x.ex).length;
    let idx = 0;

    async function worker(workerId) {
        while (idx < todo.length) {
            const currentIdx = idx++;
            const word = todo[currentIdx];
            await processWord(word);
            completed++;
            if (cache[word] && cache[word].ex) successCount++;
            
            if (completed % 25 === 0 || completed === todo.length) {
                saveCache();
                const pct = ((completed / todo.length) * 100).toFixed(1);
                console.log(`進度: ${completed}/${todo.length} (${pct}%) | 成功抓取: ${successCount}`);
            }
            await sleep(150);
        }
    }

    console.log(`啟動 ${CONCURRENCY} 個並發 Worker 抓取權威精簡例句...`);
    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker(i));
    }
    await Promise.all(workers);

    saveCache();
    console.log(`🎉 爬取結束！總共收錄精簡例句: ${Object.values(cache).filter(x => x && x.ex).length} 句。`);
}

main().catch(err => {
    console.error('Fatal error in main:', err);
    saveCache();
});
