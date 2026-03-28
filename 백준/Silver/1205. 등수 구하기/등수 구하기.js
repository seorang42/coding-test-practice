const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, newScore, p] = input[0].split(" ").map(Number);
const scores = input[1] ? input[1].split(" ").map(Number) : [];

let rank = 1;
for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (newScore > score) {
        console.log(rank);
        return;
    } else if (newScore < score) {
        rank++;
    }
}

if (n < p) console.log(rank);
else console.log(-1);