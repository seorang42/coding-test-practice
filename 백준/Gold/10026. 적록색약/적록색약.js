const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const board = input.slice(1).map(el => el.split(""));
const cbBoard = board.map(el => el.map(color => color === "R" ? "G" : color));

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
function fillColor(board, color, x, y) {
    board[y][x] = "X";
    
    for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];
        if (newX >= 0 && newX < n && newY >= 0 && newY < n && board[newY][newX] === color) {
            fillColor(board, color, newX, newY);
        }
    }
}

function checkBoard(board) {
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const selected = board[i][j];
            if (selected !== "X") {
                count++;
                fillColor(board, selected, j, i);
            }
        }
    }
    
    return count;
}

console.log(`${checkBoard(board)} ${checkBoard(cbBoard)}`);