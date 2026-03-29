const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
const testcases = [];
for (let i = 1; i < input.length; i += 2) {
    const testcase = input.slice(i, i + 2);
    testcases.push(testcase);
}

function getWinner(n, testcase) {
    // 인원 수 파악
    const team = {};
    const participants = testcase.split(" ").map(Number);
    participants.forEach(part => {
        team[part] = (team[part] || 0) + 1;
    });
    
    // 점수 계산
    const scores = new Array(201).fill(0).map((_, index) => [index]);
    let count = 1;
    participants.forEach((part) => {
        if (team[part] === 6) {
            if (scores[part].length <= 5) scores[part][1] = (scores[part][1] || 0) + count;
            scores[part].push(count);
            count++;
        }
    });
    
    // 승자 판별
    const sorted = scores.filter(score => score.length === 8).sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else return a[6] - b[6];
    })
    
    return sorted[0][0];
}

const answer = [];
testcases.forEach(testcase => {
    const winner = getWinner(...testcase)
    answer.push(winner);
});
console.log(answer.join("\n"));