function solution(my_str, n) {
    const answer = [];
    
    let word = "";
    for (let i = 0; i < my_str.length; i++) {
        word += my_str[i];
        if (i % n === n - 1) {
            answer.push(word);
            word = "";
        }
    }
    if (word !== "") {
        answer.push(word);
    }
    
    return answer;
}