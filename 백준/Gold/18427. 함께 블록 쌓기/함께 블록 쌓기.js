const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, h] = input[0].split(" ").map(Number);
const students = [];
input.slice(1).forEach((line) => {
    students.push(line.split(" ").map(Number));
});

const dp = new Array(n + 1).fill(0).map(() => new Array(h + 1).fill(0));
dp[0][0] = 1;

// 학생
for (let i = 1; i <= n; i++) {
    const blocks = students[i - 1];

    // 높이
    for (let j = 0; j <= h; j++) {
        // 블록 안 쓰는 경우
        dp[i][j] += dp[i - 1][j];
        
        // 블럭 하나 쓰는 경우
        for (let k = 0; k < blocks.length; k++) {
            const block = blocks[k];
            if (j >= block) {
                dp[i][j] += dp[i - 1][j - block];
            }
        }
        
        dp[i][j] %= 10007
    }
}

console.log(dp[n][h]);