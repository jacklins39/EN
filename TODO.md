# TODO (明天做)

## Firebase / Google Cloud 後台 (專案 githuben-e26eb)
- [x] 1. Firestore 規則：Firebase Console → Firestore Database → 規則 → 貼上 `firestore.rules` → 發布 (最重要)
- [x] 2. 限制 API key：https://console.cloud.google.com/apis/credentials
  - 點 Browser key (`AIzaSyDwt...Ph4rg`)
  - Application restrictions → Websites → `https://jacklins39.github.io/*` (+ `http://localhost/*`)
  - API restrictions → Identity Toolkit API / Cloud Firestore API / Token Service API
- [x] 3. Authentication → Settings → Authorized domains 只留 `jacklins39.github.io`、`localhost`
- [x] 做完後重新登入測試：進度、自訂單字能否正常存取

## 其他
- [x] 說「幫我繼續跑爬蟲」→ `node crawl_examples.js` (進度在 example_cache.json)
- [x] 爬完後 commit + push `words_data.js`、`example_cache.json`
- [x] (可選) 擴充單元 11 多益單字 (toeic_data.js 的 toeicRaw) - 已擴充 37 個核心單字至單元 11 (總計 3074 字)

## 教學法功能優化
- [x] 1. **同詞性干擾項匹配 (POS-Matched Distractors)**
  - 在 `setupQuizMode` 依據 `extractPos(currentWord.zh)` 優先抽取同詞性干擾項（同為動詞/名詞/形容詞等），徹底根除靠詞性標籤（如 `adj.`、`v.`）秒猜答案的假性記憶問題。
- [x] 2. **認知階梯題型 + 拼寫自由開關 (非強制)**
  - 設定頁新增「包含鍵盤拼寫填空題」開關，**預設保持關閉 (OFF)**，不拖慢刷題節奏。
  - `pickQuizType(level)` 依 SRS 等級進階：Level 0 看英選中、Level 1 看中選英、Level 2~3 解鎖「盲聽選字 (listen)」；僅在手動開啟用時於 Level 4~5 出現拼寫題。
- [x] 3. **聽力專區「盲聽磨耳朵模式 (Blinded Mode)」**
  - 新增一鍵盲聽遮罩（毛玻璃模糊），避免大腦依賴視覺閱讀英文字，強迫聽覺皮層解碼；游標懸停、點擊或朗讀到該句時才動態清晰顯現。
- [x] 4. **單字卡背面「原生口說跟讀評測 (Speech Recognition)」**
  - 卡片背面加入「🎤 口說跟讀評測」按鈕，運用瀏覽器原生免費 `webkitSpeechRecognition`，一鍵開麥朗讀並即時驗收發音標準度（免 API 費用）。
- [x] 5. **聽力專區「情境關鍵字體系 (Curated Thematic Vocab)」**
  - 全數 43 篇短文固化專屬 `vocabulary` 核心詞庫（共 290 詞，每篇 6~8 字），精選情境主題實詞並帶有繁體中文詞性釋義；徹底解決篇內同字重複、以及 `please`、`will`、`at` 等高頻虛詞霸榜問題。前端支援原生點擊發音與釋義 Tooltip，並升級自訂文章 fallback 停用詞過濾。

