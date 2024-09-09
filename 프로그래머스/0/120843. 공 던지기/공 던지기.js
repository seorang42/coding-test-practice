function solution(numbers, k) {
    var answer = 0;
    let num = 2 * (k - 1);
    let person = num % numbers.length;
    answer = numbers[person]
    return answer;
}