const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...lines] = input;
const testcases = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].split(" ").length === 1) {
        const testcase = lines.slice(i + 1, i + 1 + Number(lines[i]));
        testcases.push(testcase);
    }
}

const answer = [];
for (let i = 0; i < testcases.length; i++) {
    const sorted = testcases[i].map(el => el.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
    let [minRank, count] = [sorted[0][1], 1];
    for (let j = 1; j < sorted.length; j++) {
        const rank = sorted[j][1];
        if (rank < minRank) {
            minRank = rank;
            count++;
        }
        else continue;
    } 
    answer.push(count);
}

console.log(answer.join("\n"));