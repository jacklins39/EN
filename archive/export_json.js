const fs = require('fs');
let content = fs.readFileSync('words_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
let db = eval('(' + match[0] + ')');
fs.writeFileSync('temp_db.json', JSON.stringify(db, null, 2), 'utf8');
console.log('Exported temp_db.json');
