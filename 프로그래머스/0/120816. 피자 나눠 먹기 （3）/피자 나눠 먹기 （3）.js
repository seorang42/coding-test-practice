function solution(slice, n) {
    var count = 1;
    while (!(Math.floor(slice * count / n) >= 1)) {
        count += 1;
    }
    return count;
}