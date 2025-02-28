function solution(dirs) {
    const xField = new Array(11).fill(0).map(el => new Array(11).fill(0));
    const yField = new Array(11).fill(0).map(el => new Array(11).fill(0));
    const [dx, dy] = [[0, 0, 1, -1], [1, -1, 0, 0]];
    const dir = {U : 0, D : 1, R : 2, L : 3};
    let [x, y] = [5, 5];
    
    let answer = 0;
    for (let i = 0; i < dirs.length; i++) {
        if (dirs[i] === "U" || dirs[i] === "D") {
            if (y + dy[dir[dirs[i]]] < 0 || y + dy[dir[dirs[i]]] > 10) {
                continue;
            }
            if (dirs[i] === "U") {
                y += dy[dir[dirs[i]]];
            }
            if (yField[y][x] === 0) {
                answer++;
                yField[y][x]++;
            }
            if (dirs[i] === "D") {
                y += dy[dir[dirs[i]]];
            }
        }
        
        if (dirs[i] === "R" || dirs[i] === "L") {
            if (x + dx[dir[dirs[i]]] < 0 || x + dx[dir[dirs[i]]] > 10) {
                continue;
            }
            if (dirs[i] === "L") {
                x += dx[dir[dirs[i]]];
            }
            if (xField[y][x] === 0) {
                answer++;
                xField[y][x]++;
            }
            if (dirs[i] === "R") {
                x += dx[dir[dirs[i]]];
            }
        }
    }
    
    return answer;
}