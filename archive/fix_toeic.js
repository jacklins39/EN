const fs = require('fs');

let oldToeic = fs.readFileSync('old_toeic.js', 'utf16le');
let toeicRaw = oldToeic.match(/const toeicRaw = `([\s\S]*?)`/)[1];

let cache = fs.existsSync('toeic_cache.json') ? JSON.parse(fs.readFileSync('toeic_cache.json', 'utf8')) : {};

let toeicDB = [];
let idCounter = 20001;

function getCache(en) {
    let w = cache[en] || {};
    return { kk: w.kk || '', ex: w.ex || '', exZh: w.exZh || '' };
}

// Parse Unit 11 (original)
let lines = toeicRaw.trim().split('\n');
for (let line of lines) {
    if (!line.trim()) continue;
    let [en, zh] = line.split('|');
    if (!en || !zh) continue;
    let c = getCache(en.trim());
    toeicDB.push({ id: idCounter++, en: en.trim(), kk: c.kk, zh: zh.trim(), unit: 11, example: c.ex, exampleZh: c.exZh });
}

// Parse Units 12-16 from add_more_toeic.js
let addMoreSrc = fs.readFileSync('add_more_toeic.js', 'utf8');
let rawUnitsMatch = addMoreSrc.match(/const rawUnits = (\[[\s\S]*?\]);/);
let rawUnits = eval(rawUnitsMatch[1]);

for (let unitLines of rawUnits) {
    let lines2 = unitLines.trim().split('\n');
    for (let line of lines2) {
        if (!line.trim()) continue;
        let [en, zh] = line.split('|');
        if (!en || !zh) continue;
        if (toeicDB.some(w => w.en === en.trim())) continue;
        let c = getCache(en.trim());
        toeicDB.push({ id: idCounter++, en: en.trim(), kk: c.kk, zh: zh.trim(), unit: 11, example: c.ex, exampleZh: c.exZh });
    }
}

fs.writeFileSync('toeic_data.js', '// 多益常考單字 (單元 11)\nconst toeicWordsDB = ' + JSON.stringify(toeicDB, null, 4) + ';\n', 'utf8');
console.log('Regenerated toeic_data.js cleanly with ' + toeicDB.length + ' words, assigned ALL to Unit 11, and restored cache!');
