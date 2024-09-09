function solution(a, b, c, d) {
    var answer = 0;
    let answerArr = [a, b, c, d];
    let count = 0;
    let num = [];
    let remain = [];
    answerArr.forEach((el, index) => {
        if (answerArr.indexOf(el, index + 1) !== -1) {
            count += 1;
            if (num.indexOf(el) === -1) {
                num.push(el);
            }
        } else {
            if (num.indexOf(el) === -1) {
                remain.push(el);
            }
        }
    })
    
    if (count === 3) {
        answer = 1111 * num[0];
    } else if (count === 2 && remain.length === 1) {
        answer = (10 * num[0] + remain[0]) ** 2;
    } else if (count === 2 && remain.length === 0) {
        answer = (num[0] + num[1]) * Math.abs(num[0] - num[1]); 
    } else if (count === 1) {
        answer = remain[0] * remain[1];
    } else if (count === 0) {
        answer = remain.sort((a, b) => a - b)[0];
    }
    return answer;
}