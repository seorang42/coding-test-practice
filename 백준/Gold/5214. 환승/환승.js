const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k, m] = input[0].split(" ").map(Number);
const tubes = input.slice(1).map(el => el.split(" ").map(Number));
const graph = new Array(n + m + 1).fill(0).map(() => []);

for (let i = 0; i < m; i++) {
    const tubeNode = n + i + 1;

    for (const station of tubes[i]) {
        graph[station].push(tubeNode);
        graph[tubeNode].push(station);
    }
}

const queue = [1];
let head = 0;
const visited = new Array(n + m + 1).fill(-1);
visited[1] = 1;

while (queue.length - head !== 0) {
    const node = queue[head++];
    const nexts = graph[node];
    for (const next of nexts) {
        if (visited[next] === -1) {
            queue.push(next);
            visited[next] = visited[node] + 1;
        }
    }
}

console.log(visited[n] === -1 ? -1 : Math.ceil(visited[n] / 2));