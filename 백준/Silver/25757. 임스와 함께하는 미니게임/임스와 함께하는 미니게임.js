const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nt = input[0].split(" ");
const [n, type] = [Number(nt[0]), nt[1]];
const gameMap = { "Y": 1, "F": 2, "O": 3 }
const nameSet = [...new Set([...input.slice(1)])];

function combinations(arr, n) {
    if (n === 1) return arr.map(el => [el]);
    const result = [];
    
    arr.forEach((fixed, i) => {
        const remain = arr.slice(i + 1);
        const combis = combinations(remain, n - 1);
        const combine = combis.map(el => [...fixed, el]);
        result.push(...combine);
    });
    
    return result;
}

const ops = gameMap[type];
let answer = 0;
while (nameSet.length >= ops) {
    for (let i = 0; i < ops; i++) {
        nameSet.pop();
    }
    answer++;
}

console.log(answer);