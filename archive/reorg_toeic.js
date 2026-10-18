const fs = require('fs');

let content = fs.readFileSync('toeic_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
if (!match) {
    console.error("Could not find array in toeic_data.js");
    process.exit(1);
}

let db;
try {
    db = eval('(' + match[0] + ')');
} catch (e) {
    console.error("Failed to parse toeic_data.js:", e);
    process.exit(1);
}

// Sort by ID to keep it deterministic
db.sort((a, b) => a.id - b.id);

// Reassign units
for (let i = 0; i < db.length; i++) {
    if (i < 1000) {
        db[i].unit = 11;
    } else if (i < 2000) {
        db[i].unit = 12;
    } else {
        db[i].unit = 13;
    }
}

const newContent = '// 多益常考單字 (單元 11-13)\nconst toeicWordsDB = ' + JSON.stringify(db, null, 4) + ';\n';
fs.writeFileSync('toeic_data.js', newContent, 'utf8');
console.log('Successfully reorganized toeic_data.js into units 11, 12, 13.');
