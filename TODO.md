# TODO (明天做)

## Firebase / Google Cloud 後台 (專案 githuben-e26eb)
- [ ] 1. **重新發布 Firestore 規則**：Firebase Console → Firestore Database → 規則 → 貼上更新後的 `firestore.rules` → 發布 (必做！補上 listeningAnnotated / dailyPracticeStats 白名單，確保聽力劃線單字與每日刷題總量可順利跨裝置同步)
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
  - 整合動詞三態不規則變化（150+ 動詞）、規則變化自動語法推導、名詞單複數、形容詞比較級/最高級（全面採直列清單式排版，無截斷省略號，並支援 `/` 多詞形獨立發音膠囊）。
  - 精選高頻核心搭配片語（Collocations）與實用例句（支援獨立朗讀發音）。
  - 內建相識詞（Synonyms）與 Datamuse API 動態擴充，標籤支援無限層級點擊穿透查詞。
  - 雙層 Modal 架構，關閉詳解卡即可無縫回到原本的預覽清單，不中斷學習節奏。
- [x] 7. **全域 11,573 筆繁體中文釋義「真人高音質 MP3」庫 (zh-TW-HsiaoChenNeural)**
  - 徹底解決手機端 (iOS Safari / Android Chrome) 因第三方 Google TTS Referer 阻擋與 Web Speech API 限制導致的「手機翻卡無中文聲」長年痛點。
  - 運用微軟高階神經聲線 `zh-TW-HsiaoChenNeural`（台灣自然女聲）全量離線批次產製 11,573 筆繁體中文真人 MP3 放置於 `audio/zh/{id}.mp3`。
  - 實裝 `zh_audio_manifest.js` 快速索引表，翻卡翻面時由原生 `<audio>` 直接以同源 MP3 秒播，發音字正腔圓、無延遲、無跨域錯誤。

## 詞庫品質六大健檢標準與定期執行規範
> **執行指令**：`python scripts/audit_database.py`（每次新增/編輯單字庫或調整語言學引擎後必跑，自動驗收 12,074 筆單字與 9,387 個獨立詞條）

- [x] **全域健康度現況（100% 達標，零缺陷）**：
  1. **內部重複**：`0 筆`（各資料庫內部英文單字均唯一，無重複 ID 或重複詞彙）
  2. **空音標 / 異常音標**：`0 筆`（所有單字皆具備標準 KK 音標格式）
  3. **遺漏詞性標籤**：`0 筆`（繁中欄位皆正確標註標準詞性縮寫，如 `n.`、`v.`、`adj.`）
  4. **機械占位例句**：`0 筆`（無 `This is a / an...` 或 `I have a...` 之機械重複造句）
  5. **格式或英文殘留**：`0 筆`（無反斜線跳脫字元、引號殘留或未翻譯英文殘留）
  6. **詞形變化與跨字污染防呆檢驗**：`0 筆`（實測 `computeWordForms` 與 `getWordCollocations`，0 詞根篡改、0 屈折動詞誤加 `-ed`、0 多音節形容詞誤加 `-er/-est`、0 `-s` 名詞誤加 `-es`、0 搭配詞跨字污染）

## 專案音訊規範 (硬性標準 - 永續執行)
- [x] **全內容實體 MP3 政策**：專案嚴禁依賴瀏覽器機械 TTS。未來所有新增單字、生活例句、常用搭配詞、聽力短文或短句，**一律必須生成實體 MP3 音訊檔**並推送到倉庫：
  1. **單字 (雙真人口音)**：美音女聲存至 `audio/words/us/{word}.mp3`、英音男聲存至 `audio/words/uk/{word}.mp3`，並同步更新 `words_audio_manifest.js`。
  2. **例句**：Edge-TTS Jenny Neural 高音質 MP3，存入 `audio/examples/{id}.mp3`，並同步更新 `examples_audio_manifest.js`。
  3. **中文釋義**：HsiaoChen 台灣女聲 MP3，存入 `audio/zh/{id}.mp3`，並同步更新 `zh_audio_manifest.js`。
  4. **常用搭配詞 (Collocations)**：Edge-TTS Jenny Neural MP3，存入 `audio/collocations/{slug}.mp3`，並同步更新 `collocations_audio_manifest.js`。
  5. **聽力短文/句子**：存入 `audio/listening/`，保持離線 100% 可播放。

