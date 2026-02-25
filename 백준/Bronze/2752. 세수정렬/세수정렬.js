const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((num) => Number(num));

const sorted = input.sort((a, b) => a - b);
console.log(sorted.join(" "));