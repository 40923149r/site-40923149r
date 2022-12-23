var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W6', 'text': '\n 請將 抽點程式 與 擷取個人靜態網頁 的程式結合, 可以選定列出人數後, 在頁面中顯示出該學員的靜態網頁連結. \n 完成後, 請在個人的網頁中加入一個 w6 的頁面, 將心得列入. \n 範例: 利用  cp2022  或  Brython  頁面以 src 變數 執行 或以 src2 變數 執行 . \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n stud 伺服器與 cmsimde 子模組更新 \n \n \n https://stud.cycu.org:8000  是一個建立在工作站室電腦上的一個動態網站, 透過在 Ubuntu 伺服器上的一個 demo 帳號與兩個 ports (9000 及 8000) 完成, 2022 Fall 每位修課學員應該都收到一封信, 告知在這台 stud.cycu.org 伺服器上的獨一帳號密碼與 ports ( stud.cycu.org port 分配表) , 其中 9xxx 用於內部而 8xxx 則用於外部. \n stud.cycu.org 是用來取代 Replit 雲端應用程式服務, 設定完成後, 每位學員都能直接在瀏覽器中修改動態與 Github Pages 靜態網站的內容, 也能直接將各種練習編寫的 Brython 程式存在個人的 Gist, 然後導入動態或靜態網站中執行. \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W12', 'text': 'ex1  Brython input() 使用範例(溫度) \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n 心得:打完程式後，推上倉儲後，只需輸入攝氏溫度值，程式就會幫你跑出華氏溫度值。 \n ex2 \xa0 字串轉浮點數，之後再轉回字串 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n 心得 :若我點開連結， 輸入40 ，接著就會跑出 攝氏 40度 ，等於 華氏104度 。 \n \n ex3  動態網頁中的 Brython 環境設置 \n <h3>w12</h3>\n<!-- \n在動態網站頁面中啟用 Brython 執行環境的用法, 請注意動態網站執行所在路徑\n-->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'/downloads/py/\']});\n}\n// ]]></script>\n<!-- 以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n--></p>\n<div id="brython_div"></div>\n<p>\n<script type="text/python">// <![CDATA[\nfrom browser import html, document\n# Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n# 但是在頁面中 Brython 的 print() 將會顯示在 log 而非頁面\nprint(type(user_input_temp))\n# 這裡定義一個 brython_div 變數, 透過 document[] 與頁面中 id="brython_div" 的位置對應\nbrython_div = document["brython_div"]\n# 看能不能直接將變數值字串列在標註 id 為 "brython_div" 的頁面位置\nbrython_div <= user_input_temp\n# 之後若要列出 html, 則需要透過 Brython 的 html 模組\n// ]]></script>\n</p> \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'Question: \n Q1.何謂 Brython 程式環境? \n A1. \n 一般來說， linux based 的電腦中會安裝好系統自帶的 Python。不過這可能會有幾個問題出現，所以，身為一個開發者來說，我們會想要讓我們的環境上可以支援不同的 Python 版本，每個專案也有 擁有自己的套件環境 。專案環境彼此獨立，開發也不容易出現互相干擾衝突的情況。網路上有許多解決方案。 \n Q2.如何編寫單位轉換程式? \n A2.單位轉換程式就是老師有講解到的(攝氏溫度轉換成華氏溫度) \n Python 的內建型態主要分為以下三種： \n 1.數值型態： int, float, bool \n 2.字串型態： str, chr \n 3.容器型態： list, dict, tuple \n Python 中有數值、字串與字元的資料型別，以及不同型別之間的轉換方式 \n 在Python中，一個字串的資料，是用兩個單引號或兩個雙引號括起來的 \n 字元就是組成字串的元素 \n 要轉換就需要用到布林值，布林值通常是一個運算的結果。 \n Q3.如何將在近端編寫的程式儲存至個人的 Gist 區域? 如何引用 Gist 程式? \n A3. \n Q4.如何將近端的動態與靜態網站內容, 以 http 網路協定提交推送到 Github 雲端主機? (為什麼要將資料存在雲端?能不能直接在雲端上編寫 Brython 程式?然後將程式存) \n A4. \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};