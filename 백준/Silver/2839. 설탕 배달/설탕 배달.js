const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());
const max5 = parseInt(n / 5);

let answer = Infinity;
for (let i = 0; i <= max5; i++) {
    const remain = n - (i * 5);
    if (remain % 3 === 0) {
        const count3 = parseInt(remain / 3);
        if (i + count3 < answer) answer = i + count3;
    }
}

console.log(answer === Infinity ? -1 : answer)