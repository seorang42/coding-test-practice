function solution(balls, share) {
    var answer = 0;
    const factorial = (n) => {
        let num = n;
        let result = 1;
        while (num >= 1) {
            result *= num;
            num--;
        }
        return result;
    }
    answer = Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
    return answer;
}