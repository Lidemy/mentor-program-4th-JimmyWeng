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

const solve = lines => {
  var rows = lines[0]
  for (let i = 1; i <= rows; i += 1) {
    // console.log(i)
    let tmp = lines[i].split(' ')
    let A = tmp[0]
    let B = tmp[1]
    let K = tmp[2]
    // console.log('yay')
    // console.log('A, B, K = ' + A + ', ' + B + ', ' + K)
    // console.log('typeof A : ' + typeof A)
    // console.log('typeof B : ' + typeof B)
    // console.log('typeof K : ' + typeof K)
    console.log(
      (A === B) ? 'DRAW' : ((Number(K) === 1) ? (A > B ? 'A' : 'B') : (A > B ? 'B' : 'A'))
    )
  }
}

