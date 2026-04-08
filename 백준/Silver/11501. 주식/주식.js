const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
const testcases = [];
for (let i = 1; i < input.length; i += 2) {
    const n = Number(input[i]);
    const days = input[i + 1].split(" ").map(Number);
    
    testcases.push([n, days]);
}

const answer = [];
for (const testcase of testcases) {
    const [n, days] = testcase;
    let [max, profit] = [0, 0];
    for (let i = days.length - 1; i >= 0; i--) {
        if (days[i] > max) {
            max = days[i];
        } else {
            profit += max - days[i];
        }
    }
    
    answer.push(profit);
}

console.log(answer.join("\n"));