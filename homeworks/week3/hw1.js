const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function repeat(str, count) {
  if (count < 0) {
    return '';
  }
  if (count === 1) {
    return str;
  }
  return str + repeat(str, count - 1);
}

function solve(object) {
  const tmp = object[0].split(' ');
  for (let i = 1; i <= tmp; i += 1) {
    console.log(repeat('*', i));
  }
}

rl.on('close', () => solve(lines));

// // Before eslint - for reference
// var readline = require('readline');

// var lines = []
// var rl = readline.createInterface({
//   input: process.stdin
// });

// rl.on('line', function (line) {
//   lines.push(line)
// });

// rl.on('close', function () {
//   solve(lines)
// });

// function solve(lines) {
//   var tmp = lines[0].split(' ')
//   for (let i = 1; i <= tmp; i += 1) {
//     console.log(repeat('*', i))
//   }
// };

// function repeat(str, count) {
//   if (count < 0) {
//     return ''
//   }
//   if (count === 1) {
//     return str
//   }
//   else {
//     return str + repeat(str, count - 1)
//   }
// };
