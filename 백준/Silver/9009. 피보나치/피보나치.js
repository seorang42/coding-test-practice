const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...numbers] = input;

const fibos = [];
for (let i = 0; i < 45; i++) {
    if (i === 0 || i === 1) {
        fibos.push(i);
        continue;
    }
    
    fibos.push(fibos[i - 1] + fibos[i - 2]);
}
const sortedFibos = fibos.reverse();

const answer = [];
numbers.map(Number).forEach((number) => {
    let num = number;
    const line = [];
    for (const fibo of sortedFibos) {
        if (num === 0) break;
        if (fibo > num) continue;
        num -= fibo;
        line.push(fibo);
    }
    answer.push(line.reverse().join(" "));
});

console.log(answer.join("\n"));