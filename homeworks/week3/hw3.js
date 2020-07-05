/*
Input
第一行為一個正整數 N，1 & lt;= N & lt;= 1001 <= N <= 100，代表一共有幾個數字

接下來 N 行每一行都包含了一個正整數 P，1 & lt;= P & lt;= 1000001 <= P <= 100000

Output
針對每一筆輸入，如果 P 是質數，輸出：Prime，否之則輸出 Composite

（附註：Composite 是合數的意思，不過有一點要注意的是 1 不是質數也不是合數，但在這一題裡面一樣要輸出Composite）
*/

const readline = require('readline');
// const { type } = require('os');
const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function isComp(num) {
  const n = Number(num);
  if (n === 1) {
    return 'Composite';
  }
  if (n === 2) {
    return 'Prime';
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'Composite';
    }
  }
  return 'Prime';
}

function solve(object) {
  // var tmp = object[0].split(' ')
  const numberCounts = object[0];
  for (let i = 1; i <= numberCounts; i += 1) {
    console.log(isComp(object[i]));
  }
}

rl.on('close', () => solve(lines));
