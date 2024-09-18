function solution(s) {
    var answer = 0;
    const arr = s.split(" ");
    arr.forEach((el, index) => {
        if (arr[index + 1] !== "Z" && arr[index] !== "Z") {
            answer += Number(el);
        }
    })
    return answer;
}