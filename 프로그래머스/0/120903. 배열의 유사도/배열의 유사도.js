function solution(s1, s2) {
    let answer = 0;
    s1.forEach(el1 => {
        s2.forEach(el2 => {
            if (el1 === el2) answer++;
        });
    });
    return answer;
}