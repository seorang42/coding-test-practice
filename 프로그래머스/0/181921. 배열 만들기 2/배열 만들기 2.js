function solution(l, r) {
    var answer = [];
    let start = l;
    let end = r;
    const regex = /^[50]+$/
    while (l <= r) {
        if (regex.test(String(l))) {
            answer.push(l);
        }
        l++;
    }
    return answer.length !== 0 ? answer : [-1];
}