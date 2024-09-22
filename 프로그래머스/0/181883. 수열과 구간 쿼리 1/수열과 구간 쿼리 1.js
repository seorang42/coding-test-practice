function solution(arr, queries) {
    var answer = arr;
    queries.forEach(el => {
        const before = answer.slice(0, el[0]);
        const target = answer.slice(el[0], el[1] + 1);
        const after = answer.slice(el[1] + 1);
        const newTarget = target.map(el => el + 1);
        const result = [...before, ...newTarget, ...after];
        answer = result;
    })
    return answer;
}