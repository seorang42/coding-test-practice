const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const visited = new Array(100001).fill(false);
function bfs(current) {
    const queue = [];
    let head = 0;
    let count = 0;

    visited[current] = true;
    queue.push(current);
    
    while(queue.length - head !== 0) {
        const size = queue.length - head;

        for (let i = 0; i < size; i++) {
            const node = queue[head++];
            if (node === k) return count;

            const next = [node - 1, node + 1, node * 2];
            next.forEach((nextNode) => {
                if (nextNode >= 0 && nextNode <= 100000 && !visited[nextNode]) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            });
        }

        count++;
    }
}

console.log(bfs(n));