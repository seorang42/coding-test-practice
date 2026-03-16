const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, board] = [Number(input[0]), input.slice(1).map(el => el.split(" ").map(Number))];

const visited = new Array(11).fill(false);
const result = [];
let minValue = Infinity;

function dfs(depth) {
    if (depth === n - 1) {
        let totalCost = 0;
        let cur = 0;
        for (let i = 0; i < n - 1; i++) {
            let nextNode = result[i];
            let cost = board[cur][nextNode];
            if (cost === 0) return;
            totalCost += cost;
            cur = nextNode;
        }
        let cost = board[cur][0];
        if (cost === 0) return;
        totalCost += cost;
        minValue = Math.min(minValue, totalCost);
    }
    
    // n번 거치기
    for (let i = 1; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(i);
        dfs(depth + 1);
        result.pop();
        visited[i] = false;
    }
}

dfs(0);
console.log(minValue);