function solution(my_string) {
    var answer = '';
    my_string.split("").forEach(el => {
        if (el.toLowerCase() === el) {
            answer += el.toUpperCase();
        } else {
            answer += el.toLowerCase();
        }
    })
    return answer;
}