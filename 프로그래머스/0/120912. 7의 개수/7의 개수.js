function solution(array) {
    const joinedArr = array.join("");
    const count7 = joinedArr.split("").reduce((acc, cur) => cur === "7" ? acc + 1 : acc, 0)
    return count7;
}