function solution(num_str) {
    return num_str.split("").reduce((prev, next) => prev + Number(next), 0);
}