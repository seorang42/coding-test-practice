const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

console.log(numbers.sort((a, b) => a - b)[k - 1]);