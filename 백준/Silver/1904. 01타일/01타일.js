const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dp = new Array(1000001);
dp[0] = 1;
dp[1] = 2;
for (let i = 2; i <= 1000000; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
}

const n = Number(input[0]) - 1;
console.log(dp[n]);