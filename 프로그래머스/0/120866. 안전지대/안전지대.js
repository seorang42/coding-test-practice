const validateBoard = (i, j, board) => {
    return board[i] !== undefined && board[i][j] !== undefined && board[i][j] !== 1;
}

const fillDanger = (i, j, board) => {
    const [dx, dy] = [[1, 1, 0, -1, -1, -1, 0, 1], [0, 1, 1, 1, 0, -1, -1, -1]]
    for (let k = 0; k < 8; k++) {
        const [x, y] = [j + dx[k], i + dy[k]];
        if (validateBoard(y, x, board)) {
            board[y][x] = 2
        }
    }
}

const countSafe = (board) => {
    let result = 0;
    board.forEach((line) => {
        line.forEach((el) => {
            if (el === 0) result++;
        })
    });
    
    return result;
}

function solution(board) {
    const n = board.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                fillDanger(i, j, board);
            }
        }
    }
    
    return countSafe(board);
}