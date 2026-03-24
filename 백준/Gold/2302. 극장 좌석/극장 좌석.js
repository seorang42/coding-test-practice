const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const vips = input.slice(2).map(Number);

let index = 1;
const parts = [];
for (const vip of vips) {
    parts.push(vip - index);
    index = vip + 1;
}
if (index <= n) parts.push(n - index + 1);

const dp = new Array(41).fill(0);
dp[0] = 1;
dp[1] = 1;
for (let i = 2; i <= 40; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
}

const answer = parts.reduce((acc, cur) => acc * dp[cur], 1);
console.log(answer);