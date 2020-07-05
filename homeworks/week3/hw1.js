var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function () {
  solve(lines)
});

function solve(lines) {
  var tmp = lines[0].split(' ')
  for (let i = 1; i <= tmp; i += 1) {
    console.log(repeat('*', i))
  }
};

function repeat(str, count) {
  if (count < 0) {
    return ''
  }
  if (count === 1) {
    return str
  }
  else {
    return str + repeat(str, count - 1)
  }
};