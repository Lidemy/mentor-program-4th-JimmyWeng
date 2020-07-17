const request = require('request');

request(
  // 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  'https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => {
    // console.error('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('head:', response.headers);
    // console.log('body:', body);
    // console.log(body);
    // console.log(typeof body);
    const bodyParse = JSON.parse(body);
    const count = 10;
    // for (let i = 0; i < bodyParse.length; i += 1) {
    for (let i = 0; i < count; i += 1) {
      console.log(`${bodyParse[i].id} ${bodyParse[i].name}`);
      // console.log(bodyParse[i])
    }
  },
);

// 希望可以跟助教請教以下一些問題：
// 1. 查了也嘗試之後看來不能用 bodyPars[i][1] 的方式取得，一定得用 name 這樣的方式嗎?
// 2. 有沒有比要建議的容錯方式？（例如:當第一筆資料被刪掉所以必須往後順延？）
// 3. 請問在 url 上面做 limit 還是在 function 用一個參數去控制「前 10 本書」比較好？
// Huli在自我檢測裡面有提到用 limit 比較好。
