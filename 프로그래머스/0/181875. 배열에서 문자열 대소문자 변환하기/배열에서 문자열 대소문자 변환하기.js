function solution(strArr) {
    const answer = strArr.map((el, index) => index % 2 === 0 ? el.toLowerCase() : el.toUpperCase());
    return answer;
}