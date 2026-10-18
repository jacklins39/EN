const fs = require('fs');

const CACHE_FILE = 'clean_sentences_cache.json';
const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));

const w = (new Function(fs.readFileSync('words_data.js', 'utf8') + '\nreturn externalVocabularyDB;'))();
const t = (new Function(fs.readFileSync('toeic_data.js', 'utf8') + '\nreturn toeicWordsDB;'))();
const j = (new Function(fs.readFileSync('jh_data.js', 'utf8') + '\nreturn jhWordsDB;'))();

const all = [...w, ...t, ...j];
const missing = new Set();
all.forEach(item => {
    const key = (item.en || '').trim().toLowerCase();
    if (key && !(key in cache && cache[key] && cache[key].ex)) {
        missing.add(key);
    }
});

const todo = Array.from(missing);
console.log(`Need to fill ${todo.length} words.`);

async function fetchGoogle(word) {
    try {
        const clean = word.replace(/[^a-zA-Z\s]/g, '').trim() || word;
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=ex&q=${encodeURIComponent(clean)}`);
        if (res.ok) {
            const data = await res.json();
            if (data[13] && data[13][0] && data[13][0][0] && data[13][0][0][0]) {
                let ex = data[13][0][0][0].replace(/<[^>]*>?/gm, '').trim();
                if (!/[.?!]$/.test(ex)) ex += '.';
                return ex;
            }
        }
    } catch(e) {}
    return null;
}

async function translate(en) {
    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(en)}`);
        if (res.ok) {
            const data = await res.json();
            if (data && data[0]) return data[0].map(x => x[0]).join('').trim();
        }
    } catch(e) {}
    return '';
}

async function main() {
    for (const word of todo) {
        let ex = await fetchGoogle(word);
        if (!ex) {
            // 自然簡短句保底
            const clean = word.replace(/[^a-zA-Z\s]/g, '').trim() || word;
            ex = `This is a common example of ${clean}.`;
        }
        const exZh = await translate(ex);
        cache[word] = { ex, exZh };
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
    console.log('✔ All missing words filled into cache!');
}

main();
