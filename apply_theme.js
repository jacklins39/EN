const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Font
if (!html.includes('M PLUS Rounded 1c')) {
    html = html.replace('</head>', `    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap" rel="stylesheet">\n    <style>\n        body { font-family: 'M PLUS Rounded 1c', sans-serif; background-color: #F7F4EB; color: #4A463F; }\n        /* Custom scrollbar for natural feel */\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-thumb { background: #d4cec4; border-radius: 4px; }\n    </style>\n</head>`);
}

// 2. Global background and text
html = html.replace(/bg-slate-50/g, 'bg-[#F7F4EB]');
html = html.replace(/bg-gray-50/g, 'bg-[#F7F4EB]');
html = html.replace(/bg-white/g, 'bg-[#EFEAE2]');
html = html.replace(/text-slate-900/g, 'text-[#3E3A33]');
html = html.replace(/text-gray-800/g, 'text-[#3E3A33]');
html = html.replace(/text-slate-500/g, 'text-[#7D7668]');
html = html.replace(/text-gray-500/g, 'text-[#7D7668]');

// 3. Primary Accent (Indigo/Teal -> Forest Green #3A5A40)
html = html.replace(/bg-indigo-600/g, 'bg-[#3A5A40]');
html = html.replace(/bg-indigo-500/g, 'bg-[#4B7353]');
html = html.replace(/hover:bg-indigo-700/g, 'hover:bg-[#2C4531]');
html = html.replace(/text-indigo-600/g, 'text-[#3A5A40]');
html = html.replace(/text-indigo-700/g, 'text-[#3A5A40]');
html = html.replace(/text-indigo-800/g, 'text-[#2C4531]');
html = html.replace(/bg-indigo-50/g, 'bg-[#E5EDD8]'); // Light green
html = html.replace(/border-indigo-100/g, 'border-[#D4DEC4]');
html = html.replace(/border-indigo-200/g, 'border-[#C3D0B0]');
html = html.replace(/focus:ring-indigo-500/g, 'focus:ring-[#3A5A40]');
html = html.replace(/focus:border-indigo-500/g, 'focus:border-[#3A5A40]');
html = html.replace(/ring-indigo-500/g, 'ring-[#3A5A40]');
html = html.replace(/bg-teal-600/g, 'bg-[#3A5A40]');
html = html.replace(/hover:bg-teal-700/g, 'hover:bg-[#2C4531]');
html = html.replace(/text-teal-600/g, 'text-[#3A5A40]');
html = html.replace(/text-teal-800/g, 'text-[#2C4531]');
html = html.replace(/bg-teal-500/g, 'bg-[#3A5A40]');
html = html.replace(/text-teal-500/g, 'text-[#4B7353]');
html = html.replace(/text-teal-700/g, 'text-[#3A5A40]');
html = html.replace(/bg-teal-50/g, 'bg-[#EFEAE2]');
html = html.replace(/hover:bg-teal-100/g, 'hover:bg-[#E5EDD8]');

// 4. Secondary Accent (Blue/Cyan -> Earthy colors)
html = html.replace(/bg-blue-50/g, 'bg-[#EFEAE2]');
html = html.replace(/hover:bg-blue-100/g, 'hover:bg-[#E2D8CC]');
html = html.replace(/border-blue-100/g, 'border-transparent');
html = html.replace(/text-blue-800/g, 'text-[#4A463F]');
html = html.replace(/text-blue-600/g, 'text-[#3A5A40]');
html = html.replace(/bg-blue-100/g, 'bg-[#E2D8CC]');

html = html.replace(/bg-cyan-50/g, 'bg-[#EFEAE2]');
html = html.replace(/hover:bg-cyan-100/g, 'hover:bg-[#E2D8CC]');
html = html.replace(/border-cyan-100/g, 'border-transparent');
html = html.replace(/text-cyan-800/g, 'text-[#4A463F]');
html = html.replace(/text-cyan-600/g, 'text-[#3A5A40]');
html = html.replace(/bg-cyan-600/g, 'bg-[#3A5A40]');

html = html.replace(/bg-green-100/g, 'bg-[#E5EDD8]');
html = html.replace(/text-green-700/g, 'text-[#3A5A40]');
html = html.replace(/text-green-600/g, 'text-[#3A5A40]');
html = html.replace(/text-green-800/g, 'text-[#2C4531]');

