const fs = require('fs');

let content = fs.readFileSync('toeic_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
let db = eval('(' + match[0] + ')');

let newWords = JSON.parse(fs.readFileSync('extracted_3000.json', 'utf8'));

// Deduplicate existing
let uniqueDb = {};
for (const w of db) {
    uniqueDb[w.en.toLowerCase().trim()] = w;
}

let nextId = Math.max(...db.map(w => w.id)) + 1;

for (const nw of newWords) {
    const key = nw.en.toLowerCase().trim();
    if (!uniqueDb[key]) {
        uniqueDb[key] = {
            id: nextId++,
            en: nw.en,
            kk: '',
            zh: nw.zh,
            unit: 12, // temporary
            example: '',
            exampleZh: ''
        };
    }
}

let finalArray = Object.values(uniqueDb);
finalArray.sort((a, b) => a.id - b.id);

// Reassign units
for (let i = 0; i < finalArray.length; i++) {
    if (i < 1000) {
        finalArray[i].unit = 11;
    } else if (i < 2000) {
        finalArray[i].unit = 12;
    } else if (i < 3000) {
        finalArray[i].unit = 13;
    } else if (i < 4000) {
        finalArray[i].unit = 14;
    }
}

const newContent = '// 多益常考單字 (單元 11-14)\nconst toeicWordsDB = ' + JSON.stringify(finalArray, null, 4) + ';\n';
fs.writeFileSync('toeic_data.js', newContent, 'utf8');

console.log(`Merged! Total words now: ${finalArray.length}`);
