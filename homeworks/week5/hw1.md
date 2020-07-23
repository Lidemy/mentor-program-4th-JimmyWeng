## 前四週心得與解題心得

### 前四週學習的心得感想



### 解題兩個小挑戰心得

- 隨想
  - 直接傳回 body 不用 parse 因為已經排版好 不過確實回來的是 JSON string 而非 JS Object
  - 

- 開始
  - 如果打算用 ${token} 替換就需要傳 string 進去，所以前面 const token = '{GOGOGO}'; 需要加上 ' '
- 第一關
  - token = '{GOGOGO}'
  - https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba
  - 傳什麼名字進去都沒差，看了提示才知道要加上 &name= 
- 第二關
  - token = '{HellOWOrld}'
  - 那本書的 id 是兩位數，介於 54~58 之間，所以就把 54~58 通通印出來
    - 用迴圈印出來不是照順序 55, 54, 57, 56, 58... 
    - 發現不需要用 API 把每本書的資料印出來，所以直接用回圈試 ?token=${token}&id=${bookId}
    - 練習印的時候同時印 bookId 跟 body，單純印 body 的時候第二行就是要找的書，但有印 bookId 的時候是第三行（56) 
- 第三關
  - token = '{5566NO1}'
  - 決定把 HTTP Challenge 跟 API 的檔案分開
  - 總共有一百本書 length
  - 卡在 Error: TypeError: Request path contains unescaped characters 一陣子
  - 想起 POST 以及 PATCH 的 content type 為：application/x-www-form-urlencoded
  - 重新回去看 request 的 documentation 確認格式
  - {"message":"新增成功","id":"1989"}
  - 用成 API 的檔案，立刻改成 HTTP Challenge 加上 id 就拿到了
- 第四關
  - token = '{LEarnHOWtoLeArn}'
  - 重新理解 return 和 console.log 的關係 （return 會直接離開而 console.log 會繼續印）
  - 得到 id＝79
- 第五關
  - token = '{HarukiMurakami}'
  - {"message":"\n咦...是刪掉了沒錯，但總覺得哪裡怪怪的，算了，先這樣吧！下一關的 token 為 {CHICKENCUTLET}\n"}
  - 這次學聰明，不要想太多，先往下再說。
- 第六關
  - token = '{CHICKENCUTLET}'
  - 果然只是劇情...獲得新文件：https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a
  - 下面回覆感覺會爆雷，先不予理會。
  - 找到 https://www.base64encode.org/ 可以用來 ENCODE
  - 拿到 {"username":"admin","email":"lib@lidemy.com"}
- 第七關
  - token = '{SECurityIsImPORTant}'
  - 這改一下就拿到了
- 第八關
  - token = '{HsifnAerok}'
  - 書名有「我」，作者名字四個字，key 錯的 ISBN 最後一碼為 7
  - 珍．哈珀、Misa 也會被當秤四個字呢...
  - 每次都要提醒自己是 str.length - 1 不是 -1...
  - 找到 id = 72
  - 第八關真的跟第七關差十萬八千里...兩關根本工作量差很多XD
  - 使用 Patch 改 id = 72 的 ISBN 最後一碼改成 3
  - 這個 token 拿到最感人！ {NeuN}
- 第九關
  - token = '{NeuN}'
  - 坦白說，我覺得這邊根本是用亂試把東西塞進去賽到的。這種賽到的有時候心情更詭異...試了幾個 IE6 的都能過
    - Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)
    - Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)
    - Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; FunWebProducts; .NET CLR 1.1.4322)
  - 恩，先往下寫，不想卡太久...這關的心情有點複雜很不踏實
- 第十關
  - token = '{duZDsG3tvoA}'
  - 四位數不重複
  - 直覺用迴圈暴力解看看，回傳 1230~1239 的印出來看看
  - 試了幾次感覺是 +1 +10 +100 + 1000 的方式，然後只要有多一個 A 就代表那是對的？
  - 沒差先暴力解
  - 為什麼還有下一關...{IhateCORS}

  

