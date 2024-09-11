function solution(my_string) {
    var answer = 0;
    my_string.split("").forEach((el) => {
        if (!Number.isNaN(Number(el))) {
            answer += Number(el);
        }
    })
    return answer;
}