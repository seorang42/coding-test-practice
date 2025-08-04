function solution(array, n) {
    const answer = array.filter(item => item === n).length;
    return answer;
}