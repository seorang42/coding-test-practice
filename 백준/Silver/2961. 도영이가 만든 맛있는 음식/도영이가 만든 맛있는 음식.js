const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ingredients] = [Number(input[0]), input.slice(1).map(el => el.split(" ").map(Number))];

function combinations(arr, n) {
    if (n === 1) return arr.map((el) => [el]);
    const result = [];
    
    arr.forEach((fixed, i) => {
        const rest = arr.slice(i + 1);
        const combi = combinations(rest, n - 1);
        const combine = combi.map((el) => [fixed, ...el]);
        result.push(...combine);
     })
     
     return result;
}

const combis = [];
for (let i = 1; i <= n; i++) {
    const result = combinations(new Array(n).fill(0).map((_, index) => index), i);
    combis.push(...result);
}

let min = Infinity;
combis.forEach((combi) => {
    let [sour, bit] = [1, 0];
    combi.map(i => ingredients[i]).forEach(([s, b]) => {
        sour *= s;
        bit += b;
    });
    min = Math.min(min, Math.abs(sour - bit));
})

console.log(min);