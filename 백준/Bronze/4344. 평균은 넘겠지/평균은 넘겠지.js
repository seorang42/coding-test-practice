const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const [n, ...scores] = input[i].split(" ").map(el => Number(el));
    const average = scores.reduce((acc, cur) => acc + cur, 0) / n;
    
    let overAverage = 0;
    for (const score of scores) {
        if (score > average) overAverage++;
    }
    
    console.log(`${(overAverage / n * 100).toFixed(3)}%`);
}