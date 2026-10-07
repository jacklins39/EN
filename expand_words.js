const fs = require('fs');

try {
    let content = fs.readFileSync('words_data.js', 'utf8');
    let dbStr = content.match(/const externalVocabularyDB = (\[[\s\S]*?\]);/)[1];
    
    // 將字串轉為實際陣列
    let db;
    eval('db = ' + dbStr);

    let newDb = [];
    
    // 保留單元 1 (原本的 1000 字)
    db.forEach(w => newDb.push(w));

    // 產生單元 2 到單元 8 (透過複製原本的單字並加上標籤，補滿 8000 字)
    for (let unit = 2; unit <= 8; unit++) {
        db.forEach(w => {
            newDb.push({
                id: w.id + (unit - 1) * 1000,
                en: w.en,
                zh: w.zh + ` (單元 ${unit})`
            });
        });
    }

    let newContent = `// 這是獨立的 8000 單字資料庫檔案
// 系統已自動將單字擴充至 8000 字，供測試單元 1~8 切換使用。

const externalVocabularyDB = [\n`;

    newDb.forEach((w, i) => {
        newContent += `    { id: ${w.id}, en: '${w.en.replace(/'/g, "\\'")}', zh: '${w.zh.replace(/'/g, "\\'")}' }`;
        if (i < newDb.length - 1) newContent += ',\n';
        else newContent += '\n';
    });

    newContent += `];\n`;

    fs.writeFileSync('words_data.js', newContent, 'utf8');
    console.log('成功將 words_data.js 擴充至 8000 字！');
} catch (e) {
    console.error('擴充失敗:', e);
}
