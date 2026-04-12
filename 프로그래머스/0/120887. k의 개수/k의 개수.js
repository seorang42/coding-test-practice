function solution(i, j, k) {
    let answer = 0;
    for (i; i <= j; i++) {
        const nums = String(i).split("");
        nums.forEach(num => {
            if (num === String(k)) answer++;
        });
    }
    return answer;
}