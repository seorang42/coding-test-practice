function solution(numbers) {
    var answer = 0;
    let total = 0;
    numbers.forEach(el => total += el);
    answer = total / numbers.length;
    return answer;
}