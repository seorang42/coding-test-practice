const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const s = input[0];

let [total0, total1, remain0, remain1, usable0] = [0, 0, 0, 0, 0];
for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") total0++;
    else total1++;
}
[remain0, remain1] = [total0 / 2, total1 / 2];

let answer = "";
for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
        usable0++;
    } else {
        if (total1 > remain1) {
            total1--;
        } else {
            while (remain0 > 0 && usable0 > 0) {
                answer += "0";
                remain0--;
                usable0--;
            }
            answer += "1";
            total1--;
            remain1--;
        }
    }
}

if (remain0 > 0) {
    answer += "0".repeat(remain0);
}
if (remain1 > 0) {
    answer += "1".repeat(remain1);
}

console.log(answer);