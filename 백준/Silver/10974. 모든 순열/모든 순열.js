const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

const visited = new Array(n).fill(false);
const answer = [];

const dfs = (selected, depth) => {
    if (depth === n) {
        answer.push(selected.join(" "));
        return;
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs([...selected, i + 1], depth + 1);
        visited[i] = false;
    }
}

dfs([], 0);
console.log(answer.join("\n"));