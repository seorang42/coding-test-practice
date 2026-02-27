const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, cards, m, targets] = [Number(input[0]), input[1].split(" ").map(Number).sort((a, b) => a - b), Number(input[2]), input[3].split(" ").map(Number)];

const numMap = {};
cards.forEach((card) => {numMap[card] = (numMap[card] || 0) + 1});

console.log(targets.map(target => (numMap[target] || 0)).join(" "));