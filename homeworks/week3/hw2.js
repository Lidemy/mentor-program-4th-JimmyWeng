var readline = require('readline');
const { type } = require('os');

var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function (line) {
  solve(lines)
});

function solve(lines) {
  var tmp = lines[0].split(' ')
  for (let i = Number(tmp[0]); i <= Number(tmp[1]); i += 1) {
    let total = 0
    let n = i.toString().length // 長度就是 n次方
    let arr = i.toString().split('')
    for (j = 0; j < n; j += 1) { //每個平方加總
      total += (Number(arr[j]) ** n)
    }
    if (i === total) {
      console.log(i)
    }
  }

}