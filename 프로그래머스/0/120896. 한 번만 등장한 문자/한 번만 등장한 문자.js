function solution(s) {
    var answer = [];
    s.split("").forEach(el => {
        if (s.split("").filter(item => item === el).length === 1) {
            answer.push(el);
        }
    })
    return answer.sort((a, b) => a > b ? 1 : -1).join("");
}