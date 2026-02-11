const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => Number(el));

const result = new Set();
arr.forEach((num) => result.add(num % 42));

console.log(result.size);