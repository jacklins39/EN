const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Font
html = html.replace(/<link href="https:\/\/fonts.googleapis.com\/css2\?family=M\+PLUS\+Rounded\+1c[^>]+>/, `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">`);
html = html.replace(/body\s*\{[^}]+\}/, `body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #F5F5F7; color: #1D1D1F; -webkit-font-smoothing: antialiased; }`);

// 2. Replace Backgrounds and text
html = html.replace(/bg-\[\#F7F4EB\]/g, 'bg-[#F5F5F7]'); // App background
html = html.replace(/bg-\[\#EFEAE2\]/g, 'bg-white');    // Cards
html = html.replace(/text-\[\#3E3A33\]/g, 'text-[#1D1D1F]');
html = html.replace(/text-\[\#7D7668\]/g, 'text-[#86868B]');
html = html.replace(/text-\[\#4A463F\]/g, 'text-[#1D1D1F]');

// 3. Replace Primary/Accent colors (The old forest greens and earthy tones)
// Main buttons were #3A5A40, #2C4531, etc.
html = html.replace(/bg-\[\#3A5A40\]/g, 'bg-[#0071E3]');
html = html.replace(/hover:bg-\[\#2C4531\]/g, 'hover:bg-[#0077ED]');
html = html.replace(/text-\[\#3A5A40\]/g, 'text-[#0071E3]');
html = html.replace(/text-\[\#2C4531\]/g, 'text-[#0071E3]');
html = html.replace(/text-\[\#4B7353\]/g, 'text-[#0071E3]');
html = html.replace(/border-\[\#3A5A40\]/g, 'border-[#0071E3]');
html = html.replace(/focus:ring-\[\#3A5A40\]/g, 'focus:ring-[#0071E3]');
html = html.replace(/focus:border-\[\#3A5A40\]/g, 'focus:border-[#0071E3]');

// Replace Dashboard Action Buttons (previously brown/terracotta/green)
html = html.replace(/bg-\[\#6A5A4F\]/g, 'bg-white'); // 本週錯題
html = html.replace(/text-\[\#F7F4EB\]/g, 'text-white'); // Generic text-white for primary buttons, but for cards it needs fixing
html = html.replace(/bg-\[\#C27A5D\]/g, 'bg-white'); // 本月錯題

// Let's manually fix the 3 dashboard review buttons to be Apple style
// We'll give them white background, subtle border, blue icon/text or black text
html = html.replace(/id="btn-review-week" class="flex-1 bg-white text-white/g, 'id="btn-review-week" class="flex-1 bg-white text-[#1D1D1F] border border-gray-200');
html = html.replace(/id="btn-review-month" class="flex-1 bg-white text-white/g, 'id="btn-review-month" class="flex-1 bg-white text-[#1D1D1F] border border-gray-200');
html = html.replace(/id="btn-review-all" class="flex-1 bg-\[\#0071E3\] text-white/g, 'id="btn-review-all" class="flex-1 bg-[#0071E3] text-white border border-transparent');

// Replace light green / beige hover states to Apple light gray #E5E5EA
html = html.replace(/bg-\[\#E5EDD8\]/g, 'bg-[#E5E5EA]');
html = html.replace(/hover:bg-\[\#E5EDD8\]/g, 'hover:bg-[#E5E5EA]');
html = html.replace(/hover:bg-\[\#E2D8CC\]/g, 'hover:bg-[#E5E5EA]');
html = html.replace(/bg-\[\#E2D8CC\]/g, 'bg-[#F5F5F7]'); 
html = html.replace(/bg-\[\#F2E1DA\]/g, 'bg-[#FF3B30] bg-opacity-10'); // light red
html = html.replace(/text-\[\#B36B4F\]/g, 'text-[#FF3B30]');
html = html.replace(/text-\[\#A05C42\]/g, 'text-[#FF3B30]');
html = html.replace(/text-\[\#8A4A32\]/g, 'text-[#FF3B30]');

// Remove decorative SVGs added in the Japanese style
html = html.replace(/<svg class="absolute top-10 -left-6[^>]+>[\s\S]*?<\/svg>/, '');
html = html.replace(/<svg class="absolute top-40 -right-4[^>]+>[\s\S]*?<\/svg>/, '');
html = html.replace(/<svg class="absolute bottom-20 left-4[^>]+>[\s\S]*?<\/svg>/, '');

// Flashcard styles - crisp and white with sleek shadow
html = html.replace(/shadow-sm/g, 'shadow-sm'); // actually we want some shadows to be larger for cards
html = html.replace(/id="flashcard" class="([^"]+)"/, function(match, p1) {
    return `id="flashcard" class="${p1.replace('shadow-sm', 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100')}"`;
});

// Update the stat cards
html = html.replace(/id="box-stat-review" class="([^"]+)"/, 'id="box-stat-review" class="bg-white rounded-2xl p-4 text-center border border-gray-100 cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 relative overflow-hidden z-10 shadow-sm"');
html = html.replace(/id="box-stat-new" class="([^"]+)"/, 'id="box-stat-new" class="bg-white rounded-2xl p-4 text-center border border-gray-100 cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 relative overflow-hidden z-10 shadow-sm"');

// Fix SVG color inside stat cards
html = html.replace(/text-\[\#0071E3\] opacity-20/g, 'text-[#0071E3] opacity-10');

// Bring back semibold for headings to make them clear
html = html.replace(/class="text-2xl font-medium/g, 'class="text-2xl font-semibold');
html = html.replace(/class="text-xl font-medium/g, 'class="text-xl font-semibold');
html = html.replace(/class="text-3xl font-medium/g, 'class="text-3xl font-semibold');
html = html.replace(/class="text-lg font-medium/g, 'class="text-lg font-semibold');
html = html.replace(/font-medium text-\[\#1D1D1F\]/g, 'font-semibold text-[#1D1D1F]'); // generic headings

// Nav bar
html = html.replace(/nav class="fixed bottom-0 bg-white border-t border-\[\#E2D8CC\]/, 'nav class="fixed bottom-0 bg-white/90 backdrop-blur-md border-t border-gray-200');

// Fix buttons styling
html = html.replace(/rounded-3xl/g, 'rounded-2xl');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Applied Apple Mac style to index.html');
