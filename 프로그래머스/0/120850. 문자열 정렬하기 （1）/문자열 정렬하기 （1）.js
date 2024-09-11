function solution(my_string) {
    var answer = [];
    my_string.split("").forEach((el) => {
        if (!Number.isNaN(Number(el))) {
            answer.push(Number(el));
        }
    })
    return answer.sort((a, b) => a - b);
}