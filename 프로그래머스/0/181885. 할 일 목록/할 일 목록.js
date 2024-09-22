function solution(todo_list, finished) {
    var answer = [];
    finished.forEach((el, index) => {
        if (el === false) {
            answer.push(todo_list[index]);
        }
    })
    return answer;
}