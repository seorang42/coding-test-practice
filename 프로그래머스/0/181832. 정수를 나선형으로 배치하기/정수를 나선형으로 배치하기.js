function validate(x, y, dx, dy, dir, n, array) {
    const [newX, newY] = [x + dx[dir], y + dy[dir]];
    return newX >= 0 && newX < n && newY >= 0 && newY < n && array[newY][newX] === 0;
}

function solution(n) {
    const answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
    let [x, y, dir] = [0, 0, 0];
    
    for (let i = 1; i <= n ** 2; i++) {
        answer[y][x] = i;
        if (validate(x, y, dx, dy, dir, n, answer)) {
            [x, y] = [x + dx[dir], y + dy[dir]];
        } else {
            dir = (dir + 1) % 4;
            [x, y] = [x + dx[dir], y + dy[dir]];
        }
    }
    
    return answer;
}