## 雙音標規範 (美式 KK + 英式 Oxford IPA - 永續執行)
- [x] **英美雙音標標準配置**：
  1. **美式音標 (KK)**：維持台灣課綱標準美式 KK 音標，記錄於各單字物件之 `kk` 欄位。
  2. **英式音標 (Oxford IPA)**：爬取 Yahoo 奇摩字典（Oxford 牛津中文字典權威英式 IPA），全量建立 `uk_phonetics_manifest.js` 索引庫，並在資料庫寫入 `uk` 欄位。
  3. **前端視覺連動**：卡片正反面均呈現 `[美] [ˋwɔtɚ]  [英] /ˈwɔːtə(r)/` 雙膠囊徽章；當播放美音女聲時，美式徽章亮藍發光；當播放英音男聲時，英式徽章亮紫發光。

## 聽力短文與單字收錄標準作業程序 (SOP - 每次新增短文務必執行)
> **執行腳本**：`python scripts/ingest_listening_words_sop.py`
- [x] **硬性鐵律**：凡新增或擴充任何聽力短文（`listening_data.js`），必須執行此 SOP 腳本自動驗收與補全，嚴禁殘留無中文或佔位符：
  1. **自動檢索短文生詞**：萃取短文內建 `vocabulary` 及文章核心生詞，比對本地庫（`listening_words_data.js`）。
  2. **Yahoo 奇摩字典爬蟲**：爬取 Oxford 權威繁中釋義（帶標準詞性如 `n.`/`v.`/`adj.`）、KK 音標、Oxford IPA（英標）與權威情境雙語例句。
  3. **單元 19 入庫**：自動寫入 `listening_words_data.js`，按順序遞增分配唯一 ID。
  4. **產製 4 軌真人 MP3**：產生 US 美音女聲、UK 英音男聲、Jenny 例句朗讀、HsiaoChen 繁中釋義共 4 軌音訊。
  5. **同步四大 Manifest 索引**：同步寫入 `words_audio_manifest.js`、`uk_phonetics_manifest.js`、`examples_audio_manifest.js`、`zh_audio_manifest.js`。
  6. **執行全域健檢**：跑 `python scripts/audit_database.py` 驗收品質。

## 單字詳解卡：詞形推導與搭配詞/同反義詞防呆 SOP (新增單字必讀規範)
> **歷史案例紀錄（2026-11-02 全域清查修復）**：
> - **問題一（詞根劫持與假比較級）**：早期 `computeWordForms(word, posStr)` 會呼叫 `resolveBaseLemma(word)` 將獨立單字強制還原為動詞原形（如 `born (adj. 天生的)` 被轉為 `bear`），再套用 `born` 的 `adj.` 詞性，衍生出不存在的 `bear / bearer / bearest`；另有部分多音節字尾 `-e` 形容詞（如 `comfortable`）誤套用單音節規則變成 `comfortabler`，或字尾 `-s` 名詞（如 `news`、`ethics`）誤加 `-es`。
> - **問題二（搭配詞與同反義詞跨字污染）**：早期 `getWordCollocations`、`getWordSynonyms`、`getWordAntonyms` 亦會連帶查詢 `resolveBaseLemma(word)` 的原形動詞資料，導致 `born` 的詳解卡混入 `bear` 的名詞片語 `"teddy bear (泰迪熊)"`，或 `saw (鋸子)` 混入 `see` 的片語與同反義詞。
> - **問題三（同義詞跨詞性混淆污染）**：早期 `parsePosAndTokensForCrosslink` 將多詞性單字的所有詞性標籤放入同一個扁平 `posSet`，且強行剝除中文字尾「的／地」（如將 `好奇的` 轉為 `好奇`），導致 `curious (adj. 好奇的)` 誤抓 `wonder (vt. 好奇；n. 奇觀；adj. 極好的)`，或 `death (n.)` 誤抓 `die (v.)`、`area (n.)` 誤抓 `regional (adj.)`。

