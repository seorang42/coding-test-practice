function solution(a, b) {
    var answer = 0;
    const num1 = Number(String(a) + String(b));
    const num2 = Number(String(b) + String(a));
    answer = num1 >= num2 ? num1 : num2;
    return answer;
}