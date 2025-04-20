function solution(n) {
    return String(n).split("").map(el => Number(el)).reduce((prev, el) => prev + el);
}