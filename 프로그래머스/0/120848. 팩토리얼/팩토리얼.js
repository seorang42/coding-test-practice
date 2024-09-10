function solution(n) {
    var answer = 1;
    let num = 1;
    while (num * (answer + 1) <= n) {
        answer++;
        num *= answer;
    }
    return answer;
}