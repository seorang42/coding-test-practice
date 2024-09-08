function solution(my_string, letter) {
    var answer = my_string;
    while (answer.indexOf(letter) !== -1) {
        const index = answer.indexOf(letter);
        const before = answer.slice(0, index);
        const after = answer.slice(index + 1);
        answer = before + after;
    }
    return answer;
}