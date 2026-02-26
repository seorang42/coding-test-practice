const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const baskets = new Array(K).fill(0).map((_, index) => K - index);
let total = baskets.reduce((acc, cur) => acc + cur, 0);

let flag = true;
if (total > N) {
    flag = false;
    console.log(-1);
    return;
}

while (flag) {
    for (let i = 0; i < K; i++) {
        if (N === total) {
            flag = false;
            break;
        }
        
        baskets[i]++;
        total++;
    }
}

console.log(baskets[0] - baskets[baskets.length - 1]);