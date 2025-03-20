function calcNum(num) {
    if (num % 2 === 0) return num / 2;
    else return (num + 1) / 2;
}

function solution(n,a,b) {
    let [A, B] = [a, b]
    let answer = 1;
    while (!(Math.abs(A - B) === 1 && Math.min(A, B) % 2 === 1)) {
        answer++;
        A = calcNum(A);
        B = calcNum(B);
    }
    
    return answer;
}