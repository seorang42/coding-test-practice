function solution(sides) {
    var answer = 2;
    const arr = sides.sort((a, b) => b - a);
    if (arr[0] < arr[1] + arr[2]) {
        answer = 1;
    }
    return answer;
}