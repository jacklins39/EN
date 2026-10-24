# TODO (明天做)

## Firebase / Google Cloud 後台 (專案 githuben-e26eb)
- [x] 1. **重新發布 Firestore 規則**：Firebase Console → Firestore Database → 規則 → 貼上更新後的 `firestore.rules` → 發布 (必做！補上 dailyPlans/newWordsPerDay/lastDate 白名單，否則雲端寫入會被拒絕導致跨裝置進度不同步)
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
- [x] 6. **單字深度詳解卡 (Word Detail Modal & Linguistic Engine)**
  - 在「今日已學 / 今日新單字」預覽清單與例句中，點選任一單字即可喚起高規格深度詳解卡。
  - 整合動詞三態不規則變化（150+ 動詞）、規則變化自動語法推導、名詞單複數、形容詞比較級/最高級。
  - 精選高頻核心搭配片語（Collocations）與實用例句（支援獨立朗讀發音）。
  - 內建相識詞（Synonyms）與 Datamuse API 動態擴充，標籤支援無限層級點擊穿透查詞。
  - 雙層 Modal 架構，關閉詳解卡即可無縫回到原本的預覽清單，不中斷學習節奏。
- [x] 7. **全域 11,573 筆繁體中文釋義「真人高音質 MP3」庫 (zh-TW-HsiaoChenNeural)**
  - 徹底解決手機端 (iOS Safari / Android Chrome) 因第三方 Google TTS Referer 阻擋與 Web Speech API 限制導致的「手機翻卡無中文聲」長年痛點。
  - 運用微軟高階神經聲線 `zh-TW-HsiaoChenNeural`（台灣自然女聲）全量離線批次產製 11,573 筆繁體中文真人 MP3 放置於 `audio/zh/{id}.mp3`。
  - 實裝 `zh_audio_manifest.js` 快速索引表，翻卡翻面時由原生 `<audio>` 直接以同源 MP3 秒播，發音字正腔圓、無延遲、無跨域錯誤。

## 詞庫品質五大健檢標準與定期執行規範
> **執行指令**：`python scripts/audit_database.py`（每次新增/編輯單字庫後必跑，自動驗收 11,573 筆單字）

- [x] **全域健康度現況（100% 達標，零缺陷）**：
  1. **內部重複**：`0 筆`（各資料庫內部英文單字均唯一，無重複 ID 或重複詞彙）
  2. **空音標 / 異常音標**：`0 筆`（所有單字皆具備標準 KK 音標格式）
  3. **遺漏詞性標籤**：`0 筆`（繁中欄位皆正確標註標準詞性縮寫，如 `n.`、`v.`、`adj.`）
  4. **機械占位例句**：`0 筆`（無 `This is a / an...` 或 `I have a...` 之機械重複造句）
  5. **格式或英文殘留**：`0 筆`（無反斜線跳脫字元、引號殘留或未翻譯英文殘留）

