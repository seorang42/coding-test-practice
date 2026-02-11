const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().split("\n")[1].split(" ").map(el => Number(el));

const [min, max] = [Math.min(...arr), Math.max(...arr)];
console.log(min, max);