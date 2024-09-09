function solution(my_string, is_suffix) {
    var answer = 0;
    const length = is_suffix.length;
    if (my_string.slice(my_string.length - length) === is_suffix) {
        answer = 1;
    }
    return answer;
}