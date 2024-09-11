function solution(my_string) {
    var answer = [];
    my_string.split("").forEach((el) => {
        if (el !== "a" && el !== "i" && el !== "o" && el !== "u" && el !== "e") {
            answer.push(el);
        }
    })
    return answer.join("");
}