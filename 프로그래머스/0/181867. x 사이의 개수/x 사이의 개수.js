function solution(myString) {
    const answer = myString.split("x").map(el => el.length);
    return answer;
}