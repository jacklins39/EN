const fs = require('fs');

let content = fs.readFileSync('toeic_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
if (!match) process.exit(1);

let db = eval('(' + match[0] + ')');

// Remove duplicates based on 'en', preferring the one with more data (kk or example)
let uniqueDb = {};
for (const word of db) {
    const key = word.en.toLowerCase().trim();
    if (!uniqueDb[key]) {
        uniqueDb[key] = word;
    } else {
        // If the new one has example/kk and the old one doesn't, overwrite
        const oldWord = uniqueDb[key];
        const oldScore = (oldWord.kk ? 1 : 0) + (oldWord.example ? 1 : 0);
        const newScore = (word.kk ? 1 : 0) + (word.example ? 1 : 0);
        
        if (newScore > oldScore) {
            // Keep the id and unit of the original, but take the data
            word.id = oldWord.id;
            word.unit = oldWord.unit;
            uniqueDb[key] = word;
        }
    }
}

let finalArray = Object.values(uniqueDb);
finalArray.sort((a, b) => a.id - b.id);

// Reassign units: 1000 to 11, 1000 to 12, rest to 13
for (let i = 0; i < finalArray.length; i++) {
    if (i < 1000) {
        finalArray[i].unit = 11;
    } else if (i < 2000) {
        finalArray[i].unit = 12;
    } else {
        finalArray[i].unit = 13;
    }
}

const newContent = '// 多益常考單字 (單元 11-13)\nconst toeicWordsDB = ' + JSON.stringify(finalArray, null, 4) + ';\n';
fs.writeFileSync('toeic_data.js', newContent, 'utf8');

console.log(`Deduplicated. Original length: ${db.length}, New length: ${finalArray.length}`);
