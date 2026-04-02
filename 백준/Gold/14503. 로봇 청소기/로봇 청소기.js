const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);
const room = input.slice(2).map(el => el.split(" ").map(Number));
const [dx, dy] = [[0, 1, 0, -1], [-1, 0, 1, 0]];

function isEmpty(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n && room[y][x] === 0
}

let answer = 0;
function clean(x, y, d) {
    if (room[y][x] === 0) {
        room[y][x] = 2;
        answer++;
    }
    
    // 비어 있는 칸이 있는지 확인
    let hasEmpty = false;
    for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];
        if (isEmpty(newX, newY)) {
            hasEmpty = true;
            break;
        }
    }
    
    // 비어 있는 칸이 없다면
    if (!hasEmpty) {
        const backD = (d + 2) % 4;
        const [backX, backY] = [x + dx[backD], y + dy[backD]];
        if (backX >= 0 && backX < m && backY >= 0 && backY < n && room[backY][backX] !== 1) {
            clean(backX, backY, d);
        }
    }
    // 있다면
    else {
        const nextD = (d + 3) % 4;
        const [nextX, nextY] = [x + dx[nextD], y + dy[nextD]];
        if (isEmpty(nextX, nextY)) clean(nextX, nextY, nextD);
        else clean(x, y, nextD);
    }
}

clean(c, r, d);

console.log(answer);