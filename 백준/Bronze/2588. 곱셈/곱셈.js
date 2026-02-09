const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n").map(el => Number(el));

console.log(a * (b % 10));
console.log(a * parseInt((b % 100) / 10));
console.log(a * parseInt(b / 100))
console.log(a * b);