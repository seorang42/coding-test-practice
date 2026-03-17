const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

const queens = [];
function isPossible(x, y) {
    for (const [a, b] of queens) {
        if (x === a || y === b || Math.abs(x - a) === Math.abs(y - b)) return false;
    }
    return true;
}

let total = 0;
function dfs(depth) {
    if (depth === n) {
        total++
        return;
    }
    
    for (let i = 0; i < n; i++) {
        if (isPossible(i, depth)) {
            queens.push([i, depth]);
            dfs(depth + 1);
            queens.pop();
        }
    }
}

dfs(0);
console.log(total);