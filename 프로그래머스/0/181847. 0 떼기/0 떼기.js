function solution(n_str) {
    const strArr = n_str.split("");
    while (strArr[0] === "0") {
        strArr.shift();
    }
    return strArr.join("");
}