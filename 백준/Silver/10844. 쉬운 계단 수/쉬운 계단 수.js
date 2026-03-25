const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const dp = new Array(n).fill(0).map(() => new Array(10).fill(1));
dp[0][0] = 0;

for (let i = 1; i < n; i++) {
    for (let j = 0; j <= 9; j++) {
        dp[i][j] = ((dp[i - 1][j - 1] || 0) + (dp[i - 1][j + 1] || 0)) % 1000000000;
    }
}

console.log(dp[n - 1].reduce((acc, cur) => acc + cur, 0) % 1000000000);