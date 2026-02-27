const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number));

const [[n, m], trees] = input;
let [min, max] = [0, Math.max(...trees)];

let result = 0;
while (min <= max) {
    const point = parseInt((min + max) / 2);
    const cut = trees.reduce((acc, cur) => acc + Math.max(0, cur - point), 0);
    if (cut < m) {
        max = point - 1;
    } else {
        result = point;
        min = point + 1;
    }
}

console.log(result);