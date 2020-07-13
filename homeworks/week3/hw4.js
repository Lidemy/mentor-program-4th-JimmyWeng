const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(object) {
  // var tmp = object[0].split(' ')
  const str = object[0];
  let revStr = '';
  for (let i = (str.length - 1); i >= 0; i -= 1) {
    revStr += str[i];
  }
  // console.log('typeof lines: ' + typeof lines)
  // console.log('typeof rev_str: ' + typeof rev_str)
  // console.log('typeof str: ' + typeof str)
  // console.log('lines[0] = ' + lines[0])
  // console.log('lines[1] = ' + lines[1])
  // console.log('rev_str = ' + rev_str.toString())
  // console.log('str = ' + str.toString())
  // console.log(rev_str.toString === str.toString)
  // console.log(rev_str === str) // doesn't work because
  if (revStr === str) {
    console.log('True');
  } else {
    console.log('False');
  }
  // console.log(rev_str === str)
}

rl.on('close', () => solve(lines));
