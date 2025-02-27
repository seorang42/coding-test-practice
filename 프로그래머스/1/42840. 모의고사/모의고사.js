function solution(answers) {
    var answer = [];
    const strategy = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    const count = [0, 0, 0]
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j <= 2; j++) {
            if (strategy[j][i % strategy[j].length] === answers[i]) {
                count[j]++;
            }
        }
    }
    
    let largest = [...count].sort((a, b) => b - a)[0];
    for (let i = 0; i <= 2; i++) {
        if (count[i] === largest) answer.push(i + 1);
    }
    return answer;
}