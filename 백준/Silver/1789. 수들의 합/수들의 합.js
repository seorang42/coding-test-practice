const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let [total, count] = [0, 0];
while (total <= n) {
    count++;
    total += count;
}

console.log(count - 1);