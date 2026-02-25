const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, cordsStr] = input;
const cords = cordsStr.split(" ").map(Number);

const sorted = [...new Set(cords)].sort((a, b) => a - b);
const map = {};
sorted.forEach((cord, index) => {
    map[cord] = index;
})

const compressed = cords.map((cord) => map[cord]);
console.log(compressed.join(" "));