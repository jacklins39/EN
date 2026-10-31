// ==========================================
// VocabMaster 打地鼠單字競速賽 (Word Whack Challenge)
// 模組化獨立設計：高解析純向量 SVG 地鼠，出題 100% 精準匹配題庫，支援「慢變快」漸進加速
// ==========================================

(function() {
    'use strict';

    // 遊戲狀態與設定
    let gameState = {
        isRunning: false,
        mode: 'speed',            // 'speed' (倒數極速), 'survival' (3心生存)
        scope: 'current',         // 'current' (單元), 'marked' (⭐標記), 'weak' (弱點), 'all' (全庫)
        speedMode: '5',           // '5', '10', '3', 'progressive' (慢變快), 'custom'
        customStaySeconds: 5,     // 自訂秒數
        audioMode: 'none',        // 'none' (純打擊音效), 'prompt' (出題即朗讀), 'hit' (敲中後朗讀)
        score: 0,
        combo: 0,
        maxCombo: 0,
        hits: 0,
        misses: 0,
        timeLeft: 60,
        lives: 3,
        currentWord: null,
        activeTimer: null,
        moleTimers: [],
        questionPool: [],         // 題目正解池 (100% 嚴格匹配選定範圍)
        roundWrongWords: []       // 本局敲錯/漏打字清單
    };

    // 切斷目前正在播放的任何語音，避免殘留混淆
    function stopCurrentAudio() {
        try {
            if (typeof wordAudioPlayer !== 'undefined' && wordAudioPlayer) {
                wordAudioPlayer.pause();
                wordAudioPlayer.currentTime = 0;
            }
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        } catch (e) {}
    }

    // 依單字長度動態調整字級，短字特大醒目、長字完整呈現不破版
    function getWordFontClass(len) {
        if (len <= 4) return 'text-[15px] sm:text-[16.5px] font-black tracking-normal';
        if (len <= 7) return 'text-[13px] sm:text-[14.5px] font-extrabold tracking-tight';
        if (len <= 10) return 'text-[11.5px] sm:text-[12.5px] font-bold tracking-tight';
        return 'text-[10px] sm:text-[11px] font-bold leading-none tracking-tighter px-0.5';
    }

    // 音效合成器 (Web Audio API 原生合成打擊音與得分鈴聲)
    const SoundFx = {
        ctx: null,
        init() {
            if (!this.ctx) {
                const AudioClass = window.AudioContext || window.webkitAudioContext;
                if (AudioClass) this.ctx = new AudioClass();
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
        },
        playHit() {
            try {
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                // 打擊低頻 (Thud)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(240, now);
                osc.frequency.exponentialRampToValueAtTime(50, now + 0.12);
                gain.gain.setValueAtTime(0.35, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.13);

                // 得分清脆音 (Bell Chime)
                const chime = this.ctx.createOscillator();
                const chimeGain = this.ctx.createGain();
                chime.type = 'sine';
                chime.frequency.setValueAtTime(880, now + 0.03);
                chime.frequency.exponentialRampToValueAtTime(1320, now + 0.2);
                chimeGain.gain.setValueAtTime(0.22, now + 0.03);
                chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
                chime.connect(chimeGain);
                chimeGain.connect(this.ctx.destination);
                chime.start(now + 0.03);
                chime.stop(now + 0.25);
            } catch (e) {}
        },
        playMiss() {
            try {
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(140, now);
                osc.frequency.setValueAtTime(90, now + 0.09);
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.21);
            } catch (e) {}
        }
    };

    // 取得候選單字池 (100% 嚴格匹配使用者選定範圍，絕不擅自 fallback 覆蓋)
    function getGamePool(scope) {
        let pool = [];
        if (scope === 'marked') {
            if (typeof getMarkedWords === 'function') {
                pool = getMarkedWords();
            }
        } else if (scope === 'weak') {
            if (typeof getWeakList === 'function') {
                pool = getWeakList().map(x => x.w);
            }
        } else if (scope === 'current') {
            const curUnit = typeof currentUnit !== 'undefined' ? currentUnit : 1;
            if (typeof vocabularyDB !== 'undefined') {
                pool = vocabularyDB.filter(w => (w.unit || Math.ceil(w.id / 1000) || 1) === curUnit);
            }
        } else if (scope === 'all') {
            if (typeof vocabularyDB !== 'undefined') {
                pool = vocabularyDB;
            }
        }
        return (pool || []).filter(w => w && w.en && w.zh);
    }

    // 取得干擾選項 (以全字庫為基底挑選同詞性干擾項，避免題庫單字少時抽不到干擾)
    function pickDistractors(targetWord, count = 2) {
        const fullPool = (typeof vocabularyDB !== 'undefined' && Array.isArray(vocabularyDB) && vocabularyDB.length >= 10)
            ? vocabularyDB
            : (gameState.questionPool || []);

        const targetZh = targetWord.zh || '';
        const norm = s => String(s || '').toLowerCase().trim();
        const targetPos = (typeof extractPos === 'function') ? extractPos(targetZh, targetWord.pos) : [];

        let candidates = fullPool.filter(w => w.id !== targetWord.id && norm(w.en) !== norm(targetWord.en));
        if (targetPos.length > 0 && typeof hasOverlappingPos === 'function') {
            const posMatched = candidates.filter(w => hasOverlappingPos(w, targetPos));
            if (posMatched.length >= count * 3) candidates = posMatched;
        }

        const picked = [];
        const seen = new Set([norm(targetWord.en)]);
        for (let i = 0; i < 150 && picked.length < count; i++) {
            const r = candidates[Math.floor(Math.random() * candidates.length)];
            if (r && !seen.has(norm(r.en))) {
                seen.add(norm(r.en));
                picked.push(r);
            }
        }
        return picked;
    }

    // 計算當前題目的地鼠停留秒數
    function getCurrentStayDurationMs() {
        if (gameState.speedMode === 'progressive') {
            // 慢變快模式：從 8.0 秒起步，每敲中 1 題提速 0.35 秒，最快飆至 1.3 秒！
            const duration = Math.max(1300, 8000 - (gameState.hits * 350));
            return duration;
        }
        if (gameState.speedMode === 'custom') {
            return Math.max(1000, gameState.customStaySeconds * 1000);
        }
        const sec = parseInt(gameState.speedMode, 10) || 5;
        return Math.max(1000, sec * 1000);
    }

    // 產生 3x3 地鼠洞 HTML (純向量 SVG，零毛邊高畫質)
    function renderHolesGrid() {
        const grid = document.getElementById('whack-holes-grid');
        if (!grid) return;
        let html = '';
        for (let i = 0; i < 9; i++) {
            html += `
                <div class="whack-hole relative aspect-square bg-gradient-to-b from-[#63391A]/25 to-[#42220A]/40 dark:from-slate-800/80 dark:to-slate-900/90 rounded-3xl border-2 border-amber-900/30 dark:border-slate-700/60 overflow-hidden flex items-end justify-center shadow-inner cursor-pointer select-none group" data-hole-idx="${i}">
                    <!-- 土堆草地地洞底飾 -->
                    <div class="absolute inset-x-2 bottom-1 h-3 rounded-full bg-amber-950/40 dark:bg-slate-950/70 blur-xs"></div>
                    <div class="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-emerald-800/80 to-transparent dark:from-emerald-950/60 pointer-events-none rounded-b-3xl"></div>
                    
                    <!-- 地鼠本體 (純向量 SVG，無鋸齒白邊) -->
                    <div id="mole-${i}" class="mole-actor absolute inset-x-0 bottom-0 top-0.5 flex flex-col items-center justify-end transform translate-y-[115%] transition-transform duration-250 ease-out pointer-events-none" data-hole="${i}">
                        <!-- 單字告示牌 (加大高對比度卡片，支援動態字級) -->
                        <div class="mole-word-sign mb-1 px-1.5 py-1 w-[96%] max-w-[98%] bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl shadow-md border-2 border-amber-900/20 dark:border-slate-600 text-center select-none pointer-events-auto cursor-pointer active:scale-95 transition-transform flex items-center justify-center min-h-[30px]">
                            <span class="mole-word-text font-black tracking-tight break-all">word</span>
                        </div>
                        <!-- 向量地鼠 (svg) -->
                        <img id="mole-img-${i}" src="images/mole_normal.svg" alt="mole" class="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm select-none pointer-events-auto cursor-pointer active:scale-90 transition-transform">
                    </div>

                    <!-- 敲中浮動飄字特效 (+100) -->
                    <div id="hit-float-${i}" class="hidden pointer-events-none absolute inset-0 flex items-center justify-center font-black text-amber-400 text-xl sm:text-2xl drop-shadow-md z-30 transition-all">
                        +100
                    </div>
                </div>
            `;
        }
        grid.innerHTML = html;

        // 綁定九宮格點擊
        grid.querySelectorAll('.whack-hole').forEach(hole => {
            hole.addEventListener('click', (e) => {
                const idx = Number(hole.dataset.holeIdx);
                handleHoleClick(idx, e);
            });
        });
    }

    // 啟動單一地鼠冒出
    function spawnMole(holeIdx, wordObj, isCorrect, stayDurationMs) {
        const actor = document.getElementById(`mole-${holeIdx}`);
        const img = document.getElementById(`mole-img-${holeIdx}`);
        if (!actor || !img) return;

        actor.dataset.word = wordObj.en;
        actor.dataset.wordId = wordObj.id;
        actor.dataset.isCorrect = isCorrect ? 'true' : 'false';
        
        const textEl = actor.querySelector('.mole-word-text');
        if (textEl) {
            textEl.textContent = wordObj.en;
            textEl.className = `mole-word-text break-all ${getWordFontClass(wordObj.en.length)}`;
        }
        img.src = 'images/mole_normal.svg';

        // 探頭冒出
        actor.classList.remove('translate-y-[115%]');
        actor.classList.add('translate-y-[5%]');

        // 依設定秒數自動縮回
        const timerId = setTimeout(() => {
            retractMole(holeIdx);
            if (isCorrect && gameState.isRunning) {
                // 正確地鼠縮回且未被敲中 = 漏打
                onMoleMissed(wordObj);
            }
        }, stayDurationMs);

        gameState.moleTimers.push(timerId);
    }

    // 縮回地鼠
    function retractMole(holeIdx) {
        const actor = document.getElementById(`mole-${holeIdx}`);
        if (!actor) return;
        actor.classList.remove('translate-y-[5%]');
        actor.classList.add('translate-y-[115%]');
    }

    // 清空所有冒頭地鼠
    function clearAllMoles() {
        gameState.moleTimers.forEach(t => clearTimeout(t));
        gameState.moleTimers = [];
        for (let i = 0; i < 9; i++) {
            retractMole(i);
        }
    }

    // 播放敲中飄字與暈眩動畫
    function triggerHitAnim(holeIdx, scoreGained) {
        const floatEl = document.getElementById(`hit-float-${holeIdx}`);
        const img = document.getElementById(`mole-img-${holeIdx}`);
        if (img) img.src = 'images/mole_dizzy.svg';

        if (floatEl) {
            floatEl.textContent = `+${scoreGained}`;
            floatEl.className = 'pointer-events-none absolute inset-0 flex items-center justify-center font-black text-amber-400 text-xl sm:text-2xl drop-shadow-md z-30 animate-bounce';
            setTimeout(() => {
                floatEl.className = 'hidden';
            }, 500);
        }
    }

    // 處理洞口點擊 (敲地鼠)
    function handleHoleClick(holeIdx, e) {
        if (!gameState.isRunning) return;
        if (typeof unlockMobileAudio === 'function') unlockMobileAudio();

        const actor = document.getElementById(`mole-${holeIdx}`);
        if (!actor || actor.classList.contains('translate-y-[115%]')) return;

        const isCorrect = actor.dataset.isCorrect === 'true';
        const wordEn = actor.dataset.word;

        if (isCorrect) {
            // 敲中正確答案！
            gameState.hits++;
            gameState.combo++;
            if (gameState.combo > gameState.maxCombo) gameState.maxCombo = gameState.combo;

            // 計算分數 (連擊加乘)
            const multiplier = gameState.combo >= 10 ? 2.0 : (gameState.combo >= 5 ? 1.5 : 1.0);
            const scoreGained = Math.round(100 * multiplier);
            gameState.score += scoreGained;

            SoundFx.playHit();
            triggerHitAnim(holeIdx, scoreGained);

            // 朗讀該單字真人發音 (若設定為敲中後朗讀)
            if (gameState.audioMode === 'hit' && typeof playAudio === 'function' && wordEn) {
                playAudio(wordEn);
            }

            updateScoreboardUI();

            // 敲中後短暫暈眩 280ms 即進入下一題 (不用傻等秒數跑完！)
            setTimeout(() => {
                clearAllMoles();
                if (gameState.isRunning) nextQuestion();
            }, 300);

        } else {
            // 敲錯干擾地鼠！
            gameState.misses++;
            gameState.combo = 0;
            SoundFx.playMiss();

            // 晃動懲罰
            actor.classList.add('animate-shake');
            setTimeout(() => actor.classList.remove('animate-shake'), 400);

            // 記錄敲錯的字
            if (gameState.currentWord && !gameState.roundWrongWords.find(w => w.id === gameState.currentWord.id)) {
                gameState.roundWrongWords.push(gameState.currentWord);
            }

            // 扣懲罰
            if (gameState.mode === 'speed') {
                gameState.timeLeft = Math.max(0, gameState.timeLeft - 2); // 扣 2 秒
            } else if (gameState.mode === 'survival') {
                gameState.lives = Math.max(0, gameState.lives - 1);
                if (gameState.lives <= 0) {
                    endGame('💀 生命耗盡！');
                    return;
                }
            }

            updateScoreboardUI();
        }
    }

    // 漏打處理 (地鼠鑽回)
    function onMoleMissed(wordObj) {
        if (!gameState.isRunning) return;
        gameState.combo = 0;
        if (wordObj && !gameState.roundWrongWords.find(w => w.id === wordObj.id)) {
            gameState.roundWrongWords.push(wordObj);
        }
        if (gameState.mode === 'survival') {
            gameState.lives = Math.max(0, gameState.lives - 1);
            if (gameState.lives <= 0) {
                endGame('💀 錯失太多地鼠！');
                return;
            }
        }
        updateScoreboardUI();
        // 漏打後接續下一題
        setTimeout(() => {
            if (gameState.isRunning) nextQuestion();
        }, 200);
    }

    // 開出下一題 (100% 嚴格從玩家指定的題庫抽取正解！)
    function nextQuestion() {
        if (!gameState.isRunning) return;

        // 換題時立即切斷前一題殘留語音，絕不造成聽覺混淆！
        stopCurrentAudio();

        const pool = gameState.questionPool;
        if (!pool || pool.length === 0) return;

        // 100% 絕對從玩家選定的題庫出題 (如: ⭐ 標記單字)
        const targetWord = pool[Math.floor(Math.random() * pool.length)];
        gameState.currentWord = targetWord;

        // 若為「出題即朗讀」聽力模式，出題當下即朗讀目標單字，視覺聽覺完全同步
        if (gameState.audioMode === 'prompt' && typeof playAudio === 'function' && targetWord.en) {
            playAudio(targetWord.en);
        }

        // 更新題目標題 (中文與詞性)
        const parsed = (typeof splitPosAndZh === 'function') ? splitPosAndZh(targetWord.zh, targetWord.pos) : { pos: '', pureZh: targetWord.zh };
        const concise = (typeof getConciseZh === 'function') ? (getConciseZh(targetWord.zh, targetWord.pos) || parsed.pureZh || targetWord.zh) : targetWord.zh;
        const targetEl = document.getElementById('whack-target-zh');
        const posEl = document.getElementById('whack-target-pos');
        if (targetEl) targetEl.textContent = concise;
        if (posEl) {
            posEl.textContent = parsed.pos || '';
            posEl.classList.toggle('hidden', !parsed.pos);
        }

        // 挑選 1~2 隻干擾地鼠 (從全字庫挑同詞性字干擾)
        const distractors = pickDistractors(targetWord, 2);
        const candidates = [
            { word: targetWord, isCorrect: true },
            ...distractors.map(d => ({ word: d, isCorrect: false }))
        ];
        candidates.sort(() => Math.random() - 0.5);

        // 隨機選擇 2~3 個互不重複的洞口
        const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5).slice(0, candidates.length);

        // 動態計算此題停留秒數 (支援慢變快)
        const stayDurationMs = getCurrentStayDurationMs();

        // 即時顯示「慢變快」當前反應秒數提示
        const speedHintEl = document.getElementById('whack-speed-indicator');
        if (speedHintEl) {
            const curSec = (stayDurationMs / 1000).toFixed(1);
            speedHintEl.textContent = gameState.speedMode === 'progressive' ? `⚡ 慢變快: ${curSec}s` : `⏱️ ${curSec}s`;
        }

        candidates.forEach((cand, idx) => {
            spawnMole(holes[idx], cand.word, cand.isCorrect, stayDurationMs);
        });
    }

    // 更新計分板 UI
    function updateScoreboardUI() {
        const scoreEl = document.getElementById('whack-score');
        const comboEl = document.getElementById('whack-combo');
        const timeEl = document.getElementById('whack-timer');
        const livesEl = document.getElementById('whack-lives');

        if (scoreEl) scoreEl.textContent = gameState.score;
        if (comboEl) {
            comboEl.textContent = `Combo x${gameState.combo}`;
            comboEl.classList.toggle('opacity-0', gameState.combo < 2);
        }
        if (timeEl && gameState.mode === 'speed') {
            timeEl.textContent = `${gameState.timeLeft}s`;
            timeEl.classList.toggle('text-rose-500', gameState.timeLeft <= 10);
        }
        if (livesEl && gameState.mode === 'survival') {
            livesEl.innerHTML = '❤️'.repeat(gameState.lives) + '🖤'.repeat(Math.max(0, 3 - gameState.lives));
        }
    }

    // 開始遊戲
    function startGame() {
        SoundFx.init();
        if (typeof unlockMobileAudio === 'function') unlockMobileAudio();

        const scopeSel = document.getElementById('whack-scope-select');
        const modeSel = document.getElementById('whack-mode-select');
        const speedSel = document.getElementById('whack-speed-select');
        const customInput = document.getElementById('whack-speed-custom');
        const audioSel = document.getElementById('whack-audio-mode-select');

        gameState.scope = scopeSel ? scopeSel.value : 'current';
        gameState.mode = modeSel ? modeSel.value : 'speed';
        gameState.speedMode = speedSel ? speedSel.value : '5';
        gameState.audioMode = audioSel ? audioSel.value : (localStorage.getItem('whack_audio_mode') || 'none');

        if (gameState.speedMode === 'custom') {
            gameState.customStaySeconds = customInput ? Math.max(1, Math.min(30, parseInt(customInput.value, 10) || 5)) : 5;
        }

        // 100% 嚴格取得指定題庫
        gameState.questionPool = getGamePool(gameState.scope);

        // 如果玩家選「⭐ 我的標記單字」但目前 0 筆標記
        if (!gameState.questionPool || gameState.questionPool.length === 0) {
            if (gameState.scope === 'marked') {
                if (typeof showQuickToast === 'function') {
                    showQuickToast('⚠️ 目前尚未標記任何單字！請先至單字庫點 ☆ 標記單字再來玩喔！');
                }
            } else if (gameState.scope === 'weak') {
                if (typeof showQuickToast === 'function') {
                    showQuickToast('🎉 太棒了！目前沒有任何弱點錯題單字！');
                }
            } else {
                if (typeof showQuickToast === 'function') {
                    showQuickToast('⚠️ 此題庫目前無可用單字！');
                }
            }
            return;
        }

        gameState.isRunning = true;
        gameState.score = 0;
        gameState.combo = 0;
        gameState.maxCombo = 0;
        gameState.hits = 0;
        gameState.misses = 0;
        gameState.timeLeft = 60;
        gameState.lives = 3;
        gameState.roundWrongWords = [];

        // UI 切換至進行中
        document.getElementById('whack-lobby-panel')?.classList.add('hidden');
        document.getElementById('whack-game-panel')?.classList.remove('hidden');
        document.getElementById('whack-result-modal')?.classList.add('hidden');

        // 生存模式隱藏倒數計時，顯示愛心
        const timeBadge = document.getElementById('whack-time-badge');
        const livesBadge = document.getElementById('whack-lives-badge');
        if (timeBadge) timeBadge.classList.toggle('hidden', gameState.mode !== 'speed');
        if (livesBadge) livesBadge.classList.toggle('hidden', gameState.mode !== 'survival');

        updateScoreboardUI();

        // 倒數計時器 (限時賽)
        if (gameState.mode === 'speed') {
            if (gameState.activeTimer) clearInterval(gameState.activeTimer);
            gameState.activeTimer = setInterval(() => {
                if (!gameState.isRunning) return;
                gameState.timeLeft--;
                updateScoreboardUI();
                if (gameState.timeLeft <= 0) {
                    endGame('⏰ 時間到！');
                }
            }, 1000);
        }

        nextQuestion();
    }

    // 結束遊戲並彈出戰報
    function endGame(reasonText = '遊戲結束') {
        gameState.isRunning = false;
        stopCurrentAudio();
        if (gameState.activeTimer) {
            clearInterval(gameState.activeTimer);
            gameState.activeTimer = null;
        }
        clearAllMoles();

        // 儲存最高分
        const recordKey = `whack_highscore_${gameState.mode}`;
        const prevBest = Number(localStorage.getItem(recordKey) || 0);
        const isNewRecord = gameState.score > prevBest;
        if (isNewRecord && gameState.score > 0) {
            localStorage.setItem(recordKey, String(gameState.score));
        }

        // 灑花慶祝 (破紀錄或高分時)
        if (gameState.score >= 400 && typeof confetti === 'function') {
            try { confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } }); } catch (e) {}
        }

        // 渲染結算視窗
        const modal = document.getElementById('whack-result-modal');
        const titleEl = document.getElementById('whack-result-title');
        const scoreEl = document.getElementById('whack-result-score');
        const statsEl = document.getElementById('whack-result-stats');
        const reviewListEl = document.getElementById('whack-wrong-list');

        if (titleEl) titleEl.textContent = reasonText;
        if (scoreEl) {
            scoreEl.innerHTML = `
                <div class="text-4xl sm:text-5xl font-black text-[#0071E3] tracking-tight mb-1">${gameState.score}</div>
                <div class="text-xs text-slate-500 font-medium">${isNewRecord ? '🎉 創下個人新紀錄！' : `歷史最高: ${prevBest} 分`}</div>
            `;
        }
        if (statsEl) {
            const total = gameState.hits + gameState.misses;
            const accuracy = total > 0 ? Math.round((gameState.hits / total) * 100) : 0;
            statsEl.innerHTML = `
                <div class="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl text-center">
                    <span class="text-[11px] text-slate-400 block font-medium">擊中單字</span>
                    <strong class="text-base text-slate-800 dark:text-white font-extrabold">${gameState.hits}</strong>
                </div>
                <div class="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl text-center">
                    <span class="text-[11px] text-slate-400 block font-medium">最高連擊</span>
                    <strong class="text-base text-amber-500 font-extrabold">${gameState.maxCombo}</strong>
                </div>
                <div class="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-2xl text-center">
                    <span class="text-[11px] text-slate-400 block font-medium">精準度</span>
                    <strong class="text-base text-emerald-600 font-extrabold">${accuracy}%</strong>
                </div>
            `;
        }

        // 錯題覆盤清單 (可發音、一鍵 ⭐ 標記)
        if (reviewListEl) {
            const wrongs = gameState.roundWrongWords;
            if (wrongs.length === 0) {
                reviewListEl.innerHTML = '<p class="text-center text-xs text-emerald-600 font-medium py-3">太厲害了！本局全數命中，零失誤 🎉</p>';
            } else {
                reviewListEl.innerHTML = wrongs.map(w => {
                    const marked = typeof isWordMarked === 'function' ? isWordMarked(w.id) : false;
                    return `
                        <div class="flex items-center justify-between py-2 px-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs border border-slate-100 dark:border-slate-700">
                            <div class="min-w-0 pr-2">
                                <span class="font-bold text-slate-900 dark:text-white text-sm">${w.en}</span>
                                <span class="text-slate-500 dark:text-slate-400 truncate block text-[11px]">${w.zh || ''}</span>
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0">
                                <button type="button" class="p-1 text-indigo-500 hover:text-[#0071E3]" onclick="playAudio('${w.en}')" title="聆聽發音">🔊</button>
                                <button type="button" class="whack-mark-btn p-1 text-base ${marked ? 'text-amber-400' : 'text-gray-300'}" data-wid="${w.id}" title="加入 ⭐ 標記">
                                    ${marked ? '⭐' : '☆'}
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');

                // 綁定錯題清單中的 ⭐ 標記
                reviewListEl.querySelectorAll('.whack-mark-btn').forEach(b => {
                    b.addEventListener('click', () => {
                        const wid = b.dataset.wid;
                        if (typeof toggleWordMark === 'function') {
                            const on = toggleWordMark(wid);
                            b.textContent = on ? '⭐' : '☆';
                            b.className = `whack-mark-btn p-1 text-base ${on ? 'text-amber-400' : 'text-gray-300'}`;
                            if (typeof showQuickToast === 'function') showQuickToast(on ? '⭐ 已加入標記' : '已取消標記');
                        }
                    });
                });
            }
        }

        if (modal) modal.classList.remove('hidden');
    }

    // 退出遊戲回到大廳
    function quitToLobby() {
        gameState.isRunning = false;
        stopCurrentAudio();
        if (gameState.activeTimer) {
            clearInterval(gameState.activeTimer);
            gameState.activeTimer = null;
        }
        clearAllMoles();
        document.getElementById('whack-game-panel')?.classList.add('hidden');
        document.getElementById('whack-result-modal')?.classList.add('hidden');
        document.getElementById('whack-lobby-panel')?.classList.remove('hidden');
        updateLobbyScopeCounts();
    }

    // 更新大廳字庫選單的單字數量顯示 (一目了然)
    function updateLobbyScopeCounts() {
        const scopeSel = document.getElementById('whack-scope-select');
        if (!scopeSel) return;

        const curUnit = typeof currentUnit !== 'undefined' ? currentUnit : 1;
        const curUnitWords = (typeof vocabularyDB !== 'undefined') ? vocabularyDB.filter(w => (w.unit || Math.ceil(w.id / 1000) || 1) === curUnit) : [];
        const markedWords = typeof getMarkedWords === 'function' ? getMarkedWords() : [];
        const weakWords = typeof getWeakList === 'function' ? getWeakList() : [];
        const totalWords = typeof vocabularyDB !== 'undefined' ? vocabularyDB.length : 0;

        const optCur = scopeSel.querySelector('option[value="current"]');
        const optMarked = scopeSel.querySelector('option[value="marked"]');
        const optWeak = scopeSel.querySelector('option[value="weak"]');
        const optAll = scopeSel.querySelector('option[value="all"]');

        if (optCur) optCur.textContent = `📖 當前單元單字 (${curUnitWords.length} 字)`;
        if (optMarked) optMarked.textContent = `⭐ 我的標記單字 (${markedWords.length} 字・專打收藏字)`;
        if (optWeak) optWeak.textContent = `🔴 弱點錯題單字 (${weakWords.length} 字)`;
        if (optAll) optAll.textContent = `🌍 全字庫大亂鬥 (${totalWords} 字)`;
    }

    // 初始化視圖
    function initWhackGameView() {
        renderHolesGrid();
        updateLobbyScopeCounts();

        // 綁定大廳控制
        document.getElementById('btn-whack-start')?.addEventListener('click', startGame);
        document.getElementById('btn-whack-quit')?.addEventListener('click', quitToLobby);
        document.getElementById('btn-whack-restart')?.addEventListener('click', startGame);
        document.getElementById('btn-whack-close-result')?.addEventListener('click', quitToLobby);

        // 自訂秒數切換顯示
        const speedSel = document.getElementById('whack-speed-select');
        const customWrapper = document.getElementById('whack-speed-custom-wrapper');
        if (speedSel && customWrapper) {
            speedSel.addEventListener('change', () => {
                customWrapper.classList.toggle('hidden', speedSel.value !== 'custom');
            });
        }

        // 載入與記憶語音模式偏好
        const audioSel = document.getElementById('whack-audio-mode-select');
        if (audioSel) {
            const savedAudioMode = localStorage.getItem('whack_audio_mode') || 'none';
            audioSel.value = savedAudioMode;
            audioSel.addEventListener('change', () => {
                localStorage.setItem('whack_audio_mode', audioSel.value);
            });
        }

        // 音訊重播按鈕
        document.getElementById('btn-whack-target-audio')?.addEventListener('click', () => {
            if (gameState.currentWord && typeof playAudio === 'function') {
                playAudio(gameState.currentWord.en);
            }
        });

        // 載入歷史最高分
        const bestSpeed = localStorage.getItem('whack_highscore_speed') || '0';
        const bestSurv = localStorage.getItem('whack_highscore_survival') || '0';
        const bestSpeedEl = document.getElementById('whack-best-speed');
        const bestSurvEl = document.getElementById('whack-best-surv');
        if (bestSpeedEl) bestSpeedEl.textContent = `${bestSpeed} 分`;
        if (bestSurvEl) bestSurvEl.textContent = `${bestSurv} 分`;
    }

    // 註冊全域進入點
    window.initWhackGameView = initWhackGameView;
    window.quitWhackGame = quitToLobby;

})();
