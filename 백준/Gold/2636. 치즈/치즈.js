const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map(el => el.split(" ").map(Number));

let count = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) count++;
    }
}

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
let meltList = [];
let visited = new Array(n).fill(0).map(() => new Array(m).fill(false));

let time = 0;
while (count - meltList.length !== 0) {
    visited = new Array(n).fill(0).map(() => new Array(m).fill(false));

    meltList.forEach(([x, y]) => {
        board[y][x] = 0;
    });
    count -= meltList.length;
    meltList = [];
    
    dfs(0, 0);
    time++;
}

function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [x + dx[i], y + dy[i]];
        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) continue;
        
        if (board[nextY][nextX] === 0 && !visited[nextY][nextX]) {
            visited[nextY][nextX] = true;
            dfs(nextX, nextY);
        }
        
        if (board[nextY][nextX] === 1 && !visited[nextY][nextX]) {
            visited[nextY][nextX] = true;
            meltList.push([nextX, nextY]);
        }
    }
}

console.log(time);
console.log(count);