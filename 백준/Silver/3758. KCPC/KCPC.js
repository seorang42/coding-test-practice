const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
const testcases = [];
for (let i = 1; i < input.length; i++) {
    const line = input[i].split(" ").map(Number);
    if (line.length === 4) {
        const [n, k, t, m] = line;
        const logs = input.slice(i + 1, i + m + 1).map(el => el.split(" ").map(Number));
        i = i + m;
        testcases.push([line, logs]);
    }
}

const answer = [];
testcases.forEach((testcase) => {
    const [[n, k, t, m], logs] = testcase;
    const teams = new Array(n + 1).fill(0).map((_, index) => [index, 0, new Array(k + 1).fill(0), 0, 0]);
    
    for (let i = 0; i < m; i++) {
        const [currTeam, currK, currScore] = logs[i];
        if (currScore > teams[currTeam][2][currK]) {
            const diff = currScore - teams[currTeam][2][currK];
            teams[currTeam][2][currK] = currScore;
            teams[currTeam][1] += diff;
        }
        teams[currTeam][3]++;
        teams[currTeam][4] = i;
    }
    
    const sorted = teams.slice(1).sort((a, b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        else if (a[3] !== b[3]) return a[3] - b[3];
        else return a[4] - b[4];
    })
    
    let rank = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][0] === t) rank = i + 1;
    }
    answer.push(rank);
});

console.log(answer.join("\n"));