- [x] **未來新增單字與維護語言學引擎之 6 大硬性 SOP**：
  1. **嚴格詞根隔離原則 (Strict Lemma Isolation)**：
     - `computeWordForms`、`getWordCollocations`、`getWordSynonyms`、`getWordAntonyms` **一律只針對當前單字本身 (`rawW`) 運算與檢索**，嚴禁將 `w` 替換為 `resolveBaseLemma(w).base`。
     - `resolveBaseLemma(w)` **僅限用於詳解卡頂部提示橫幅**（顯示「動詞溯源：`born` 為 `bear` 之過去分詞」），絕不可介入下方詞形、搭配詞或同反義詞的資料抓取。
  2. **新增「不規則動詞」或「特殊單複數名詞」時**：
     - 若新單字為不規則動詞原形，須同步補入 `index.html` 的 `IRREGULAR_VERBS` 表；`PURE_INFLECTED_VERB_FORMS` 會自動將其過去式/過去分詞納入保護，防止屈折詞條被二次加上 `-ed`。
     - 若新單字為字尾單一 `-s`（非 `-ss`）之**可數單數名詞**（如 `bus`, `lens`, `virus`, `campus`），須加入 `SINGULAR_S_NOUNS` 白名單，或於 `IRREGULAR_PLURALS` 定義其複數（如 `crisis -> crises`, `stimulus -> stimuli`）；未列入之 `-s` 字尾詞預設視為不可數/單複同形/已複數，不加 `-es`。
  3. **新增「形容詞 (adj.)」時**：
     - 若新單字屬於**絕對形容詞、分類形容詞或狀態形容詞**（不具備比較級/最高級，如 `born`, `dead`, `unique`, `wooden`, `medical`, `indoor`, `unable`），必須加入 `NON_GRADABLE_ADJS` 黑名單，避免顯示無意義的比較級區塊。
     - 派生字尾（`-ful`, `-less`, `-ous`, `-ive`, `-able`, `-ible`, `-al`, `-ic` 等）及多音節形容詞一律自動採用 `more / most`。
  4. **新增「常用搭配詞 (`CORE_WORD_COLLOCATIONS`)」時**：
     - 搭配詞片語必須真正包含該單字本身（或其自身的屈折變化），嚴禁將同形異義或不同詞性原形的片語混放。
     - 每次於 `CORE_WORD_COLLOCATIONS` 新增片語後，**必須使用 `edge-tts --voice en-US-JennyNeural` 產製對應 MP3 存入 `audio/collocations/{slug}.mp3`**，並將 `slug` 寫入 `collocations_audio_manifest.js`。
  5. **同義詞詞性分段嚴格綁定原則 (POS-Scoped Synonym Isolation)**：
     - `parsePosSegmentsForCrosslink` 與 `initSemanticSynonymIndex` 一律以 **`${primaryPos}:${token}` 複合鍵**建立倒排索引，且嚴禁剝除中文字尾「的／地／位」混淆詞性。
     - 若在 `CORE_WORD_SYNONYMS` 手動新增精選同義詞（如為 `curious` 新增 `inquisitive`, `inquiring`），必須確保詞性 100% 一致，且若該同義詞尚未收錄於本地詞庫，必須同步補入 `synonyms_unit8_data.js` 並產製 4 軌真人發音 MP3 更新四大音訊 Manifest。
  6. **入庫後強制執行六大健檢**：
     - 每次新增單字或修改 `index.html` 語言學邏輯後，**必須執行 `python scripts/audit_database.py`**，確認第 6 項「🧠 語言學引擎與詞形/搭配詞隔離檢驗」顯示 `0 筆異常` 方可提交推送。

