const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(el => Number(el));

console.log(a * b);