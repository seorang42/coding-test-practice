function solution(numbers) {
    var answer = 0;
    const arr = numbers.sort((a, b) => b - a);
    answer = arr[0] * arr[1];
    return answer;
}