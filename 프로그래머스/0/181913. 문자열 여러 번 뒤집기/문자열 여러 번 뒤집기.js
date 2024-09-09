function solution(my_string, queries) {
    var answer = my_string;
    queries.forEach((el) => {
        const before = answer.slice(0, el[0]);
        const target = answer.slice(el[0], el[1] + 1).split("").reverse().join("");
        const after = answer.slice(el[1] + 1);
        answer = before + target + after;
    })
    
    return answer;
}