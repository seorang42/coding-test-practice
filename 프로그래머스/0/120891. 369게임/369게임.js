function solution(order) {
    var answer = 0;
    const arr = String(order).split("");
    const target = "369";
    arr.forEach(el => {
        if (target.indexOf(el) !== -1) {
            answer += 1;
        }
    })
    return answer;
}