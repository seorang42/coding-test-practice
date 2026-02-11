const fs = require("fs");
const [n, numbersStr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = numbersStr.split("").map(el => Number(el));

console.log(numbers.reduce((acc, cur) => acc + cur, 0));