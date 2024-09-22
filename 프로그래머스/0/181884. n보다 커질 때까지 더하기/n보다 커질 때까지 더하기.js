function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((el) => {
        if (!(answer > n)) {
            answer += el;
        }
    })
    
    return answer;
}