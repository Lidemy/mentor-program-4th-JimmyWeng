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

// 疑問：查了也嘗試之後看來不能用 bodyPars[i][1] 的方式取得，一定得用 name ?
// 疑問：有沒有比要建議的容錯方式？（例如當地一個被刪掉所以必須往後順延？）
// 疑問：請問在 url 上面做 limit 還是在 function 用一個參數去控制「前 10 本書」比較好？
