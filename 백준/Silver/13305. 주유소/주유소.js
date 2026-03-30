const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const roads = input[1].split(" ").map(Number);
const costs = input[2].split(" ").map(Number);

let min = Infinity;
let answer = 0n;
for (let i = 0; i < roads.length; i++) {
    min = Math.min(min, costs[i]);
    answer += BigInt(min) * BigInt(roads[i]);
}

console.log(answer.toString());