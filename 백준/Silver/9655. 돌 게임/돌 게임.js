const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let stones = Number(input[0]);
let count = 0;
if (stones === 1 || stones === 3) {
    console.log("SK");
    return;
}

while (stones > 4) {
    stones--;
    count++;
}

console.log(count % 2 === 0 ? "CY" : "SK");