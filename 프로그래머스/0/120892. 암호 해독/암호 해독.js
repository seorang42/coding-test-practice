function solution(cipher, code) {
    var answer = '';
    const arr = cipher.split("");
    arr.forEach((el, index) => {
        if (index % code === code - 1) {
            answer += el;
        }
    })
    return answer;
}