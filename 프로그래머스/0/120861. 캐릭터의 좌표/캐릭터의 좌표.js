function solution(keyinput, board) {
    let location = [0, 0];
    const move = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
    const limit = { x: Math.floor(board[0] / 2), y: Math.floor(board[1] / 2) };
    
    keyinput.forEach((input) => {
        const [moveX, moveY] = move[input];
        let [newX, newY] = location;
        newX = moveX >= 0 ? Math.min(newX + moveX, limit.x) : Math.max(newX + moveX, -limit.x);
        newY = moveY >= 0 ? Math.min(newY + moveY, limit.y) : Math.max(newY + moveY, -limit.y);
        
        location = [newX, newY];
    })
    
    return location;
}