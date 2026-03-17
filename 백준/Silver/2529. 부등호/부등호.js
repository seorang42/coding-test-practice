const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ops] = [Number(input[0]), input[1].split(" ")];

const used = new Array(10).fill(false);

const result = []
const line = [];
function dfs(depth) {
    if (depth === n) {
        result.push(line.join(""));
    }
    
    for (let i = 0; i <= 9; i++) {
        if (used[i]) continue;
        
        if (ops[depth] === ">") {
            if (line[depth] > i) {
                used[i] = true;
                line.push(i);
                dfs(depth + 1);
                used[i] = false;
                line.pop();
            } else continue;
        } else {
            if (line[depth] < i) {
                used[i] = true;
                line.push(i);
                dfs(depth + 1);
                used[i] = false;
                line.pop();
            } else continue;
        }
    }
}

for (let i = 0; i <= 9; i++) {
    used[i] = true;
    line.push(i);
    dfs(0);
    used[i] = false;
    line.pop();
}

console.log(result[result.length - 1]);
console.log(result[0]);