// 5. Terracotta Accent (Red/Orange -> #B36B4F or #C27A5D)
html = html.replace(/bg-red-500/g, 'bg-[#B36B4F]');
html = html.replace(/bg-red-100/g, 'bg-[#F2E1DA]');
html = html.replace(/text-red-500/g, 'text-[#B36B4F]');
html = html.replace(/text-red-600/g, 'text-[#A05C42]');
html = html.replace(/text-red-700/g, 'text-[#8A4A32]');
html = html.replace(/border-red-200/g, 'border-[#E6D1C9]');

html = html.replace(/bg-orange-50/g, 'bg-[#F7F4EB]');
html = html.replace(/border-orange-100/g, 'border-transparent');
html = html.replace(/text-orange-800/g, 'text-[#A05C42]');
html = html.replace(/text-orange-600/g, 'text-[#B36B4F]');

// Buttons (本週錯題, 本月錯題, 全部錯題 in screenshot)
// They look like deep earth brown, light terracotta, and forest green.
// I'll make sure they have organic feel.
html = html.replace(/shadow-lg/g, 'shadow-sm'); // Reduce sharp shadows
html = html.replace(/shadow-md/g, 'shadow-sm');
html = html.replace(/border /g, 'border-0 '); // Remove generic borders on cards
html = html.replace(/rounded-xl/g, 'rounded-2xl'); // More rounded
html = html.replace(/rounded-lg/g, 'rounded-xl');

// Some specific tweaks for the dashboard
html = html.replace(
    /<div id="view-dashboard" class="w-full">/,
    `<div id="view-dashboard" class="w-full relative">
        <!-- Background decoration -->
        <svg class="absolute top-10 -left-6 w-12 h-12 text-[#B36B4F] opacity-30 z-0" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0" />
        </svg>
        <svg class="absolute top-40 -right-4 w-10 h-10 text-[#3A5A40] opacity-30 z-0" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0" />
        </svg>
        <svg class="absolute bottom-20 left-4 w-14 h-14 text-[#B36B4F] opacity-20 z-0" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C50 10 70 30 90 30 C90 30 70 50 90 70 C90 70 70 70 50 90 C30 70 10 70 10 70 C10 50 30 30 30 30 C30 30 50 10 50 10" />
        </svg>`
);

html = html.replace(
    /id="btn-review-week" class="[^"]+"/,
    'id="btn-review-week" class="flex-1 bg-[#6A5A4F] text-[#F7F4EB] py-3 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform text-sm"'
);
html = html.replace(
    /id="btn-review-month" class="[^"]+"/,
    'id="btn-review-month" class="flex-1 bg-[#C27A5D] text-[#F7F4EB] py-3 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform text-sm"'
);
html = html.replace(
    /id="btn-review-all" class="[^"]+"/,
    'id="btn-review-all" class="flex-1 bg-[#3A5A40] text-[#F7F4EB] py-3 rounded-2xl font-bold shadow-sm active:scale-95 transition-transform text-sm"'
);

html = html.replace(
    /id="btn-start" class="[^"]+"/,
    'id="btn-start" class="w-full bg-[#3A5A40] text-[#F7F4EB] py-4 rounded-3xl font-bold text-lg shadow-sm hover:bg-[#2C4531] active:scale-95 transition-all mb-4"'
);

// Navigation bar
html = html.replace(/<nav class="fixed bottom-0/g, '<nav class="fixed bottom-0 bg-[#EFEAE2] border-t border-[#E2D8CC] shadow-[0_-2px_10px_rgba(0,0,0,0.02)]');
html = html.replace(/text-indigo-600/g, 'text-[#3A5A40]');

// Add decorative leaves to stat cards
html = html.replace(
    /id="box-stat-review" class="([^"]+)"/,
    'id="box-stat-review" class="$1 relative overflow-hidden z-10"'
);
html = html.replace(
    /id="box-stat-new" class="([^"]+)"/,
    'id="box-stat-new" class="$1 relative overflow-hidden z-10"'
);

html = html.replace(
    /<p class="text-3xl font-bold text-\[\#3A5A40\]" id="stat-review">0<\/p>/,
    `<p class="text-3xl font-bold text-[#3A5A40]" id="stat-review">0</p>
     <svg class="absolute -bottom-2 -right-2 w-10 h-10 text-[#3A5A40] opacity-20 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
     </svg>`
);


fs.writeFileSync('index.html', html, 'utf8');
console.log('Applied Aesthetic Natural style to index.html');
