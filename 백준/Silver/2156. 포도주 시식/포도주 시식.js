const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, cups] = [Number(input[0]), [0, ...input.slice(1).map(Number)]];

const dp = new Array(10001);
dp[0] = 0;
dp[1] = cups[1];
dp[2] = cups[1] + cups[2];
for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], cups[i] + dp[i - 2], cups[i] + cups[i - 1] + dp[i - 3]);
}

console.log(dp[n]);