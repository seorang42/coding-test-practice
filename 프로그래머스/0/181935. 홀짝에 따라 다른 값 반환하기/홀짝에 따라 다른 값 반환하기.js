function solution(n) {
    var answer = 0;
    const remain = n % 2;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === remain) {
            if (remain === 0) {
                answer += i**2;
            } else {
                answer += i;
            }
        }
    }
    return answer;
}