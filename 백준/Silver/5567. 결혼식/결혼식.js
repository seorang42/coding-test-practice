const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = [Number(input[0]), Number(input[1])];
const list = input.slice(2).map(el => el.split(" ").map(Number));

const graph = new Array(n + 1).fill(0).map(() => []);
for (const member of list) {
    const [a, b] = member;
    graph[a].push(b);
    graph[b].push(a);
}

const visited = new Array(n + 1).fill(false);
visited[1] = true
const queue = [1];
let head = 0;
for (let i = 0; i < 2; i++) {
    const size = queue.length - head;
    
    for (let i = 0; i < size; i++) {
        const node = queue[head++];
        for (const next of graph[node]) {
            if (!visited[next]) {
                queue.push(next);
                visited[next] = true;
            }
        }
    }
}

console.log(visited.filter(el => el).length - 1);