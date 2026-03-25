const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const dp = new Array(1000001).fill(Infinity);
dp[1] = 0;
for (let i = 2; i <= 1000000; i++) {
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
}

console.log(dp[n]);