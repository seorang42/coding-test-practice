const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const triangle = input.slice(1).map(el => el.split(" ").map(Number));

const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
dp[0][0] = triangle[0][0];
for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        const [left, right] = [Math.max(0, j - 1), Math.min(i - 1, j)];
        dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][left], dp[i - 1][right]);
    }
}

console.log(Math.max(...dp[n - 1]));