const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(inputs[0]);
const testcases = [];
for (let i = 1; i < inputs.length; i++) {
    const input = inputs[i].split(" ").map(Number);
    if (input.length === 3) {
        const [x, y, k] = input;
        const board = new Array(y).fill(0).map(() => new Array(x).fill(0));
        const bugs = inputs.slice(i + 1, i + 1 + k).map(el => el.split(" ").map(Number));
        bugs.forEach(([x, y]) => {
            board[y][x] = 1;
        })
        testcases.push(board);
        i += k;
    }
}

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];

function eat(board, x, y, xLimit, yLimit) {
    board[y][x] = 0;
    
    for (let k = 0; k < 4; k++) {
        const [newX, newY] = [x + dx[k], y + dy[k]];
        if (newX >= 0 && newX < xLimit && newY >= 0 && newY < yLimit && board[newY][newX] === 1) {
            eat(board, newX, newY, xLimit, yLimit);
        }
    }
}

testcases.forEach((board) => {
    let count = 0;
    const [xLimit, yLimit] = [board[0].length, board.length];
    
    for (let i = 0; i < yLimit; i++) {
        for (let j = 0; j < xLimit; j++) {
            if (board[i][j] === 1) {
                count++;
                eat(board, j, i, xLimit, yLimit);
            }
        }
    }
    console.log(count);
});