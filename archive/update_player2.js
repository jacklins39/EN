const fs = require('fs');

let lines = fs.readFileSync('index.html', 'utf8').split('\n');

// 1. Replace the UI block
let startIndex = lines.findIndex(l => l.includes('<div id="listening-player"'));
let endIndex = lines.findIndex((l, i) => i > startIndex && l.includes('<!-- 字庫 Tab Events -->'));

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find UI block boundaries');
    process.exit(1);
}

const newPlayerUI = `                <div id="listening-player" class="hidden flex flex-col h-full">
                    <!-- 頂部控制列 -->
                    <div class="flex items-center gap-3 mb-4 shrink-0">
                        <button id="btn-back-to-listening-setup" class="text-teal-600 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 p-2 rounded-full transition-colors" title="返回設定">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <h3 class="text-xl font-bold text-teal-800 flex-1">播放器</h3>
                    </div>
                    <div class="flex justify-between items-start mb-3 border-b border-teal-100 pb-2 hidden shrink-0" id="listening-header-container">
                        <h3 id="listening-article-title" class="text-lg font-bold text-teal-700"></h3>
                        <button id="btn-save-listening-article" class="text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100 px-3 py-1.5 rounded-full font-bold shadow-sm transition-colors hidden">
                            收藏文章
                        </button>
                    </div>

                    <!-- 播放控制器列 -->
                    <div class="flex justify-between items-center mb-4 bg-teal-50 p-3 rounded-xl shrink-0 shadow-sm border border-teal-100">
                        <div class="flex items-center gap-3">
                            <button id="btn-play-pause-listening" class="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition shadow-md" title="播放/暫停">
                                <svg id="icon-play" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <svg id="icon-pause" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </button>
                            <button id="btn-replay-sentence" class="text-teal-600 hover:text-teal-800 p-2 bg-white rounded-full shadow-sm hover:shadow" title="單句重播">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                <span class="text-[10px] font-bold block -mt-1 text-center">單句</span>
                            </button>
                            <button id="btn-replay-all" class="text-teal-600 hover:text-teal-800 p-2 bg-white rounded-full shadow-sm hover:shadow" title="整篇重播">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" /></svg>
                                <span class="text-[10px] font-bold block -mt-1 text-center">重頭</span>
                            </button>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold text-teal-800">翻譯模式</span>
                            <select id="trans-mode-select" class="text-xs bg-white border border-teal-200 rounded p-1 outline-none text-teal-800 cursor-pointer shadow-sm focus:ring-1 focus:ring-teal-500">
                                <option value="en-zh">中英對照</option>
                                <option value="en-only">全英文</option>
                                <option value="zh-only">全中文</option>
                            </select>
                        </div>
                    </div>

                    <!-- 內文與翻譯區塊 -->
                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-inner flex-1 overflow-y-auto mb-4 relative" id="listening-text-container">
                        <!-- 動態插入段落 -->
                    </div>

                    <div class="flex justify-between items-center mb-2 shrink-0">
                        <h4 class="font-bold text-gray-700 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" /></svg>
                            本文重點單字
                        </h4>
                    </div>
                    <div id="listening-words-container" class="grid grid-cols-2 gap-2 mb-4 shrink-0 max-h-40 overflow-y-auto">
                        <!-- 動態單字卡 -->
                    </div>
                </div>
            </div>
        </div>

        <!-- 字庫 Tab Events -->`;

lines.splice(startIndex, endIndex - startIndex, newPlayerUI);

// Now for JS logic replacements.
let fullText = lines.join('\n');

// Styles for modes
fullText = fullText.replace('</style>', `
        .mode-en-only .zh-text { display: none !important; }
        .mode-zh-only .en-text { display: none !important; }
        .active-sentence { background-color: #f0fdfa !important; border-left: 4px solid #14b8a6; padding-left: 0.5rem; transition: background-color 0.3s; }
    </style>`);

// The DOM injection code
let htmlInjectionStart = fullText.indexOf('const container = document.getElementById(\'listening-text-container\');');
let htmlInjectionEnd = fullText.indexOf('// 萃取單字', htmlInjectionStart);

