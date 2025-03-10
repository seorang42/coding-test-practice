function solution(progresses, speeds) {
    var answer = [];
    let [day, completed] = [1, 0];
    let temp = 0;
    while (completed !== progresses.length) {
        for (let i = completed; i < progresses.length; i++) {
            progresses[i] += speeds[i];
            if (i === completed && progresses[i] >= 100) {
                temp++;
                completed++;
            }
            
            if (i === progresses.length - 1 && temp !== 0) {
                answer.push(temp);
                temp = 0;
            }
        }
    }
    return answer;
}