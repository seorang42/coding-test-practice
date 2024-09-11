function solution(arr, query) {
    var answer = arr;
    query.forEach((el, index) => {
        if (index % 2 === 0) {
            answer = answer.slice(0, el + 1);
        } else {
            answer = answer.slice(el)
        }
        console.log
    })
    return answer;
}