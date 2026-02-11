const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [reverseA, reverseB] = numbers.map(number => Number(number.split("").reverse().join("")));
console.log(reverseA > reverseB ? reverseA : reverseB);