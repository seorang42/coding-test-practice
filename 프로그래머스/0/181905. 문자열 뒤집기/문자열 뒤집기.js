function solution(my_string, s, e) {
    var answer = '';
    const before = my_string.slice(0, s);
    const after = my_string.slice(e + 1);
    answer = before + my_string.split("").slice(s, e + 1).reverse().join("") + after;
    return answer;
}