function solution(n) {
    var answer = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            if (answer.length !== 0) {
                let flag = true;
                answer.forEach(el => {
                    if (i % el === 0) {
                        flag = false;
                    }
                })
                if (flag) {
                    answer.push(i);
                }
            } else {
                answer.push(i)
            }
        }
    }
    return answer;
}