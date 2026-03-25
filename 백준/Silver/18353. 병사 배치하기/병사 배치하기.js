const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const soldiers = input[1].split(" ").map(Number);

const dp = new Array(n).fill(1);

for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if (soldiers[j] > soldiers[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

const max = Math.max(...dp);
console.log(n - max);