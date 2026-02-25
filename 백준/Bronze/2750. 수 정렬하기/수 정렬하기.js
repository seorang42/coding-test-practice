const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const [n, ...numbers] = input;
console.log(numbers.sort((a, b) => a - b).join("\n"));