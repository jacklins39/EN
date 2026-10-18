const fs = require('fs');

try {
    let rawData = fs.readFileSync('words.json', 'utf8');
    let words = JSON.parse(rawData);

    let newContent = `// 高中 7000 單字資料庫檔案\n// 已由系統自動轉換並套用至專案中\n\nconst externalVocabularyDB = [\n`;
    
    words.forEach((w, i) => {
        // 去除 (adj.) 等詞性標籤，確保語音 (TTS) 與字典 API 能正常運作
        let baseWord = w.word.split(' (')[0].trim();
        
        // 處理單引號跳脫字元
        baseWord = baseWord.replace(/'/g, "\\'");
        let zh = w.translate.replace(/'/g, "\\'");
        
        newContent += `    { id: ${w.id}, en: '${baseWord}', zh: '${zh}' }`;
        if (i < words.length - 1) newContent += ',\n';
        else newContent += '\n';
    });
    newContent += `];\n`;

    fs.writeFileSync('words_data.js', newContent, 'utf8');
    console.log(`成功載入 ${words.length} 個單字到 words_data.js！`);
} catch(e) {
    console.error('轉換失敗：', e);
}
