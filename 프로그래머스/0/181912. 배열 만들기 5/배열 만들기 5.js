function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(el => {
        const slice = Number(el.slice(s, s + l));
        if (slice > k) {
            answer.push(slice);
        }
    })
    return answer;
}