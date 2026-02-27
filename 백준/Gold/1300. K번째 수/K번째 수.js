const fs = require("fs");
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let [min, max] = [1, n * n];
let result = 0;

while (min <= max) {
    const mid = parseInt((min + max) / 2);
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n);
    }
    
    if (total >= k) {
        result = mid;
        max = mid - 1;
    } else {
        min = mid + 1;
    }
}

console.log(result);