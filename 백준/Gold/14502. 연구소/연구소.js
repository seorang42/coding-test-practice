const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map(el => el.split(" ").map(Number));
const emptyCords = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === 0) emptyCords.push([j, i]);
    }
}

function getCombis(arr, n) {
    if (n === 1) return arr.map(el => [el]);
    const result = [];
    
    arr.forEach((fixed, index) => {
        const remain = arr.slice(index + 1);
        const combi = getCombis(remain, n - 1);
        const combine = combi.map(el => [fixed, ...el]);
        result.push(...combine);
    })
    
    return result;
}

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
function spreadVirus(board, x, y) {
    board[y][x] = 2;
    
    for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];
        if (newX >= 0 && newX < m && newY >= 0 && newY < n && board[newY][newX] === 0) {
            spreadVirus(board, newX, newY);
        }
    }
}

const combis = getCombis(emptyCords, 3);
let max = -Infinity;
for (const combi of combis) {
    const currentBoard = board.map(row => [...row]);
    combi.forEach(([x, y]) => {
       currentBoard[y][x] = 1; 
    });
    
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (currentBoard[i][j] === 2) spreadVirus(currentBoard, j, i);
        }
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (currentBoard[i][j] === 0) count++;
        }
    }
    max = Math.max(max, count);
}

console.log(max);