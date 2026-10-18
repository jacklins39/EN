@echo off
echo 正在將最新檔案加入 Git...
git add .

echo 正在建立 Commit...
git commit -m "自動更新檔案"

echo 正在強制推播到 GitHub...
git push -f -u origin main

echo.
echo 推播完成！請按任意鍵關閉視窗。
pause
