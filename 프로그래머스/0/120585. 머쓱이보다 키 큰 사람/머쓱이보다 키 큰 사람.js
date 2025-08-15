function solution(array, height) {
    const answer = array.reduce((acc, cur) => cur > height ? acc + 1 : acc, 0)
    return answer;
}