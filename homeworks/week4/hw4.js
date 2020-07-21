// 申請一個 Application 拿到 ClientID，
// 在 API 文件當中找到對的那一個 API（Get Top Games）
// request header 中帶上 ClientID 跟另一個參數 Accept，值是：application / vnd.twitchtv.v5 + json。
// 使用舊版的（Twitch API v5，代號 kraken）
// 依序印出目前觀看人數跟遊戲名稱

// All responses are JSON objects. response 不用 parse
// ClientID: 9xumo8nj6or25eee7y9bq2jrqebm8n


// import 'request'
const request = require('request');

// request(options, callback)
request(
  {
    // url: 'https://api.twitch.tv/kraken/games/top?client_id=9xumo8nj6or25eee7y9bq2jrqebm8n',
    url: 'https://api.twitch.tv/kraken/games/top?limit=100', // 預設 10 最多 100
    // url: 'https://api.twitch.tv/kraken/games/top',
    method: 'GET',
    headers: {
      Accept: 'application / vnd.twitchtv.v5 + json',
      'Client-ID': '9xumo8nj6or25eee7y9bq2jrqebm8n',
      // 'limit': '3', // still can't figure out why I can't use this!!!!!!!!
    },
  },
  (error, response, body) => {
    try {
      const bodyParse = JSON.parse(body);
      // console.log(response);
      // console.log(bodyParse.top);
      const info = bodyParse.top;
      info.forEach(element => console.log(`${element.viewers} ${element.game.name}`)); // this is an array so iteration
    } catch (e) {
      console.log(e); // 錯誤處理
    }
  },
);
