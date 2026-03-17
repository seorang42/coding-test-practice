const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map(el => el.split(""));
const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

const visited = new Array(27).fill(false);
let count = 0;
let max = -Infinity;
function findPath(x, y) {
    const currentAlp = (board[y][x]).charCodeAt() - 65;
    if (visited[currentAlp]) return;
    
    visited[currentAlp] = true;
    count++
    
    max = Math.max(max, count);
    
    for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [x + dx[i], y + dy[i]];
        if (nextX < 0 || nextX >= C || nextY < 0 || nextY >= R) continue;
        
        findPath(nextX, nextY);
    }
    
    visited[currentAlp] = false;
    count--;
}

findPath(0, 0);
console.log(max);