## 詞性高頻排序、例句語境匹配與純淨度 SOP (新增單字必守規範)
> **歷史案例紀錄（2026-11-04 全域清查修復）**：
> - **問題一（字母排序倒置高頻義）**：早期網路爬蟲在擷取多詞性單字時，誤採英文字母順序（`adj.` ➔ `adv.` ➔ `n.` ➔ `v.`）排列，導致核心名詞（如 `banana`、`piano`、`English`）將冷僻俚語或樂理形容詞置頂（如 `banana` 被標為 `adj. 愚蠢的、發狂的` 置頂，核心名詞 `n. 香蕉` 掉在後面；`spell` 將 `n. 咒語` 置頂，核心動詞 `vt. 拼字` 掉在後面）。
> - **問題二（例句動態匹配缺失與盲貼標籤）**：舊版前端 `splitPosAndZh` 缺乏動態例句命中比對，且寫死 `idx === 0` 即打上 `[例句對應]` 標籤，導致高達 568 個多詞性常用字（如 `break`、`own`、`dirty`、`approach`）在例句使用第 2 詞性時，上方卡片卻指鹿為馬把第 1 詞性標成例句對應。
> - **問題三（百科/縮寫/音譯雜訊污染）**：早期爬蟲誤將醫學英文縮寫（如 `sad` 誤收 `n. 季節性情感障礙 S.A.D.`）、外幣名（如 `real` 誤收巴西貨幣 `n. 雷阿爾`）、地名（如 `nice` 誤收法國城市 `n. 尼斯`）、花名簡稱（如 `glad` 誤收劍蘭花 `n. 唐菖蒲`）、音譯（如 `tennis` 誤收 `坦尼斯`、`banana` 誤收 `巴納納`）、粗俗俚語（如 `sick` 誤收 `放狗咬人`）當作核心中文釋義。

- [x] **未來新增單字與資料庫維護之 4 大硬性規範**：
  1. **核心高頻詞性置頂原則 (Core Frequency First)**：
     - **嚴禁依英文字母順序排版詞性！**
     - 多詞性單字之第 1 個詞性，必須是教育部課綱與日常溝通中最常用、最直覺之核心詞性（例：`banana` 必為 `n. 香蕉` 在前；`spell` 必為 `vt. 拼字` 在前；`English` 必為 `n. 英語` 在前）。
  2. **例句與釋義 100% 語境互通原則 (Example-Definition Alignment)**：
     - 單字例句所表達之語意與詞性，其關鍵中文詞彙**必須包含於 `zh` 釋義之中**，避免過度意譯導致比對器落空（例：`difficult` 例句翻譯若為「考試很難」，`zh` 內務必包含「難的、困難的」，不得僅寫「費力的」）。
     - 單字英文例句必須自然包含目標詞（包含正常的時態/複數變化如 `riding`, `rang`, `lost`, `teeth`）。
  3. **釋義純淨度原則 (Zero Junk / Acronym / Transliteration)**：
     - 嚴禁殘留無效音譯詞（如「巴納納」、「坦尼斯」）。
     - 嚴禁收錄縮寫碰撞之冷門醫學名詞、專有地名、冷僻植物名或外幣名。
     - 釋義格式必須統一為標準縮寫加句點：`n.`、`v.`、`vt.`、`vi.`、`adj.`、`adv.`、`prep.`、`conj.`、`pron.`，詞性之間以全形分號 `；` 隔開。
  4. **全自動雙階語境匹配與防呆把關**：
     - 前端引擎已實裝一階多字詞組精確匹配與二階去停用詞字符交集匹配，入庫新字前必須先跑 `python scripts/audit_database.py` 驗收健康度。
