const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const groups = input.split("-");
const numbers = groups.map((group) => group.split("+").map(Number).reduce((acc, cur) => acc + cur, 0));

let answer = 0;
numbers.forEach((number, index) => {
    if (index === 0) answer += number;
    else answer -= number;
})

console.log(answer);