function solution(my_string, indices) {
    var answer = my_string;
    const sortedIndices = indices.sort((a, b) => b - a);
    sortedIndices.forEach((el) => {
        const before = answer.slice(0, el);
        const after = answer.slice(el + 1);
        answer = before + after;
    })
    return answer;
}