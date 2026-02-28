const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const numbers = new Array(n).fill(0).map((_, index) => index + 1);

const getCombi = (selected, remain, count) => {
    const combis = [];
    if (count === 1) {
        remain.forEach((num) => combis.push([...selected, num].join(" ")));
        return combis;
    }
    
    for (const num of remain) {
        const newSelected = [...selected, num];
        const newRemain = remain.filter(el => num !== el);
        const newCombis = getCombi(newSelected, newRemain, count - 1);
        combis.push(...newCombis);
    }
    return combis;
}

console.log(getCombi([], numbers, m).join("\n"));