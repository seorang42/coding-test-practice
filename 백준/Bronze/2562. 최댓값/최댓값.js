const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().split("\n").map(el => Number(el));

const max = Math.max(...arr);
const index = arr.indexOf(max) + 1;

console.log(max);
console.log(index);