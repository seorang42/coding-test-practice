function solution(arr, intervals) {
    var answer = [];
    const before = arr.slice(intervals[0][0], intervals[0][1] + 1);
    const after = arr.slice(intervals[1][0], intervals[1][1] + 1);
    answer = [...before, ...after];
    return answer;
}