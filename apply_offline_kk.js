const fs = require('fs');

async function main() {
    console.log('Downloading IPA dictionary...');
    const res = await fetch('https://raw.githubusercontent.com/open-dict-data/ipa-dict/master/data/en_US.txt');
    const text = await res.text();
    
    console.log('Parsing dictionary...');
    const lines = text.split('\n');
    const ipaMap = new Map();
    for (const line of lines) {
        if (!line.trim()) continue;
        const [word, ipaStr] = line.split('\t');
        if (word && ipaStr) {
            // Some words have multiple pronunciations separated by commas, just take the first one
            const firstIpa = ipaStr.split(',')[0].trim();
            ipaMap.set(word.toLowerCase(), firstIpa);
        }
    }
    
    console.log('Updating words_data.js...');
    const FILE = 'words_data.js';
    const src = fs.readFileSync(FILE, 'utf8');
    
    const words = [...src.matchAll(/\{\s*id:\s*(\d+),\s*en:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)'(?:,\s*kk:\s*'(?:[^'\\]|\\.)*')?\s*\}/g)].map((m) => ({
      id: +m[1],
      en: m[2],
      zh: m[3],
    }));
    
    let matched = 0;
    const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const newLines = words.map((w) => {
        let kk = ipaMap.get(w.en.toLowerCase());
        
        // Remove slashes if present in the raw data
        if (kk && kk.startsWith('/') && kk.endsWith('/')) {
            kk = kk.substring(1, kk.length - 1);
        }
        
        if (kk) matched++;
        
        return `    { id: ${w.id}, en: '${w.en}', zh: '${w.zh}'${kk ? `, kk: '/${esc(kk)}/'` : ''} },`;
    });
    
    fs.writeFileSync(FILE, '// 高中 7000 單字資料庫（含音標）\nconst externalVocabularyDB = [\n' + newLines.join('\n') + '\n];\n', 'utf8');
    console.log(`Done! Matched ${matched} / ${words.length} words.`);
}

main().catch(console.error);
