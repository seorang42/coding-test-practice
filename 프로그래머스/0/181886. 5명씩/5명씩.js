function solution(names) {
    var answer = [];
    names.forEach((el, index) => {
        if (index % 5 === 0) {
            answer.push(el);
        }
    })
    return answer;
}