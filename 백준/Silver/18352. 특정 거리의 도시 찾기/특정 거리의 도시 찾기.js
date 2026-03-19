const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = new Array(n + 1).fill(0).map(() => []);
for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
}

const queue = [x];
let head = 0;
const visited = new Array(n + 1).fill(false);
visited[x] = true;

let distance = 0;
const answer = [];
while (distance < k) {
    const size = queue.length - head;
    
    for (let i = 0; i < size; i++) {
        const node = queue[head++];
        const nexts = graph[node];
        nexts.forEach((next) => {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        });
    }
    
    distance++;
}

const cities = queue.slice(head).sort((a, b) => a - b);
console.log(cities.length !== 0 ? cities.join("\n") : -1);