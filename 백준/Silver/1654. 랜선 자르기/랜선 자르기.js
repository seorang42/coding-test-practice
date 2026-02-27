const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [kn, ...lineStr] = input;
const [k, n] = kn.split(" ").map(Number);
const lines = lineStr.map(Number);
let [min, max] = [1, Math.max(...lines)];

let result = 0;
while (min <= max) {
    const mid = parseInt((min + max) / 2);
    const count = lines.reduce((acc, cur) => acc + parseInt(cur / mid), 0);
    if (count < n) {
        max = mid - 1;
    } else {
        result = mid;
        min = mid + 1;
    }
}

console.log(result);