const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let words = input.length;
if (input.length == 1 && input[0] == '') {
  words = 0;
}

console.log(words);