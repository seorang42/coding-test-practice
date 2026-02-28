const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const numbers = new Array(n).fill(0).map((_, index) => index + 1);
const visited = new Array(n).fill(false);
const selected = [];

const answer = [];
const dfs = (arr, depth) => {
    if (depth === m) {
        answer.push(selected.join(" "));
        return;
    }
    for (let i = 1; i <= arr.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(numbers, 0);
console.log(answer.join("\n"));