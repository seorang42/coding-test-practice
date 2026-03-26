const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number));

const [n, k] = input[0];

const sorted = [...input.slice(1)].sort((a, b) => {
    if (a[1] !== b[1]) {
        return b[1] - a[1];
    } else if (a[2] !== b[2]) {
        return b[2] - a[2];
    } else if (a[3] !== b[3]) {
        return b[3] - a[3];
    } else return 0;
});

let [g, s, b] = [-1, -1, -1];
let [rank, same] = [0, 0];

for (let i = 0; i < sorted.length; i++) {
    const [currNum, currG, currS, currB] = sorted[i];
    if (g === currG && s === currS && b === currB) {
        same++;
        input[currNum].push(rank);
    } else {
        [g, s, b] = [currG, currS, currB];
        rank += same + 1;
        same = 0;
        input[currNum].push(rank);
    }
}

console.log(input[k][4]);