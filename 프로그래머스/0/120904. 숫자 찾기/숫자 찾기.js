function solution(num, k) {
    const numStr = String(num);
    return numStr.includes(k) ? numStr.indexOf(k) + 1 : -1;
}