const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const k = Number(input[0]);
const testcases = [];
for (let i = 1; i < input.length; i++) {
    const [v, e] = input[i].split(" ").map(Number);
    const graph = new Array(v + 1).fill(0).map(() => []);
    for (let j = i + 1; j < i + e + 1; j++) {
        const [start, end] = input[j].split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
    }
    testcases.push(graph);
    i += e;
}

function isBinary(graph) {
    const visited = new Array(graph.length).fill(0);
    
    for (let i = 1; i < graph.length; i++) {
        if (visited[i]) continue;
        
        const queue = [i];
        let head = 0;
        visited[i] = 1;
        
        while(queue.length - head !== 0) {
            const node = queue[head++];
            
            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = -visited[node];
                    queue.push(next);
                } else if (visited[next] === visited[node]) return false;
            }
        }
    }
    
    return true;
}

for (const testcase of testcases) {
    console.log(isBinary(testcase) ? "YES" : "NO");
}