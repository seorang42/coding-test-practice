const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const target = Number(input[0]);
let end = 1;
let count = 1;
while (end < target) {
    end += count * 6;
    count++;
}

console.log(count);