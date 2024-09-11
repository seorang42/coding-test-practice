function solution(num_list) {
    var answer = -1;
    num_list.forEach((el, index) => {
        if (el < 0 && answer === -1) {
            answer = index;
        }
    })
    return answer;
}