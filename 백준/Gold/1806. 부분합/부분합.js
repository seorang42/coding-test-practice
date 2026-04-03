const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let left = 0;
let sum = 0;
let answer = Infinity;

for (let right = 0; right < n; right++) {
    sum += numbers[right];
    
    while (sum >= s) {
        answer = Math.min(answer, right - left + 1);
        sum -= numbers[left];
        left++;
    }
}

console.log(answer === Infinity ? 0 : answer);