const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const town = input.slice(1).map(el => el.split("").map(Number));

const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
let blockNum = 0;
const blocks = [];
function getBlock(blockNum, x, y) {
    town[y][x] = 0;
    blocks[blockNum] = (blocks[blockNum] || 0) + 1;
    
    for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];
        if (newX >= 0 && newX < n && newY >= 0 && newY < n && town[newY][newX] === 1) {
            getBlock(blockNum, newX, newY);
        }
    }
}

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (town[y][x] === 1) {
            getBlock(blockNum, x, y);
            blockNum++;
        }
    }
}

console.log(blocks.length);
console.log(blocks.sort((a, b) => a - b).join("\n"));