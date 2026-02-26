const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, distances, costs] = [Number(input[0]), input[1].split(" ").map(Number), input[2].split(" ").map(Number)];

let cost = 0;
for (let i = 0; i < n - 1; i++) {
    cost += costs[i] * distances[i];
    
    let next = i + 1;
    while (costs[i] < costs[next] && next < n - 1) {
        cost += costs[i] * distances[next];
        next++;
    }
    
    if (next !== i + 1) i = next;
}

console.log(cost);