function solution(numLog) {
    var answer = '';
    numLog.forEach((el, index) => {
        if (index !== 0) {
            const diff = el - numLog[index - 1];
            if (diff === 1) {
                answer += "w";
            } else if (diff === -1) {
                answer += "s";
            } else if (diff === 10) {
                answer += "d";
            } else if (diff === -10) {
                answer += "a";
            }
            
        }
    })
    return answer;
}