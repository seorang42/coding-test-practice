const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const board = input.slice(1, n + 1).map(el => el.split(" ").map(Number));
const [s, y, x] = input[n + 1].split(" ").map(Number);

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
let time = 0;
const visited = new Array(n).fill(() => new Array(n).fill(false));
const queue = [];
let head = 0;
for (let virus = 1; virus <= k; virus++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === virus) {
                queue.push([virus, j, i]);
            }
        }
    }
}

while (time < s) {
    const size = queue.length - head;
    for (let i = 0; i < size; i++) {
        const [virus, x, y] = queue[head++];
        for (let d = 0; d < 4; d++) {
            const [newX, newY] = [x + dx[d], y + dy[d]];
            if (newX >= 0 && newX < n && newY >= 0 && newY < n && board[newY][newX] === 0) {
                board[newY][newX] = virus;
                queue.push([virus, newX, newY]);
            }
        }
    }
    
    time++;
}

console.log(board[y - 1][x - 1]);