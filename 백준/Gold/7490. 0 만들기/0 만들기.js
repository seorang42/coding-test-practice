const fs = require("fs");
const [n, ...testcases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const operators = [" ", "+", "-"];
const selected = [];

const dfs = (n, depth) => {
    if (depth === n - 1) {
        const answer = [];
        let line = "";
        for (let i = 1; i < n; i++) {
            line += i + selected[i - 1];
        }
        line += n;
        if (eval(line.split(" ").join("")) === 0) console.log(line);
        return;
    }
    
    operators.forEach((op) => {
        selected.push(op);
        dfs(n, depth + 1);
        selected.pop(op);
    })
}

testcases.forEach((num) => {
    dfs(num, 0);
    console.log();
});