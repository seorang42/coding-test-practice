const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testN = Number(input[0]);
const testcases = [];
for (let i = 1; i < input.length; i += 3) {
    testcases.push(input.slice(i, i + 3));
}

const [dx, dy] = [[1, 2, 2, 1, -1, -2, -2, -1], [-2, -1, 1, 2, 2, 1, -1, -2]];
function getMin(l, start, end) {
    const visited = new Array(l).fill(0).map(() => new Array(l).fill(false));
    const queue = [];
    let head = 0;
    let count = 0;
    
    visited[start[1]][start[0]] = true;
    queue.push(start);
    
    while (queue.length - head !== 0) {
        const size = queue.length - head;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue[head++];
            if (x === end[0] && y === end[1]) return count;
            
            for (let j = 0; j < 8; j++) {
                const [newX, newY] = [x + dx[j], y + dy[j]];
                if (newX >= 0 && newX < l && newY >= 0 && newY < l && !visited[newY][newX]) {
                    queue.push([newX, newY]);
                    visited[newY][newX] = true;
                }
            }
        }
        
        count++;
    }
    
    return count;
}

for (const testcase of testcases) {
    const [l, start, end] = [Number(testcase[0]), testcase[1].split(" ").map(Number), testcase[2].split(" ").map(Number)];
    const count = getMin(l, start, end);
    console.log(count);
}