const newHtmlInjection = `const container = document.getElementById('listening-text-container');
            container.innerHTML = listeningSentences.map((s, i) => {
                let html = '';
                const regex = /\\b[a-zA-Z']+\\b/g;
                let match;
                let lastIndex = 0;
                while ((match = regex.exec(s)) !== null) {
                    html += esc(s.substring(lastIndex, match.index));
                    const wordStr = match[0].toLowerCase().replace(/'/g, "\\\\'");
                    html += \`<span class="listen-word cursor-pointer transition-colors duration-200 border-b-2 border-transparent hover:border-teal-400 rounded px-0.5 mx-px" data-word="\${wordStr}" onclick="event.stopPropagation(); showWordTranslation(event, '\${wordStr}')">\${esc(match[0])}</span>\`;
                    lastIndex = regex.lastIndex;
                }
                html += esc(s.substring(lastIndex));
                return \`
                <div class="mb-5 sentence-block group cursor-pointer p-2 rounded hover:bg-gray-50 transition-colors border-l-4 border-transparent" onclick="playListeningFrom(\${i})">
                    <div id="listen-s-\${i}" class="text-lg text-gray-800 leading-relaxed font-serif en-text transition-colors">\${html}</div>
                    <div id="listen-zh-\${i}" class="text-base text-teal-700 mt-2 font-medium zh-text transition-colors">翻譯載入中...</div>
                </div>\`;
            }).join('');
            
            if (typeof applyTransMode === 'function') applyTransMode();
            
            `;

fullText = fullText.substring(0, htmlInjectionStart) + newHtmlInjection + fullText.substring(htmlInjectionEnd);

// Replace translation setup
let transSetupStart = fullText.indexOf('// 準備翻譯');
let transSetupEnd = fullText.indexOf('// 顯示單字翻譯的 tooltip');

