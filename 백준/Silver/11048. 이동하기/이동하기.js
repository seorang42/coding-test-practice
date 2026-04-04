const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map(el => el.split(" ").map(Number));

const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        dp[i][j] = board[i - 1][j - 1] + Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
}

console.log(dp[n][m]);