// import 'request'
const request = require('request');
// import 'process'
const process = require('process');

// node document.js 之後的那個就是要帶的參數
const countryName0 = process.argv[2];
// let countryName1 = process.argv[3];

// 為了確保正確情形 抓前兩個結合起來去做搜尋（記得加上空格）
// if (countryName0 === undefined) {
//   countryName0 = ''
// }
// if (countryName1 === undefined) {
//   countryName1 = ''
// } else {
//   countryName1 = ' ' + countryName1
// }
// const fullName = countryName0 + countryName1
// console.log('countyName: ' + countryName0)
// console.log(`countryName: ${countryName1}`)
// console.log(`countryName: ${fullName}`)

// node hw3.js tai
// Search by country name. It can be the native name or partial name
// https://restcountries.eu/rest/v2/name/{name}
// // 國家：Taiwan
// bodyParse[0]['name']
// // 首都：Taipei
// bodyParse[0]['capital']
// // 貨幣：TWD
// bodyParse[0]['currencies'][0]['code']
// // 國碼：886
// bodyParse[0]['callingCodes'][0]

request(
  `https://restcountries.eu/rest/v2/name/${countryName0}?fields=name;capital;currencies;callingCodes`,
  (error, response, body) => {
    try {
      const bodyParse = JSON.parse(body);
      if (bodyParse.status === 404) {
        console.log('「找不到國家資訊」');
      } else {
        console.log('============');
        // console.log(bodyParse[0]);
        console.log(`國家：${bodyParse[0].name}`);
        console.log(`首都：${bodyParse[0].capital}`);
        console.log(`貨幣：${bodyParse[0].currencies[0].code}`);
        console.log(`國碼：${bodyParse[0].callingCodes[0]}`);
        console.log('============');
        console.log(`國家：${bodyParse[1].name}`);
        console.log(`首都：${bodyParse[1].capital}`);
        console.log(`貨幣：${bodyParse[1].currencies[0].code}`);
        console.log(`國碼：${bodyParse[1].callingCodes[0]}`);
        console.log('============');
        console.log(`國家：${bodyParse[2].name}`);
        console.log(`首都：${bodyParse[2].capital}`);
        console.log(`貨幣：${bodyParse[2].currencies[0].code}`);
        console.log(`國碼：${bodyParse[2].callingCodes[0]}`);
      }
    } catch (e) {
      console.log(e); // 錯誤處理
    }
  },
);

// old stuff before I found out about the filter in the API
// request(
//   `https://restcountries.eu/rest/v2/name/${fullName}`,
//   (error, response, body) => {
//     // console.log('error: ' + error)
//     // if (error === null) {
//     //   console.log('「找不到國家資訊」');
//     // } else {
//     const bodyParse = JSON.parse(body);
//     // console.log(bodyParse['status'])
//     // console.log(body)
//     if (bodyParse['status'] === 404) {
//       console.log('「找不到國家資訊」');
//     } else {
//       console.log('============')
//       console.log(bodyParse)
//       console.log(`國家：${bodyParse[0]['name']}`)
//       console.log(`首都：${bodyParse[0]['capital']}`)
//       console.log(`貨幣：${bodyParse[0]['currencies'][0]['code']}`)
//       console.log(`國碼：${bodyParse[0]['callingCodes'][0]}`)
//     }
//     // }
//   },
// );
