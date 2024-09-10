function solution(my_string) {
    var answer = [];
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 52; i++) {
        answer.push(0);
    }
    const strArr = my_string.split("");
    strArr.forEach((el) => {
        const index = alpha.indexOf(el);
        answer[index] += 1;
    })
    return answer;
}