const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, cities, limit] = [Number(input[0]), input[1].split(" ").map(Number), Number(input[2])];

let [min, max] = [1, Math.max(...cities)]

while (min <= max) {
    const mid = parseInt((min + max) / 2);
    const total = cities.reduce((acc, cur) => acc + Math.min(cur, mid), 0);
    if (total <= limit) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(max);