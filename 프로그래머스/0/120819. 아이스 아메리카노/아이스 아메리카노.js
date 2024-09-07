function solution(money) {
    var answer = [];
    let count = Math.floor(money / 5500);
    answer.push(count);
    answer.push(money - count * 5500);
    return answer;
}