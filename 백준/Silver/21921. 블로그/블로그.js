const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const viewers = input[1].split(" ").map(Number);


let sum = 0;
for (let i = 0; i < x; i++) {
    sum += viewers[i];
}

let max = sum;
let count = 1;

for (let i = x; i < n; i++) {
    sum = sum - viewers[i - x] + viewers[i];
    
    if (sum > max) {
        max = sum;
        count = 1;
    } else if (sum === max) {
        count++;
    }
}

if (max === 0) {
    console.log("SAD");
} else {
    console.log(max);
    console.log(count);
}