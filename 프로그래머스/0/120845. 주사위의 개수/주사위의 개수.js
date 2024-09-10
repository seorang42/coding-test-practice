function solution(box, n) {
    var answer = 1;
    box.forEach(el => {
        answer *= Math.floor(el / n);
    })
    return answer;
}