const fs = require('fs');

function applyCache(filename, regex, dbName) {
    let cache = JSON.parse(fs.readFileSync('example_cache.json', 'utf8'));
    let content = fs.readFileSync(filename, 'utf8');
    let match = content.match(regex);
    if (!match) return;
    
    let db = eval(match[1]);
    let modified = false;
    
    db.forEach(w => {
        let c = cache[w.en];
        if (c && c.ex) {
            if (!w.example) {
                w.example = c.ex;
                w.exampleZh = c.exZh;
                modified = true;
            }
        }
    });
    
    if (modified) {
        content = content.replace(match[1], JSON.stringify(db, null, 4));
        fs.writeFileSync(filename, content);
        console.log(`Applied cache to ${filename}.`);
    } else {
        console.log(`No new examples applied to ${filename}.`);
    }
}

applyCache('jh_data.js', /const jhWordsDB = (\[[\s\S]*?\]);/, 'jhWordsDB');
