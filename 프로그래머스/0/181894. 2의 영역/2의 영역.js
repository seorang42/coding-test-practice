function solution(arr) {
    var answer = [];
    let start = -1;
    let end = -1;
    arr.forEach((el, index) => {
        if (start === -1 && el === 2) {
            start = index;
        } else if (el === 2) {
            end = index;
        }
    })
    if (start === -1 && end === -1) {
        answer.push(-1);
    } else if (end === -1) {
        answer.push(2);
    } else {
        answer = arr.slice(start, end + 1);
    }
    return answer;
}