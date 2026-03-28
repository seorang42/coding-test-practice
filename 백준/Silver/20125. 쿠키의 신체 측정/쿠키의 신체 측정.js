const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const board = input.slice(1).map(el => el.split(""));

function getHeart(board) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "*") return [j, i + 1];
        }
    }
}

const [dx, dy] = [[-1, 1, 0, -1, 1], [0, 0, 1, 0, 0]];

function getArmLength(board, heart, type) {
    let length = 0;
    let [x, y] = [heart[0] + dx[type], heart[1] + dy[type]];
    while (true) {
        if (!board[y]?.[x] || board[y][x] === "_") break;
        length++;
        [x, y] = [x + dx[type], y + dy[type]];
    }
    
    return length;
}

function getLegLength(board, waist, type) {
    let length = 0;
    let [x, y] = [waist[0] + dx[type], waist[1]];
    while (true) {
        if (!board[y]?.[x] || board[y][x] === "_") break;
        length++;
        y++;
    }
    
    return length;
}

function getWaist(board, heart) {
    let length = 0;
    let [x, y] = [heart[0] + dx[2], heart[1] + dy[2]];
    while (true) {
        if (!board[y]?.[x] || board[y][x] === "_") break;
        length++;
        y++;
    }
    
    return { waist: [x, y], length };
}

const heart = getHeart(board);
const { waist, length: wLength } = getWaist(board, heart);

console.log(heart[1] + 1, heart[0] + 1);
console.log(getArmLength(board, heart, 0), getArmLength(board, heart, 1), wLength, getLegLength(board, waist, 3), getLegLength(board, waist, 4));