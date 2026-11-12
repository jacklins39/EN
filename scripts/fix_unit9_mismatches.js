const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(__dirname, '..', 'examples_unit9_data.js');
const rawCode = fs.readFileSync(filePath, 'utf8');

const FIX_MAP = {
  8212: { en: "snorted", kk: "[snɔrtɪd]", uk: "/ˈsnɔːtɪd/" },
  8234: { en: "champing", kk: "[ˋtʃæmpɪŋ]", uk: "/ˈtʃæmpɪŋ/" },
  8235: { en: "snoozing", kk: "[ˋsnuzɪŋ]", uk: "/ˈsnuːzɪŋ/" },
  8243: { en: "tapped", kk: "[tæpt]", uk: "/tæpt/" },
  8244: { en: "clanked", kk: "[klæŋkt]", uk: "/klæŋkt/" },
  8277: { en: "crunched", kk: "[krʌntʃt]", uk: "/krʌntʃt/" },
  8278: { en: "chatted", kk: "[ˋtʃætɪd]", uk: "/ˈtʃætɪd/" },
  8303: { en: "sniffed", kk: "[snɪft]", uk: "/snɪft/" },
  8304: { en: "screeched", kk: "[skritʃt]", uk: "/skriːtʃt/" },
  8352: { en: "whined", kk: "[hwaɪnd]", uk: "/waɪnd/" },
  8353: { en: "yapped", kk: "[jæpt]", uk: "/jæpt/" },
  8378: { en: "hummed", kk: "[hʌmd]", uk: "/hʌmd/" },
  8379: { en: "roared", kk: "[rɔrd]", uk: "/rɔːd/" },
  8406: { en: "clicked", kk: "[klɪkt]", uk: "/klɪkt/" },
  8527: { en: "croaked", kk: "[kroʊkt]", uk: "/krəʊkt/" },
  8528: { en: "chirped", kk: "[tʃɝpt]", uk: "/tʃɜːpt/" },
  8552: { en: "chirping", kk: "[ˋtʃɝpɪŋ]", uk: "/ˈtʃɜːpɪŋ/" },
  8553: { en: "squeaked", kk: "[skwikt]", uk: "/skwiːkt/" },
  8560: { en: "thudded", kk: "[ˋθʌdɪd]", uk: "/ˈθʌdɪd/" },
  8561: { en: "groaned", kk: "[groʊnd]", uk: "/ɡrəʊnd/" },
  8573: { en: "cheeped", kk: "[tʃipt]", uk: "/tʃiːpt/" },
  8574: { en: "squawked", kk: "[skwɔkt]", uk: "/skwɔːkt/" },
  8575: { en: "mewed", kk: "[mjud]", uk: "/mjuːd/" },
  8996: { en: "tapped", kk: "[tæpt]", uk: "/tæpt/" },
  8997: { en: "squawking", kk: "[ˋskwɔkɪŋ]", uk: "/ˈskwɔːkɪŋ/" },
  9005: { en: "roaring", kk: "[ˋrɔrɪŋ]", uk: "/ˈrɔːrɪŋ/" },
  9006: { en: "groaning", kk: "[ˋgroʊnɪŋ]", uk: "/ˈɡrəʊnɪŋ/" },
  9015: { en: "screeching", kk: "[ˋskritʃɪŋ]", uk: "/ˈskriːtʃɪŋ/" },
  9016: { en: "croaking", kk: "[ˋkroʊkɪŋ]", uk: "/ˈkrəʊkɪŋ/" },
  9025: { en: "whining", kk: "[ˋhwaɪnɪŋ]", uk: "/ˈwaɪnɪŋ/" },
  9026: { en: "humming", kk: "[ˋhʌmɪŋ]", uk: "/ˈhʌmɪŋ/" },
  9035: { en: "thudding", kk: "[ˋθʌdɪŋ]", uk: "/ˈθʌdɪŋ/" },
  9036: { en: "clanking", kk: "[ˋklæŋkɪŋ]", uk: "/ˈklæŋkɪŋ/" },
  9045: { en: "snorting", kk: "[ˋsnɔrtɪŋ]", uk: "/ˈsnɔːtɪŋ/" },
  9046: { en: "sniffing", kk: "[ˋsnɪfɪŋ]", uk: "/ˈsnɪfɪŋ/" },
  9055: { en: "crunching", kk: "[ˋkrʌntʃɪŋ]", uk: "/ˈkrʌntʃɪŋ/" },
  9056: { en: "clicking", kk: "[ˋklɪkɪŋ]", uk: "/ˈklɪkɪŋ/" },
  9058: { en: "chatting", kk: "[ˋtʃætɪŋ]", uk: "/ˈtʃætɪŋ/" }
};

const sb = {};
vm.createContext(sb);
vm.runInContext(rawCode.replace(/^const /m, 'var '), sb);
const list = sb.examplesUnit9WordsDB;

let modifiedCount = 0;
for (const item of list) {
  if (FIX_MAP[item.id]) {
    const fix = FIX_MAP[item.id];
    console.log(`Fixing ID ${item.id}: "${item.en}" -> "${fix.en}", kk: "${item.kk}" -> "${fix.kk}", uk: "${item.uk || ''}" -> "${fix.uk}"`);
    item.en = fix.en;
    item.kk = fix.kk;
    item.uk = fix.uk;
    modifiedCount++;
  }
}

console.log(`\nTotal items modified: ${modifiedCount}`);

const headerMatch = rawCode.match(/^(\/\*\*[\s\S]*?\*\/)\s*const examplesUnit9WordsDB =/);
const header = headerMatch ? headerMatch[1] + '\n' : '/**\n * 高中 7000 單字擴充單元 - 例句實戰高頻詞庫\n */\n';
const outputCode = `${header}const examplesUnit9WordsDB = ${JSON.stringify(list, null, 2)};\n`;

fs.writeFileSync(filePath, outputCode, 'utf8');
console.log('Saved updated examples_unit9_data.js');
