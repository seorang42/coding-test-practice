function solution(numlist, n) {
    const sortedNumlist = numlist.sort((a, b) => b - a);
    const result = sortedNumlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));

    return result;
}