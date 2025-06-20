function solution(arr, k) {
    const answer = arr.map((num) => k % 2 === 0 ? num + k : num * k);
    return answer;
}