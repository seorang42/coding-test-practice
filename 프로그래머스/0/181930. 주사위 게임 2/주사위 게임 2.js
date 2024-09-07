function solution(a, b, c) {
    var answer = 0;
    let count = [a === b, b === c, c === a].filter(el => el === true).length;
    console.log(count);
    if (count === 3) {
        answer = 3 * a * 3 * (a ** 2) * 3 * (a ** 3);
    } else if (count === 1) {
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    } else {
        answer = a + b + c;
    }
    return answer;
}