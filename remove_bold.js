const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace font-bold with font-medium to soften the look, or just remove it.
// The user says "字體不要粗體" (no bold font).
html = html.replace(/\bfont-bold\b/g, 'font-medium');
html = html.replace(/\bfont-semibold\b/g, 'font-medium');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Removed bold fonts from index.html');
