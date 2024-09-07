function solution(my_string, n) {
    var answer = '';
    const newArr = my_string.split("");
    newArr.forEach(el => {
        for (let i = 0; i < n; i++) {
            answer += el;
        }
    })
    return answer;
}