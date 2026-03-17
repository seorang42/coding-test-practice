const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, links] = [Number(input[0]), Number(input[1]), input.slice(2).map(el => el.split(" ").map(Number))];
const graph = new Array(n + 1).fill(0).map(() => []);
links.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
})

let count = 0;
function dfs(graph, node, visited) {
    visited[node] = true;
    count++;
    
    for (const nextNode of graph[node]) {
        if (!visited[nextNode]) {
            dfs(graph, nextNode, visited);
        }
    }
}

dfs(graph, 1, new Array(n + 1).fill(false));
console.log(count - 1);