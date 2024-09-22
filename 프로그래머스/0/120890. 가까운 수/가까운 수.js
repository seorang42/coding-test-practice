function solution(array, n) {
    var answer = 0;
    let closest = 100;
    array.forEach(el => {
        const diff = Math.abs(n - el);
        if (diff < closest) {
            closest = diff;
            answer = el;
        } else if (diff === closest) {
            if (el < answer) {
                answer = el;
            }
        }
    })
    return answer;
}