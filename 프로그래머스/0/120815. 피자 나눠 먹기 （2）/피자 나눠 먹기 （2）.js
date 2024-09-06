function solution(n) {
    let count = 1;
    while (6 * count % n !== 0) {
        count += 1;
    }
    return count;
}