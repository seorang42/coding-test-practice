function solution(num_list) {
    var answer = 0;
    const makeOne = (num) => {
        if (num === 1) {
            return;
        } else if (num % 2 === 0) {
            answer += 1;
            return makeOne(num / 2);
        } else if (num % 2 === 1) {
            answer += 1;
            return makeOne((num - 1) / 2);
        }
    }
    num_list.forEach(el => {
        makeOne(el);
    })
    return answer;
}