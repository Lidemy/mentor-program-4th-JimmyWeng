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
  // var tmp = lines[0].split(' ')
  let str = lines[0]
  let rev_str = ''
  for (let i = (str.length - 1); i >= 0; i -= 1) {
    rev_str += str[i]
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
  if (rev_str === str) {
    console.log('True')
  } else {
    console.log('False')
  }

  // console.log(rev_str === str)
}
