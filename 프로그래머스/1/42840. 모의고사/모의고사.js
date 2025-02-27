function solution(answers) {
    var answer = [];
    const strategys = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    const counts = [0, 0, 0]
    for (const [i, answer] of answers.entries()) {
        for (const [j, strategy] of strategys.entries()) {
            if (answer === strategy[i % strategy.length]) {
                counts[j]++;
            }
        }
    }
    
    let largest = Math.max(...counts);
    for (let i = 0; i <= 2; i++) {
        if (counts[i] === largest) answer.push(i + 1);
    }
    return answer;
}