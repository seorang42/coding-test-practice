function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (j * j === i) {
                count++;
            } else if (i % j === 0) {
                count += 2;
            }
        }
        if (count >= 3) {
            answer += 1;
        }
    }
    return answer;
}