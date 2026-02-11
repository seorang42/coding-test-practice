const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString());

let result = 0;
for (let i = 1; i <= n; i++) {
    result += i;
}

console.log(result);