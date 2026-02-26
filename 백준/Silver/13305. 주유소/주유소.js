const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, distances, costs] = [Number(input[0]), input[1].split(" ").map(BigInt), input[2].split(" ").map(BigInt)];

let [cost, minCost] = [0n, Infinity];
for (let i = 0; i < distances.length; i++) {
    if (costs[i] < minCost) minCost = costs[i];
    cost += distances[i] * minCost;
}

console.log(cost.toString());