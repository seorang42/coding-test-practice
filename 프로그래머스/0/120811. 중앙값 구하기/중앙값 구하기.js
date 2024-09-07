function solution(array) {
    var answer = 0;
    const newArr = array.sort((a, b) => a - b);
    const midIndex = Math.floor(array.length / 2);
    answer = newArr[midIndex];
    return answer;
}