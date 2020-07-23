// 關卡有十個： /lv1 to /lv10
// 需要 token： /lv1?token=
// token 為大括弧刮起來的字串：第一關的 token 為 { GOGOGO }
// 附註：所以第一關網址為 /lv1?token={GOGOGO}
// 網址最後面加上 &hint=1 就會看到提示： /lv1?token={GOGOGO}&hint=1

const request = require('request');

const level = 'lv10';
// const token = '{GOGOGO}';
// const token = '{HellOWOrld}'
// const token = '{5566NO1}'
// const token = '{LEarnHOWtoLeArn}'
// const token = '{HarukiMurakami}'
// const token = '{CHICKENCUTLET}'
// const token = '{SECurityIsImPORTant}'
// const token = '{HsifnAerok}'
// const token = '{NeuN}'
const token = '{duZDsG3tvoA}';
// const num = '0000'

// // HTTP CHALLENGE
// request.get(
//   `https://lidemy-http-challenge.herokuapp.com/${level}?token=${token}&num=${num}`,
//   (error, response, body) => {
//     if (error) {
//       return console.log(`Error: ${error}`)
//     }
//     // console.log(`${bookId}: ${body}`);
//     console.log(body);
//   },
// );


// HTTP CHALLENGE find num
for (let i = 1613; i < 10000; i += 1000) {
  request.get(
    `https://lidemy-http-challenge.herokuapp.com/${level}?token=${token}&num=${i}`,
    (error, response, body) => {
      if (error) {
        return console.log(`Error: ${error}`);
      }
      return console.log(`i = ${i}, return = ${body}`);
    },
  );
}
// xxx3 是確定的
// xx13 是確定的
// x613 是確定的
