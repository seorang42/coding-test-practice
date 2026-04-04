const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const items = input.slice(1).map(el => el.split(" ").map(Number));

const dp = new Array(n + 1).fill(0).map(el => new Array(k + 1).fill(0));
for (let i = 1; i <= n; i++) {
    const [weight, value] = items[i - 1];
    
    for (let j = 0; j <= k; j++) {
        if (j < weight) {
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
        }
    }
}


console.log(dp[n][k]);