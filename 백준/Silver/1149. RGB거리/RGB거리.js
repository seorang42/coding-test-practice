const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const houses = input.slice(1).map(el => el.split(" ").map(Number));

const dp = new Array(n).fill(0).map(() => new Array(3).fill(Infinity));
for (let i = 0; i < 3; i++) {
    dp[0][i] = houses[0][i];
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            if (j === k) continue;
            dp[i][j] = Math.min(dp[i][j], houses[i][j] + dp[i - 1][k]);
        }
    }
}


console.log(Math.min(...dp[n - 1]));