function solution(lines) {
    const board = Array(200).fill(0);
    const arrangedLines = lines.map((line) => line.map((cord) => cord + 100));
    
    arrangedLines.forEach(([a, b]) => {
        for (let i = a; i < b; i++) {
            board[i]++;
        }
    });
    
    const answer = board.filter((num) => num > 1).length;
    return answer;
}