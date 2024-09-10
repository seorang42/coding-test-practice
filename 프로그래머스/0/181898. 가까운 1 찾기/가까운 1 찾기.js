function solution(arr, idx) {
    var answer = -1;
    let answered = false;
    arr.forEach((el, index) => {
        if (index >= idx && !answered) {
            if (el === 1) {
                answer = index;
                answered = true;
            }
        }
    })
    return answer;
}