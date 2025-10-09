function solution(n) {
    let curr = 0;
    let answer = 0;
    while (curr < n) {
        answer++;
        if (answer % 3 === 0 || String(answer).split("").includes("3")) continue;
        curr++;
    }
    return answer;
}