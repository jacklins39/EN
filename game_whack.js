// ==========================================
// VocabMaster 打地鼠單字競速賽 (Word Whack Challenge)
// 模組化獨立設計：與主程式完全解耦，零干擾現有學習紀錄
// ==========================================

(function() {
    'use strict';

    // 遊戲狀態與設定
    const GAME_CONFIG = {
        SPEED_INITIAL: 1800,  // 初始停留毫秒 (1.8s)
        SPEED_MIN: 950,       // 最快停留毫秒 (0.95s)
        SPEED_DECAY: 35,      // 每答對一題加速毫秒
        ROUND_TIME: 60,       // 極速賽 60 秒
        LIVES_INITIAL: 3,     // 生存賽 3 顆心
        TOTAL_HOLES: 9        // 3x3 九宮格
    };

    let gameState = {
        isRunning: false,
        mode: 'speed',        // 'speed' (60秒), 'survival' (3心), 'rush20' (20題)
        scope: 'current',     // 'current' (當前單元), 'marked' (⭐標記字), 'weak' (弱點字), 'all' (全字庫)
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
        questionPool: [],
        roundWrongWords: []   // 本局敲錯/漏打字清單 (供結算覆盤)
    };

    // 音效合成器 (Web Audio API 原生合成打擊音與得分鈴聲，零依賴零延遲)
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
                // 打擊低頻音 (Thud / Punch)
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.13);

                // 得分清脆泛音 (Bell chime)
                const chime = this.ctx.createOscillator();
                const chimeGain = this.ctx.createGain();
                chime.type = 'sine';
                chime.frequency.setValueAtTime(880, now + 0.03);
                chime.frequency.exponentialRampToValueAtTime(1320, now + 0.18);
                chimeGain.gain.setValueAtTime(0.2, now + 0.03);
                chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
                chime.connect(chimeGain);
                chimeGain.connect(this.ctx.destination);
                chime.start(now + 0.03);
                chime.stop(now + 0.23);
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
                osc.frequency.setValueAtTime(90, now + 0.08);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.21);
            } catch (e) {}
        }
    };

    // 取得候選單字池
    function getGamePool(scope) {
        let pool = [];
        if (scope === 'marked') {
            if (typeof getMarkedWords === 'function') pool = getMarkedWords();
        } else if (scope === 'weak') {
            if (typeof getWeakList === 'function') pool = getWeakList().map(x => x.w);
        } else if (scope === 'current') {
            const curUnit = typeof currentUnit !== 'undefined' ? currentUnit : 1;
            if (typeof vocabularyDB !== 'undefined') {
                pool = vocabularyDB.filter(w => (w.unit || Math.ceil(w.id / 1000) || 1) === curUnit);
            }
        }
        if (!pool || pool.length < 5) {
            pool = typeof vocabularyDB !== 'undefined' ? vocabularyDB.slice(0, 1000) : [];
        }
        return pool.filter(w => w && w.en && w.zh);
    }

    // 取得干擾選項 (同詞性優先)
    function pickDistractors(targetWord, fullPool, count = 2) {
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
        for (let i = 0; i < 100 && picked.length < count; i++) {
            const r = candidates[Math.floor(Math.random() * candidates.length)];
            if (r && !seen.has(norm(r.en))) {
                seen.add(norm(r.en));
                picked.push(r);
            }
        }
        return picked;
    }

    // 產生 3x3 地鼠洞 HTML
    function renderHolesGrid() {
        const grid = document.getElementById('whack-holes-grid');
        if (!grid) return;
        let html = '';
        for (let i = 0; i < GAME_CONFIG.TOTAL_HOLES; i++) {
            html += `
                <div class="whack-hole relative aspect-square bg-gradient-to-b from-amber-950/20 to-amber-900/40 dark:from-slate-800/80 dark:to-slate-900/90 rounded-3xl border-2 border-amber-900/30 dark:border-slate-700/60 overflow-hidden flex items-end justify-center shadow-inner cursor-pointer select-none group" data-hole-idx="${i}">
                    <!-- 土堆草地地洞底飾 -->
                    <div class="absolute inset-x-2 bottom-1 h-3 rounded-full bg-amber-950/40 dark:bg-slate-950/70 blur-xs"></div>
                    <div class="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-emerald-800/80 to-transparent dark:from-emerald-950/60 pointer-events-none rounded-b-3xl"></div>
                    
                    <!-- 地鼠本體 (預設沉在洞下 translateY 110%) -->
                    <div id="mole-${i}" class="mole-actor absolute inset-x-0 bottom-0 top-1 flex flex-col items-center justify-end transform translate-y-[115%] transition-transform duration-200 ease-out pointer-events-none" data-hole="${i}">
                        <!-- 單字氣泡告示牌 (醒目易讀) -->
                        <div class="mole-word-sign mb-1 px-2 py-0.5 max-w-[92%] bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md border border-slate-200/90 dark:border-slate-600 truncate text-center select-none pointer-events-auto cursor-pointer active:scale-95 transition-transform">
                            <span class="mole-word-text">word</span>
                        </div>
                        <!-- 地鼠 3D 圖片 -->
                        <img id="mole-img-${i}" src="images/mole_normal.png" alt="mole" class="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md select-none pointer-events-auto cursor-pointer active:scale-90 transition-transform">
                    </div>

                    <!-- 敲中浮動飄字特效 (+100) -->
                    <div id="hit-float-${i}" class="hidden pointer-events-none absolute inset-0 flex items-center justify-center font-black text-amber-400 text-lg sm:text-2xl drop-shadow-md z-30 transition-all">
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
    function spawnMole(holeIdx, wordObj, isCorrect, stayDuration) {
        const actor = document.getElementById(`mole-${holeIdx}`);
        const img = document.getElementById(`mole-img-${holeIdx}`);
        if (!actor || !img) return;

        actor.dataset.word = wordObj.en;
        actor.dataset.wordId = wordObj.id;
        actor.dataset.isCorrect = isCorrect ? 'true' : 'false';
        actor.querySelector('.mole-word-text').textContent = wordObj.en;
        img.src = 'images/mole_normal.png';

        // 探頭冒出
        actor.classList.remove('translate-y-[115%]');
        actor.classList.add('translate-y-[8%]');

        // 倒數自動縮回
        const timerId = setTimeout(() => {
            retractMole(holeIdx);
            if (isCorrect && gameState.isRunning) {
                // 正確地鼠縮回且沒被敲中 = 漏打
                onMoleMissed(wordObj);
            }
        }, stayDuration);

        gameState.moleTimers.push(timerId);
    }

    // 縮回地鼠
    function retractMole(holeIdx) {
        const actor = document.getElementById(`mole-${holeIdx}`);
        if (!actor) return;
        actor.classList.remove('translate-y-[8%]');
        actor.classList.add('translate-y-[115%]');
    }

    // 清空所有正在冒頭的地鼠
    function clearAllMoles() {
        gameState.moleTimers.forEach(t => clearTimeout(t));
        gameState.moleTimers = [];
        for (let i = 0; i < GAME_CONFIG.TOTAL_HOLES; i++) {
            retractMole(i);
        }
    }

    // 播放敲中飄字與暈眩動畫
    function triggerHitAnim(holeIdx, scoreGained) {
        const floatEl = document.getElementById(`hit-float-${holeIdx}`);
        const img = document.getElementById(`mole-img-${holeIdx}`);
        if (img) img.src = 'images/mole_dizzy.png';

        if (floatEl) {
            floatEl.textContent = `+${scoreGained}`;
            floatEl.className = 'pointer-events-none absolute inset-0 flex items-center justify-center font-black text-amber-400 text-xl sm:text-2xl drop-shadow-md z-30 animate-bounce';
            setTimeout(() => {
                floatEl.className = 'hidden';
            }, 550);
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

            // 計算分數 (連擊加乘：Combo >= 5 x1.5, >= 10 x2.0)
            const multiplier = gameState.combo >= 10 ? 2.0 : (gameState.combo >= 5 ? 1.5 : 1.0);
            const scoreGained = Math.round(100 * multiplier);
            gameState.score += scoreGained;

            SoundFx.playHit();
            triggerHitAnim(holeIdx, scoreGained);

            // 朗讀該單字真人發音
            if (typeof playAudio === 'function' && wordEn) {
                playAudio(wordEn);
            }

            updateScoreboardUI();

            // 敲中後 250ms 縮回並立即出下一題
            setTimeout(() => {
                clearAllMoles();
                if (gameState.isRunning) nextQuestion();
            }, 260);

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
        }, 150);
    }

    // 開出下一題
    function nextQuestion() {
        if (!gameState.isRunning) return;

        // 挑選目標單字
        const pool = gameState.questionPool;
        if (!pool || pool.length === 0) return;
        const targetWord = pool[Math.floor(Math.random() * pool.length)];
        gameState.currentWord = targetWord;

        // 更新題目標題
        const parsed = (typeof splitPosAndZh === 'function') ? splitPosAndZh(targetWord.zh, targetWord.pos) : { pos: '', pureZh: targetWord.zh };
        const concise = (typeof getConciseZh === 'function') ? (getConciseZh(targetWord.zh, targetWord.pos) || parsed.pureZh || targetWord.zh) : targetWord.zh;
        const targetEl = document.getElementById('whack-target-zh');
        const posEl = document.getElementById('whack-target-pos');
        if (targetEl) targetEl.textContent = concise;
        if (posEl) {
            posEl.textContent = parsed.pos || '';
            posEl.classList.toggle('hidden', !parsed.pos);
        }

        // 挑選 1~2 隻干擾地鼠
        const distractors = pickDistractors(targetWord, pool, 2);
        const candidates = [
            { word: targetWord, isCorrect: true },
            ...distractors.map(d => ({ word: d, isCorrect: false }))
        ];
        candidates.sort(() => Math.random() - 0.5);

        // 隨機選擇 2~3 個互不重複的洞口
        const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5).slice(0, candidates.length);

        // 動態計算停留速度 (每答對一題加速)
        const curSpeed = Math.max(
            GAME_CONFIG.SPEED_MIN,
            GAME_CONFIG.SPEED_INITIAL - (gameState.hits * GAME_CONFIG.SPEED_DECAY)
        );

        candidates.forEach((cand, idx) => {
            spawnMole(holes[idx], cand.word, cand.isCorrect, curSpeed);
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
        gameState.scope = scopeSel ? scopeSel.value : 'current';
        gameState.mode = modeSel ? modeSel.value : 'speed';

        gameState.questionPool = getGamePool(gameState.scope);
        if (gameState.questionPool.length < 4) {
            if (typeof showQuickToast === 'function') showQuickToast('⚠️ 此題庫單字量不足，請換個題庫！');
            return;
        }

        gameState.isRunning = true;
        gameState.score = 0;
        gameState.combo = 0;
        gameState.maxCombo = 0;
        gameState.hits = 0;
        gameState.misses = 0;
        gameState.timeLeft = GAME_CONFIG.ROUND_TIME;
        gameState.lives = GAME_CONFIG.LIVES_INITIAL;
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
        if (gameState.score >= 500 && typeof confetti === 'function') {
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

        // 錯題覆盤清單 (可一鍵 ⭐ 加入標記)
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
        if (gameState.activeTimer) {
            clearInterval(gameState.activeTimer);
            gameState.activeTimer = null;
        }
        clearAllMoles();
        document.getElementById('whack-game-panel')?.classList.add('hidden');
        document.getElementById('whack-result-modal')?.classList.add('hidden');
        document.getElementById('whack-lobby-panel')?.classList.remove('hidden');
    }

    // 初始化視圖
    function initWhackGameView() {
        renderHolesGrid();

        // 綁定大廳按鈕
        document.getElementById('btn-whack-start')?.addEventListener('click', startGame);
        document.getElementById('btn-whack-quit')?.addEventListener('click', quitToLobby);
        document.getElementById('btn-whack-restart')?.addEventListener('click', startGame);
        document.getElementById('btn-whack-close-result')?.addEventListener('click', quitToLobby);

        // 音訊按鈕
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