const newTransSetup = `// 準備翻譯
            // 背景逐句呼叫 Google 翻譯
            const fetchTrans = async () => {
                try {
                    const query = listeningSentences.join('\\n');
                    const res = await fetch(\`https://translate.googleapis.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=zh-TW&dt=t&q=\${encodeURIComponent(query)}\`);
                    const data = await res.json();
                    if (data && typeof data[0] === 'string') {
                        const fullZh = data[0];
                        const zhArray = fullZh.split('\\n');
                        for(let i=0; i<listeningSentences.length; i++) {
                            const el = document.getElementById(\`listen-zh-\${i}\`);
                            if(el) {
                                el.innerText = zhArray[i] || '';
                            }
                        }
                    }
                } catch(e) {
                    console.error('Translation failed', e);
                    for(let i=0; i<listeningSentences.length; i++) {
                        const el = document.getElementById(\`listen-zh-\${i}\`);
                        if(el) el.innerText = '翻譯失敗';
                    }
                }
            };
            fetchTrans();
        });

        // 翻譯模式切換
        const modeSelect = document.getElementById('trans-mode-select');
        if (modeSelect) modeSelect.addEventListener('change', applyTransMode);

        function applyTransMode() {
            const mode = document.getElementById('trans-mode-select').value;
            const container = document.getElementById('listening-text-container');
            container.classList.remove('mode-en-only', 'mode-zh-only', 'mode-en-zh');
            container.classList.add('mode-' + mode);
        }

        // 重寫高亮與播放
        function highlightListeningSentence(index) {
            listeningSentences.forEach((_, i) => {
                const block = document.getElementById(\`listen-s-\${i}\`)?.parentElement;
                const enEl = document.getElementById(\`listen-s-\${i}\`);
                const zhEl = document.getElementById(\`listen-zh-\${i}\`);
                
                if (i === index) {
                    if (block) {
                        block.classList.add('active-sentence');
                        // Custom center scroll calculation to avoid jumping
                        const container = document.getElementById('listening-text-container');
                        container.scrollTo({
                            top: block.offsetTop - container.offsetTop - container.clientHeight / 2 + block.clientHeight / 2,
                            behavior: 'smooth'
                        });
                    }
                    if (enEl) enEl.classList.add('text-teal-900', 'font-semibold');
                    if (zhEl) zhEl.classList.add('text-teal-800', 'font-bold');
                } else {
                    if (block) block.classList.remove('active-sentence');
                    if (enEl) enEl.classList.remove('text-teal-900', 'font-semibold');
                    if (zhEl) zhEl.classList.remove('text-teal-800', 'font-bold');
                }
            });
        }

        let listeningUtterance = null;
        let currentListeningWordEl = null;
        let playbackWordIndex = 0;
        let currentSentenceWords = [];
        let ttsInterval = null;

        function playListeningFrom(index) {
            if (index >= listeningSentences.length) {
                stopListening();
                return;
            }
            
            currentListeningIndex = index;
            isListeningPlaying = true;
            updateListeningPlayBtn();
            highlightListeningSentence(index);
            
            if (currentListeningWordEl) {
                currentListeningWordEl.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
                currentListeningWordEl = null;
            }

            window.speechSynthesis.cancel();
            clearInterval(ttsInterval);

            // 準備逐字高亮
            const block = document.getElementById(\`listen-s-\${index}\`);
            currentSentenceWords = block ? Array.from(block.querySelectorAll('.listen-word')) : [];
            playbackWordIndex = 0;

            listeningUtterance = new SpeechSynthesisUtterance(listeningSentences[index]);
            listeningUtterance.lang = 'en-US';
            listeningUtterance.rate = parseFloat(document.getElementById('listening-speed').value);
            
            // 解決 Chrome 長時間播放中斷的 bug
            ttsInterval = setInterval(() => {
                if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                }
            }, 14000);

            // 當單字被發音時高亮
            listeningUtterance.onboundary = function(event) {
                if (event.name === 'word') {
                    // Try to match word index
                    // We increment index for each word boundary
                    if (playbackWordIndex < currentSentenceWords.length) {
                        if (currentListeningWordEl) {
                            currentListeningWordEl.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
                        }
                        const targetEl = currentSentenceWords[playbackWordIndex];
                        if (targetEl) {
                            targetEl.classList.add('bg-teal-500', 'text-white', 'shadow-md');
                            currentListeningWordEl = targetEl;
                        }
                        playbackWordIndex++;
                    }
                }
            };

            listeningUtterance.onend = () => {
                clearInterval(ttsInterval);
                if (currentListeningWordEl) {
                    currentListeningWordEl.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
                    currentListeningWordEl = null;
                }
                if (isListeningPlaying) {
                    // 自動播放下一句，加一點停頓
                    setTimeout(() => playListeningFrom(currentListeningIndex + 1), 300);
                }
            };
            
            listeningUtterance.onerror = (e) => {
                clearInterval(ttsInterval);
                if (currentListeningWordEl) {
                    currentListeningWordEl.classList.remove('bg-teal-500', 'text-white', 'shadow-md');
                    currentListeningWordEl = null;
                }
                isListeningPlaying = false;
                updateListeningPlayBtn();
            };
            
            window.speechSynthesis.speak(listeningUtterance);
        }

        `;

fullText = fullText.substring(0, transSetupStart) + newTransSetup + fullText.substring(transSetupEnd);

// Event Listeners for new buttons
let playBtnStart = fullText.indexOf('document.getElementById(\'btn-stop-listening\').addEventListener(\'click\', stopListening);');
fullText = fullText.substring(0, playBtnStart) + `
        const btnReplaySentence = document.getElementById('btn-replay-sentence');
        if (btnReplaySentence) {
            btnReplaySentence.addEventListener('click', () => {
                if (listeningSentences.length > 0) {
                    playListeningFrom(currentListeningIndex);
                }
            });
        }
        const btnReplayAll = document.getElementById('btn-replay-all');
        if (btnReplayAll) {
            btnReplayAll.addEventListener('click', () => {
                if (listeningSentences.length > 0) {
                    playListeningFrom(0);
                }
            });
        }
        
        document.getElementById('btn-stop-listening').addEventListener('click', stopListening);` + fullText.substring(playBtnStart + 89);


fs.writeFileSync('index.html', fullText, 'utf8');
console.log('Done replacement.');
