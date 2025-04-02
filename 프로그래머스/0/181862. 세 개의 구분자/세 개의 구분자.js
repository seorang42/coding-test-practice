function solution(myStr) {
    const answer = [];
    let temp = "";
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
            if (temp !== "") {
                answer.push(temp);
                temp = "";
            }
            continue;
        }
        
        temp += myStr[i];
    }
    
    if (temp !== "") answer.push(temp);
    return answer.length !== 0 ? answer : ["EMPTY"];
}