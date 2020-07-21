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
    try {
      const bodyParse = JSON.parse(body);
      const count = 10;
      // for (let i = 0; i < bodyParse.length; i += 1) {
      for (let i = 0; i < count; i += 1) {
        console.log(`${bodyParse[i].id} ${bodyParse[i].name}`);
        // console.log(bodyParse[i])
      }
    } catch (e) {
      console.log(e); // 錯誤處理
    }
  },
);
