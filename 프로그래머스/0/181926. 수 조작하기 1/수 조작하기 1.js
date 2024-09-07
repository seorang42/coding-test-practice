function solution(n, control) {
    var answer = n;
    let arr = control.split("");
    arr.forEach(el => {
        if (el === "w") {
            answer += 1;
        } else if (el === "s") {
            answer -= 1;
        } else if (el === "d") {
            answer += 10;
        } else if (el === "a") {
            answer -= 10;
        }
    })
    return answer;
}