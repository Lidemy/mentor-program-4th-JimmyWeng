## 請解釋後端與前端的差異。

- [ ] P1 你了解前端與後端的區別

前端就是我們使用者可以直接看到的 GUI 內容，而後端就是讓這一切運作的背後邏輯。

前端就是你能點擊的按鈕、看到的圖片、各種下拉選單，是屬於 client-side 的運作。
如果是 web 的話，就是我們在瀏覽器裡面能看到的這些內容，通常使用 HTML, CSS 和 JavaScript 實作。

後端就是 server-side ，是使用者看不到在 server 上各種行為，例如儲存資料和 API 呼叫。
後端的實作常見的有 PHP, Python, Java, . Net, Ruby... 等等。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

 - [ ] P1 你能說出從發出一個 request 到接收 response 中間發生的事
 - [ ] P1 你了解不同載具的差異在哪（Desktop、Mobile、Web）

這一題我決定用 Huli 建議的方法，參考並跟著打一遍，因為我自已用記憶寫出來的根本幾句就沒了。

參考資料：
[網頁前後端整體架構](https://www.notion.so/ruofanwei/7348a0c6bac9471792b8b4b6d75e5cab) by ruofan
[初探網頁前後端架構](https://saffranblog.coderbridge.io/2020/06/13/how-the-web-works/) by Saffran
[無意間查到但跟這題關係不大而且內容看不懂](https://github.com/alex/what-happens-when)

按下 Enter
瀏覽器會發 HTTP request （搜尋 JavaScript） 給 DNS server
DNS server 資料庫上面有各種 IP address 和 對應 domain name 的資料
DNS 會 response 一個 IP 位置給瀏覽器
瀏覽器再次發一個 request 到 IP 位置給電腦的作業系統
作業系統再控制硬體端的網路卡
網路卡發 request 給遠方的 server
Server 會把運算之後的資料 response 回給網路卡
網路卡把 response 給作業系統
作業系統把 response 給瀏覽器
瀏覽器再把這些資料 render 成使用者能看懂的各種前端介面

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

`alias`
替換指令感覺滿實用
這篇文章就說 grep 如果不是很直覺，可以用 alias search=grep 設定，之後只要用 search 就能達到一樣功能。
https://alvinalexander.com/blog/post/linux-unix/create-aliases/

`env`
可以了解目前環境設定是什麼，不過感覺滿進階，沒事不要亂動不然會出事的。

剛發現這個超讚
https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/

`history`
這超棒，可以列出所有以前打過的指令！如果用 history n ，令 n 等於你想要看前面幾個指令的數字，例如 history 3 就是看前三個。
