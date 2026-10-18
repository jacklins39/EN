const fs = require('fs');

// Read the current toeic_data.js (which has original ~1161 words from git)
let content = fs.readFileSync('toeic_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
let db = eval('(' + match[0] + ')');

let newWords = JSON.parse(fs.readFileSync('extracted_3000.json', 'utf8'));

// Build dictionary of original words (if duplicate in original, just keep the last one)
let uniqueDb = {};
for (const w of db) {
    uniqueDb[w.en.toLowerCase().trim()] = w;
}

// Find max ID so we can assign new IDs
let nextId = Math.max(...db.map(w => w.id)) + 1;

// Merge PDF words, prioritizing PDF's translations for duplicates
for (const nw of newWords) {
    const key = nw.en.toLowerCase().trim();
    if (uniqueDb[key]) {
        // Exists: update the translation (zh) to be from PDF as user requested.
        // Keep existing kk, example, exampleZh if any.
        uniqueDb[key].zh = nw.zh;
    } else {
        // Doesn't exist: add it
        uniqueDb[key] = {
            id: nextId++,
            en: nw.en,
            kk: '',
            zh: nw.zh,
            unit: 11, // temporary
            example: '',
            exampleZh: ''
        };
    }
}

let finalArray = Object.values(uniqueDb);
// Sort alphabetically or by id? Sort by id so that new words come after.
finalArray.sort((a, b) => a.id - b.id);

// Split into units 11, 12, 13
// User wants: Unit 12 1000 words, Unit 13 1000 words.
// Let's make Unit 11 have 1000, Unit 12 have 1000, Unit 13 have 1000, Unit 14 have the rest.
// Wait, we have roughly 3386 words total.
for (let i = 0; i < finalArray.length; i++) {
    if (i < 1000) {
        finalArray[i].unit = 11;
    } else if (i < 2000) {
        finalArray[i].unit = 12;
    } else if (i < 3000) {
        finalArray[i].unit = 13;
    } else {
        finalArray[i].unit = 14;
    }
}

const newContent = '// 多益常考單字 (單元 11-14)\nconst toeicWordsDB = ' + JSON.stringify(finalArray, null, 4) + ';\n';
fs.writeFileSync('toeic_data.js', newContent, 'utf8');

console.log(`Merged with PDF priority! Total words now: ${finalArray.length}`);
