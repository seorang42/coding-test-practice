function solution(my_string) {
    var answer = '';
    const arr = my_string.split("");
    arr.forEach(el => {
        if (answer.indexOf(el) === -1) {
            answer += el;
        }
    })
    return answer;
}