function solution(strArr) {
    const count = {};
    strArr.forEach((str) => {
        count[str.length] = (count[str.length] || 0) + 1;
    });
    const sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sortedCount[0][1];
}