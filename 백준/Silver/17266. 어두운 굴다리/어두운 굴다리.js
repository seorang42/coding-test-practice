const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const points = input[2].split(" ").map(Number);


let answer = 0;

let start = points[0];
answer = Math.max(answer, start);
for (let i = 1; i < points.length; i++) {
    answer = Math.max(answer, Math.ceil((points[i] - start) / 2));
    start = points[i];
}
answer = Math.max(answer, n - start);

console.log(answer);