const fs = require('fs');

const CACHE_FILE = 'clean_sentences_cache.json';
if (!fs.existsSync(CACHE_FILE)) {
    console.error('clean_sentences_cache.json 不存在！');
    process.exit(1);
}

const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
console.log(`讀取快取成功，共 ${Object.keys(cache).length} 筆單字例句。`);

function updateDB(filepath, varName, prefixComment) {
    const content = fs.readFileSync(filepath, 'utf8');
    const fn = new Function(content + `\nreturn ${varName};`);
    const db = fn();
    let hit = 0;
    
    db.forEach(w => {
        const key = (w.en || '').trim().toLowerCase();
        if (key && cache[key] && cache[key].ex) {
            w.example = cache[key].ex;
            w.exampleZh = cache[key].exZh || '';
            hit++;
        }
    });

    const outputCode = `${prefixComment}\nconst ${varName} = ${JSON.stringify(db, null, 4)};\n`;
    fs.writeFileSync(filepath, outputCode, 'utf8');
    console.log(`[${filepath}] 總字數: ${db.length} | 填入例句: ${hit}`);
    return db;
}

const words = updateDB('words_data.js', 'externalVocabularyDB', '// 高中 7000 單字資料庫 (完整 6546 字，涵蓋詞性標記與精簡生活例句)');
const toeic = updateDB('toeic_data.js', 'toeicWordsDB', '// 全新制多益 3000 單字資料庫');
const jh = updateDB('jh_data.js', 'jhWordsDB', '// 國中基礎 2000 單字資料庫');

// 輸出 clean_examples_data.json 供 Python batch_generate_examples.py 批量生成 Edge-TTS MP3
const all = [...words, ...toeic, ...jh];
const exportItems = [];

all.forEach(w => {
    if (w && w.id && w.example && w.example.trim()) {
        exportItems.push({
            id: w.id,
            en: w.en,
            unit: w.unit || 1,
            example: w.example.trim()
        });
    }
});

fs.writeFileSync('clean_examples_data.json', JSON.stringify(exportItems, null, 2), 'utf8');
console.log(`✔ 成功產出 clean_examples_data.json，共 ${exportItems.length} 筆例句供 Edge-TTS 生成！`);
