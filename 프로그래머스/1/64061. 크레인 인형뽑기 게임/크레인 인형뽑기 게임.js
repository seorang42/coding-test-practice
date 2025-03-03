function solution(board, moves) {
    let answer = 0;
    const stacks = new Array(board.length).fill(0).map(el => []);
    const box = [];
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== 0) {
                stacks[j].push(board[i][j]);
            }
        }
    }
    
    for (let i = 0; i < moves.length; i++) {
        if (stacks[moves[i] - 1].length !== 0) {
            const doll = stacks[moves[i] - 1].pop();
            if (box.length !== 0 && doll === box[box.length - 1]) {
                box.pop();
                answer += 2;
            } else {
                box.push(doll);
            }
        }
    }
    return answer;
}