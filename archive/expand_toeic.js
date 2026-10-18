const fs = require('fs');

const FILE = 'toeic_data.js';
const KK_CACHE = 'kk_cache.json';
const EX_CACHE = 'example_cache.json';

// Read existing file content
const src = fs.readFileSync(FILE, 'utf8');

// Use a safe regex to extract all objects from the file
// { id: 20200, en: 'abandon', kk: '', zh: 'v. 放棄', unit: 12, example: '', exampleZh: '' }
const matches = [...src.matchAll(/\{\s*id:\s*(\d+),\s*en:\s*'((?:[^'\\]|\\.)*)',\s*kk:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)',\s*unit:\s*(\d+)(?:,\s*example:\s*'((?:[^'\\]|\\.)*)')?(?:,\s*exampleZh:\s*'((?:[^'\\]|\\.)*)')?\s*\}/g)];

// Also extract unit 11 which might not have example fields in the raw if it wasn't processed yet
const unit11Matches = [...src.matchAll(/\{\s*id:\s*(\d+),\s*en:\s*'((?:[^'\\]|\\.)*)',\s*kk:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)',\s*unit:\s*11\s*\}/g)];

// Combine matches uniquely
const allWordsMap = new Map();
for (const m of [...unit11Matches, ...matches]) {
    allWordsMap.set(parseInt(m[1]), {
        id: parseInt(m[1]),
        en: m[2],
        kk: m[3] || '',
        zh: m[4],
        unit: parseInt(m[5] || 11),
        example: m[6] || '',
        exampleZh: m[7] || ''
    });
}
const words = Array.from(allWordsMap.values()).sort((a,b) => a.id - b.id);

console.log(`Found ${words.length} TOEIC words to process.`);

const kkCache = fs.existsSync(KK_CACHE) ? JSON.parse(fs.readFileSync(KK_CACHE, 'utf8')) : {};
const exCache = fs.existsSync(EX_CACHE) ? JSON.parse(fs.readFileSync(EX_CACHE, 'utf8')) : {};
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchKK(w) {
    if (kkCache[w]) return kkCache[w];
    try {
        const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(w));
        if (!res.ok) return '';
        const data = await res.json();
        for (const e of data) {
            if (e.phonetic) { kkCache[w] = e.phonetic; return e.phonetic; }
            for (const p of e.phonetics || []) {
                if (p.text) { kkCache[w] = p.text; return p.text; }
            }
        }
    } catch (e) { }
    return '';
}

const cleanHtml = (s) => s.replace(/<[^>]*>?/gm, '');
async function fetchExample(w) {
    if (exCache[w] && exCache[w].ex) return exCache[w];
    if (exCache[w] && exCache[w].ex === '') return exCache[w]; // already tried and failed
    
    try {
        let res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=ex&q=${encodeURIComponent(w)}`);
        if (!res.ok) return { ex: '', exZh: '' };
        let data = await res.json();
        let ex = '';
        if (data[13] && data[13][0] && data[13][0][0] && data[13][0][0][0]) {
            ex = cleanHtml(data[13][0][0][0]);
        }
        if (!ex) {
             exCache[w] = { ex: '', exZh: '' };
             return exCache[w];
        }

        res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(ex)}`);
        if (!res.ok) return { ex, exZh: '' };
        let transData = await res.json();
        let exZh = '';
        if (transData && transData[0]) {
            exZh = transData[0].map(x => x[0]).join('');
        }
        exCache[w] = { ex, exZh };
        return { ex, exZh };
    } catch (e) {
        return { ex: '', exZh: '' };
    }
}

// Ensure the raw is removed and we output a clean array
(async () => {
    const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    
    let processed = 0;
    
    // We can do this in parallel, but with a small delay
    const BATCH_SIZE = 5;
    for (let i = 0; i < words.length; i += BATCH_SIZE) {
        const batch = words.slice(i, i + BATCH_SIZE);
        
        await Promise.all(batch.map(async (w) => {
            if (!w.kk) w.kk = await fetchKK(w.en);
            if (!w.example) {
                let exData = await fetchExample(w.en);
                w.example = exData.ex;
                w.exampleZh = exData.exZh;
            }
            processed++;
        }));
        
        console.log(`Processed ${processed}/${words.length}`);
        fs.writeFileSync(KK_CACHE, JSON.stringify(kkCache));
        fs.writeFileSync(EX_CACHE, JSON.stringify(exCache));
        await sleep(300);
    }

    const lines = words.map(w => {
        let parts = [`id: ${w.id}`, `en: '${esc(w.en)}'`, `kk: '${esc(w.kk)}'`, `zh: '${esc(w.zh)}'`, `unit: ${w.unit}`];
        if (w.example || w.example === '') parts.push(`example: '${esc(w.example)}'`);
        if (w.exampleZh || w.exampleZh === '') parts.push(`exampleZh: '${esc(w.exampleZh)}'`);
        return `    { ${parts.join(', ')} }`;
    });
    
    const newContent = `// 多益常考單字 (單元 11-16)
const toeicWordsDB = [
${lines.join(',\\n')}
];
`;
    fs.writeFileSync(FILE, newContent, 'utf8');
    console.log('\\nDone! toeic_data.js has been fully updated with KK and Examples.');
})();
