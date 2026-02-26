const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, heights] = [Number(input[0]), input[1].split(" ").map(Number)];
const maxHeight = heights.reduce((acc, cur) => Math.max(acc, cur), 0);

const arrows = new Array(maxHeight + 1).fill(0);
let count = 0;
heights.forEach((height) => {
    if (arrows[height] <= 0) {
        arrows[height - 1]++;
        count++;
    } else {
        arrows[height]--;
        arrows[height - 1]++;
    }
});

console.log(count);