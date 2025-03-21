function solution(maps) {
    let map1 = maps.map(el => el.split(""));
    let map2 = maps.map(el => el.split(""));
    const [n, m] = [maps[0].length, maps.length];
    
    let [start, lever] = [[-1, -1], [-1, -1]];
    for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (maps[y][x] === "S") {
                start = [x, y];
            } else if (maps[y][x] === "L") {
                lever = [x, y];
            }
        }
    }
    
    function bfs(start, map, end) {
        let time = 0;
        const [dx, dy] = [[1, 0, -1, 0], [0, 1, 0, -1]];
        map[start[1]][start[0]] = "X";
        let queue = [start];
        
        while (queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [currX, currY] = queue.shift();
            
                for (let i = 0; i <= 3; i++) {
                    const [newX, newY] = [currX + dx[i], currY + dy[i]];
                    if (0 <= newX && newX < n && 0 <= newY && newY < m && map[newY][newX] !== "X") {
                        if (map[newY][newX] === end) {
                            return time + 1;
                        }
                        map[newY][newX] = "X";
                        queue.push([newX, newY]);
                    }
                }
            }
            time++;
        }
        
        return -1;
    }
    
    const disL = bfs(start, [...map1], "L");
    const disE = bfs(lever, [...map2], "E");
    
    if (disL !== -1 && disE !== -1) {
        return disL + disE;
    } else {
        return -1;
    }
}