function solution(strlist) {
    var answer = [];
    strlist.forEach(el => {
        answer.push(el.length);
    })
    return answer;
}