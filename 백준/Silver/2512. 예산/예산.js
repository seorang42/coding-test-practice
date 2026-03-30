const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const budgets = input[1].split(" ").map(Number);
const limit = Number(input[2]);

function parametric() {
    let answer = 0;
    let left = 0;
    let right = Math.max(...budgets);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        let sum = 0;
        for (const budget of budgets) {
            sum += Math.min(budget, mid);
        }
        
        if (sum <= limit) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return answer;
}

console.log(parametric());