function solution(arr, queries) {
    var answer = [];
    queries.forEach((el) => {
        const newArr = arr.slice(el[0], el[1] + 1);
        const smallest = newArr.filter(item => item > el[2]).sort((a, b) => a - b);
        const result = smallest[0] ? smallest[0] : -1;
        answer.push(result);
    })
    return answer;
}