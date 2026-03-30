const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const s = input[0].split("");
let [total0, total1] = [0, 0]
for (const letter of s) {
    if (letter === "0") total0++;
    else total1++;
}

let [remain0, remain1] = [total0 / 2, total1 / 2];

for (let i = s.length - 1; i >= 0 && remain0 > 0; i--) {
    if (s[i] === "0") {
        remain0--;
        s[i] = "";
    }
}

for (let i = 0; i < s.length && remain1 > 0; i++) {
    if (s[i] === "1") {
        remain1--;
        s[i] = "";
    }
}

console.log(s.join(""));