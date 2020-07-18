## 請以自己的話解釋 API 是什麼

全名為 Application Programming Interface，是一個中間人的角色，讓使用者可以使用是先定義好的功能對軟體做操作。
API 把各種功能包起來，提供輸入和輸出、規範使用規則，讓使用者不用太煩惱底層運作。
各種軟體之間的溝通都存在 API ，目前課程使用較多為 web API ，主要用來做與網頁之間的溝通，各種建立、讀取、更新、刪除的行為。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- 418 I'm a teapot
  - HTTP server 不會真的處理，但在 Wikipedia 上面看到覺得滿有趣的。有些網站會拿來做彩蛋。
- 460 
  - AWS 竟然有自己的 status code，這...不過被歸類「非官方」，不符合任何標準。
  - Client timout 比 Elastic Load Balancer's timeout 早。 但我沒用過 AWS 所以我也不懂。
- 414
  - 很少見的情形，uri 太長，根據 MDN 的說法其中一個可能是被攻擊。
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414#:~:text=The%20HTTP%20414%20URI%20Too,conditions%20when%20this%20might%20occur%3A&text=or%20when%20the%20server%20is,to%20exploit%20potential%20security%20holes.

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://fake.restaurant.api.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET    | /restaurants/all     | 無           | /restaurants/all |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/mcdonalds      |
| 刪除餐廳   | DELETE   | /restaurants     | name: 餐廳名 | 無              |
| 新增餐廳   | POST   | /restaurants/:id     | 無 | /restaurants/burgerking              |
| 更改餐廳   | PATCH   | /restaurants/:id     | name: 餐廳名 | /restaurants/kfc              |

