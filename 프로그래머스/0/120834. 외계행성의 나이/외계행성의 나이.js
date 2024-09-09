function solution(age) {
    var answer = "";
    const letter = "abcdefghij"
    for (let i = 0; i < String(age).length; i++) {
        answer += letter[Number(String(age)[i])];
    }
    return answer;
}