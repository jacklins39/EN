const fs = require('fs');

const missingWords = [
    { en: 'I', zh: '我', kk: '/aɪ/' },
    { en: 'me', zh: '我(受格)', kk: '/mi/' },
    { en: 'my', zh: '我的', kk: '/maɪ/' },
    { en: 'mine', zh: '我的東西', kk: '/maɪn/' },
    { en: 'you', zh: '你', kk: '/ju/' },
    { en: 'your', zh: '你的', kk: '/jʊr/' },
    { en: 'yours', zh: '你的東西', kk: '/jʊrz/' },
    { en: 'he', zh: '他', kk: '/hi/' },
    { en: 'him', zh: '他(受格)', kk: '/hɪm/' },
    { en: 'his', zh: '他的', kk: '/hɪz/' },
    { en: 'she', zh: '她', kk: '/ʃi/' },
    { en: 'her', zh: '她(受格)/她的', kk: '/hɜr/' },
    { en: 'hers', zh: '她的東西', kk: '/hɜrz/' },
    { en: 'it', zh: '它', kk: '/ɪt/' },
    { en: 'its', zh: '它的', kk: '/ɪts/' },
    { en: 'we', zh: '我們', kk: '/wi/' },
    { en: 'us', zh: '我們(受格)', kk: '/ʌs/' },
    { en: 'our', zh: '我們的', kk: '/ˈaʊər/' },
    { en: 'ours', zh: '我們的東西', kk: '/ˈaʊərz/' },
    { en: 'they', zh: '他們', kk: '/ðeɪ/' },
    { en: 'them', zh: '他們(受格)', kk: '/ðɛm/' },
    { en: 'their', zh: '他們的', kk: '/ðɛr/' },
    { en: 'theirs', zh: '他們的東西', kk: '/ðɛrz/' },
    { en: 'a', zh: '一個', kk: '/ə/' },
    { en: 'an', zh: '一個(母音前)', kk: '/æn/' },
    { en: 'the', zh: '這/那(定冠詞)', kk: '/ðə/' },
    { en: 'am', zh: '是(搭配I)', kk: '/æm/' },
    { en: 'is', zh: '是', kk: '/ɪz/' },
    { en: 'are', zh: '是', kk: '/ɑr/' },
    { en: 'was', zh: '是(過去式)', kk: '/wʌz/' },
    { en: 'were', zh: '是(過去式)', kk: '/wɜr/' },
    { en: 'been', zh: '是(過去分詞)', kk: '/bɪn/' },
    { en: 'do', zh: '做', kk: '/du/' },
    { en: 'does', zh: '做(第三人稱)', kk: '/dʌz/' },
    { en: 'did', zh: '做(過去式)', kk: '/dɪd/' },
    { en: 'done', zh: '做(過去分詞)', kk: '/dʌn/' },
    { en: 'have', zh: '有', kk: '/hæv/' },
    { en: 'has', zh: '有(第三人稱)', kk: '/hæz/' },
    { en: 'had', zh: '有(過去式)', kk: '/hæd/' },
    { en: 'who', zh: '誰', kk: '/hu/' },
    { en: 'whom', zh: '誰(受格)', kk: '/hum/' },
    { en: 'whose', zh: '誰的', kk: '/huz/' }
];

let wordsData = fs.readFileSync('words_data.js', 'utf8');
let match = wordsData.match(/const externalVocabularyDB = (\[[\s\S]*?\]);/);
if (match) {
    let db = eval(match[1]);
    
    // Check which ones are actually missing
    let toAdd = missingWords.filter(mw => !db.find(x => x.en.toLowerCase() === mw.en.toLowerCase()));
    
    // Generate IDs starting from 90000 to avoid conflicts
    let startId = 90001;
    toAdd.forEach(w => {
        w.id = startId++;
        w.unit = 1; // Put them in unit 1
        db.unshift(w); // Add to the very beginning!
    });
    
    wordsData = wordsData.replace(match[1], JSON.stringify(db, null, 4));
    fs.writeFileSync('words_data.js', wordsData);
    console.log('Added ' + toAdd.length + ' basic words.');
}
