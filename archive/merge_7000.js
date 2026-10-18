const fs = require('fs');

let content = fs.readFileSync('words_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
let db = eval('(' + match[0] + ')');

let newWords = JSON.parse(fs.readFileSync('extracted_7000.json', 'utf8'));

let uniqueDb = {};
for (const w of db) {
    uniqueDb[w.en.toLowerCase().trim()] = w;
}

let nextId = Math.max(...db.map(w => w.id)) + 1;
let added = 0;
let updated = 0;

for (const nw of newWords) {
    const key = nw.en.toLowerCase().trim();
    if (uniqueDb[key]) {
        // Exists: update
        uniqueDb[key].zh = nw.zh || uniqueDb[key].zh;
        if (nw.kk) uniqueDb[key].kk = nw.kk;
        if (nw.example) uniqueDb[key].example = nw.example;
        if (nw.exampleZh) uniqueDb[key].exampleZh = nw.exampleZh;
        updated++;
    } else {
        // Add new
        uniqueDb[key] = {
            id: nextId++,
            en: nw.en,
            kk: nw.kk || '',
            zh: nw.zh || '',
            unit: 9, // Assuming unit 9 for new words, as 1-8 are 1000 each.
            example: nw.example || '',
            exampleZh: nw.exampleZh || ''
        };
        added++;
    }
}

let finalArray = Object.values(uniqueDb);
finalArray.sort((a, b) => a.id - b.id);

// Do we need to reassign units for all?
// Let's just reassign them so they are clean 1000 per unit.
for (let i = 0; i < finalArray.length; i++) {
    finalArray[i].unit = Math.floor(i / 1000) + 1;
}

const beforeArray = content.substring(0, match.index);
const afterArray = content.substring(match.index + match[0].length);

const newContent = beforeArray + JSON.stringify(finalArray, null, 4) + afterArray;
fs.writeFileSync('words_data.js', newContent, 'utf8');

console.log(`Merged! Added: ${added}, Updated: ${updated}. Total words now: ${finalArray.length}`);
