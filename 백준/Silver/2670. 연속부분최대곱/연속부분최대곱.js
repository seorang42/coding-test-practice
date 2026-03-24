const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, nums] = [Number(input[0]), input.slice(1).map(Number)]

const dp = new Array(n).fill(0);
dp[0] = nums[0];

let max = -Infinity;
for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] * dp[i - 1]);
    max = Math.max(max, dp[i]);
}

console.log(max.toFixed(3));