function solution(my_string) {
    var answer = [];
    let length = my_string.length;
    for (let i = 0; i < length; i++) {
        answer.push(my_string.slice(i));
    }
    answer.sort((a, b) => a > b ? 1 : -1);
    return answer;
}