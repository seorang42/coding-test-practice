function solution(hp) {
    var answer = 0;
    let h = hp;
    if (h !== 0) {
        while (h >= 5) {
            h -= 5;
            answer += 1;
        }
        while (h >= 3) {
            h -= 3;
            answer += 1;
        }
        while (h >= 1) {
            h -= 1;
            answer += 1;
        }
    }
    return answer;
}