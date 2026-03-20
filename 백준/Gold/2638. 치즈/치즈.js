const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [yLimit, xLimit] = input[0].split(" ").map(Number);
const board = input.slice(1).map(el => el.split(" ").map(Number));

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

function countCheeze(board) {
    let count = 0;
    for (let i = 0; i < yLimit; i++) {
        for (let j = 0; j < xLimit; j++) {
            if (board[i][j] === 1) count++;
        }
    }
    return count;
}

let answer = 0;
while (countCheeze(board) > 0) {
    const queue = [];
    let head = 0;
    queue.push([0, 0]);
    const visited = new Array(yLimit).fill(0).map(() => new Array(xLimit).fill(0));
    while (queue.length - head !== 0) {
        const [x, y] = queue[head++];
        visited[y][x] = -1;
        
        for (let d = 0; d < 4; d++) {
            const [newX, newY] = [x + dx[d], y + dy[d]];
            if (newX >= 0 && newX < xLimit && newY >= 0 && newY < yLimit) {
                if (board[newY][newX] === 0 && visited[newY][newX] !== -1) {
                    visited[newY][newX] = -1;
                    queue.push([newX, newY]);
                } else if (board[newY][newX] === 1) {
                    visited[newY][newX]++;
                }
            }
        }
    }
    
    for (let i = 0; i < yLimit; i++) {
        for (let j = 0; j < xLimit; j++) {
            if (visited[i][j] >= 2) {
                board[i][j] = 0;
            }
        }
    }
    answer++;
}

console.log(answer);