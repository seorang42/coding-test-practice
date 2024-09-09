function solution(x1, x2, x3, x4) {
    var answer = false;
    const x12 = x1 || x2;
    const x34 = x3 || x4;
    answer = x12 && x34;
    return answer;
}