function solution(arr) {
    const currLength = arr.length;
    let power = 1;
    while (currLength > power) {
        power *= 2;
    }
    
    const answer = new Array(power).fill(0);
    answer.splice(0, currLength, ...arr);
    return answer;
}