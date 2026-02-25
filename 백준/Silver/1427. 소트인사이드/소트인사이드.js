const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const numbers = input.split("").map(Number);
console.log(numbers.sort((a, b) => b - a).join(""));