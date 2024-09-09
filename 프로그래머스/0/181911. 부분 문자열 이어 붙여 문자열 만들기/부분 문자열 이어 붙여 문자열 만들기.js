function solution(my_strings, parts) {
    var answer = '';
    parts.forEach((el, index) => {
        const slice = my_strings[index].slice(el[0], el[1] + 1);
        answer += slice;
    })
    return answer;
}