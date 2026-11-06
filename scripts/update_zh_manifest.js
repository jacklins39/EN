const fs = require('fs');
const path = require('path');

const dir = 'audio/zh';
const files = fs.readdirSync(dir);
const ids = [];

for (const file of files) {
    if (file.endsWith('.mp3')) {
        const id = parseInt(file.replace('.mp3', ''), 10);
        if (!isNaN(id)) {
            ids.push(id);
        }
    }
}

ids.sort((a, b) => a - b);
console.log(`Found ${ids.length} audio files in ${dir}.`);

const content = `// Auto-generated 100% verified zh audio manifest\nwindow.ZH_AUDIO_MANIFEST = new Set([${ids.join(', ')}]);\n`;
fs.writeFileSync('zh_audio_manifest.js', content, 'utf8');
console.log('Successfully updated zh_audio_manifest.js.');
