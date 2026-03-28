const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const people = input.slice(1).map((el, index) => [index, ...el.split(" ").map(Number)]);

const sorted = [...people].sort((a, b) => a[1] > b[1] && a[2] > b[2] ? -1 : a[1] > b[1] ? -1 : 0);
const answer = [];
for (let i = 0; i < sorted.length; i++) {
    const [index, weight, height] = sorted[i];
    let count = 0;
    for (let j = 0; j < i; j++) {
        const [currIndex, currWeight, currHeight] = sorted[j];
        if (currWeight > weight && currHeight > height) count++;
    }
    answer[index] = count + 1;
}

console.log(answer.join(" "));