const fs = require('fs');

let content = fs.readFileSync('words_data.js', 'utf8');
const match = content.match(/\[[\s\S]*\]/);
let updatedDb = JSON.parse(fs.readFileSync('temp_db_updated.json', 'utf8'));

const beforeArray = content.substring(0, match.index);
const afterArray = content.substring(match.index + match[0].length);

const newContent = beforeArray + JSON.stringify(updatedDb, null, 4) + afterArray;
fs.writeFileSync('words_data.js', newContent, 'utf8');

console.log('Successfully re-compiled words_data.js with crawled missing data.');
