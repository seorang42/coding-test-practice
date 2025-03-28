function solution(my_string) {
    const arr = my_string.split(" ");
    let [answer, op] = [0, "+"];
    arr.forEach((el) => {
        if (isNaN(Number(el))) {
            op = el;
        } else {
            if (op === "+") answer += Number(el);
            else if (op === "-") answer -= Number(el);
        }
    })
    return answer;
}