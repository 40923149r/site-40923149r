var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'W6', 'text': '\n 請將 抽點程式 與 擷取個人靜態網頁 的程式結合, 可以選定列出人數後, 在頁面中顯示出該學員的靜態網頁連結. \n 完成後, 請在個人的網頁中加入一個 w6 的頁面, 將心得列入. \n 範例: 利用  cp2022  或  Brython  頁面以 src 變數 執行 或以 src2 變數 執行 . \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n stud 伺服器與 cmsimde 子模組更新 \n \n \n https://stud.cycu.org:8000  是一個建立在工作站室電腦上的一個動態網站, 透過在 Ubuntu 伺服器上的一個 demo 帳號與兩個 ports (9000 及 8000) 完成, 2022 Fall 每位修課學員應該都收到一封信, 告知在這台 stud.cycu.org 伺服器上的獨一帳號密碼與 ports ( stud.cycu.org port 分配表) , 其中 9xxx 用於內部而 8xxx 則用於外部. \n stud.cycu.org 是用來取代 Replit 雲端應用程式服務, 設定完成後, 每位學員都能直接在瀏覽器中修改動態與 Github Pages 靜態網站的內容, 也能直接將各種練習編寫的 Brython 程式存在個人的 Gist, 然後導入動態或靜態網站中執行. \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W12', 'text': 'hw第一個練習 \n 測試', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '<<<<<<< HEAD\n w13 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Brython-1', 'text': '=======\n\n\n=======\n', 'tags': '', 'url': 'Brython-1.html'}, {'title': 'Brython-2', 'text': '>>>>>>> 6d34d078b8e48689570c1f21928f53734639477c \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython-2.html'}]};