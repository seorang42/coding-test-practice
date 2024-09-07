function solution(arr, queries) {
    var answer = arr;
    queries.forEach(el => {
        const original = arr[el[0]];
        arr.splice(el[0], 1, arr[el[1]]);
        arr.splice(el[1], 1, original);
    })
    return answer;
}