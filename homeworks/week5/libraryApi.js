const request = require('request');
// const baseUrl1 = 'https://lidemy-http-challenge.herokuapp.com/api/';
const baseUrl2 = 'https://lidemy-http-challenge.herokuapp.com/api/v2';

// // API POST
// request.post(
//   {
//     url: 'https://lidemy-http-challenge.herokuapp.com/api/books',
//     form: {
//       'content-type': 'application/x-www-form-urlencoded',
//       name: '大腦喜歡這樣學',
//       ISBN: '9789863594475',
//     }
//   },
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error}`)
//     }
//     // const bodyParse = JSON.parse(body);
//     // console.log(bodyParse.length);
//     console.log(body);
//   },
// );

// 書名是《大腦喜歡這樣學》，ISBN 為 9789863594475。
// 書名有：「世界」兩字，而且是村上春樹寫的

// // API GET
// request.get(
//   'https://lidemy-http-challenge.herokuapp.com/api/books',
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error}`)
//     }
//     const bodyParse = JSON.parse(body);
//     for (let i = 0; i < bodyParse.length; i += 1) {
//       if ((bodyParse[i].name.includes('世界')) && (bodyParse[i].author === '村上春樹')) {
//         return console.log(bodyParse[i].id);
//       }
//     }
//     return console.log('Not found');
//   },
// );

// // API DELETE
// request.delete(
//   'https://lidemy-http-challenge.herokuapp.com/api/books/23',
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error}`)
//     }
//     return console.log(body);
//   },
// );

// // API V2 GET
// request.get(
//   {
//     url: `${baseUrl2}/me`,
//     headers: {
//       Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
//     },
//   },
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error} `)
//     }
//     return console.log(body);
//   },
// );

// // API V2 DELETE
// request.delete(
//   {
//     url: `${baseUrl2}/books/89`,
//     headers: {
//       Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
//     },
//   },
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error} `)
//     }
//     return console.log(body);
//   },
// );

// // API V2 GET
// request.get(
//   {
//     url: `${baseUrl2}/books`,
//     headers: {
//       Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
//     },
//   },
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error} `)
//     }
//     const bodyParse = JSON.parse(body);
//     // console.log(bodyParse);
//     for (let i = 0; i < bodyParse.length; i += 1) { // 書名有「我」，作者名字四個字，key 錯的 ISBN 最後一碼為 7
//       // console.log(bodyParse[i]);

//       let nameHasMe = bodyParse[i].name.includes('我')
//       // if (nameHasMe) {
//       // console.log(`書名有我： ${bodyParse[i].name}`)
//       // }
//       let authorName = bodyParse[i].author;
//       // if (authorName.length === 4) {
//       //   console.log(`作者名字四個字： ${authorName}`)
//       // }
//       let isbnStr = bodyParse[i].ISBN;
//       // if (isbnStr.substring(isbnStr.length - 1) === '7') {
//       //   console.log(`ISBN： ${isbnStr}`)
//       //   console.log(`ISBN 最後一碼： ${isbnStr.substring(isbnStr.length - 1)}`)
//       // }
//       if (nameHasMe && (authorName.length === 4) &&
//       \(isbnStr.substring(isbnStr.length - 1) === '7')) {
//         console.log(`id: ${bodyParse[i].id}`);
//         console.log(`name: ${bodyParse[i].name}`);
//         console.log(`ISBN: ${bodyParse[i].ISBN}`);
//       }
//     }
//   },
// );

// // API V2 PATCH
// request.patch(
//   {
//     url: `${baseUrl2}/books/72`,
//     headers: {
//       Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
//     },
//     form: {
//       'content-type': 'application/x-www-form-urlencoded',
//       name: '日日好日：茶道教我的幸福15味【電影書腰版】',
//       ISBN: '9981835423',
//     }
//   },
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error} `)
//     }
//     return console.log(body);
//   },
// );

// API V2 GET
request.get(
  {
    url: `${baseUrl2}/sys_info`,
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
      'X-Library-Number': '20',
      'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; FunWebProducts; .NET CLR 1.1.4322)',
    },
  },
  (error, response, body) => {
    if (error) {
      return console.log(`Error: ${error} `);
    }
    return console.log(body);
  },
);
