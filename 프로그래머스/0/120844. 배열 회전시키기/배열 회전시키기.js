function solution(numbers, direction) {
    var answer = [];
    if (direction === "right") {
        const temp = numbers.slice(0, numbers.length - 1);
        answer.push(numbers[numbers.length - 1]);
        answer = [...answer, ...temp]
    } else if (direction === "left") {
        answer = numbers.slice(1);
        answer.push(numbers[0]);
    }
    return answer;
}