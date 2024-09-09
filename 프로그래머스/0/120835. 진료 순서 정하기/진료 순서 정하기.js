function solution(emergency) {
    var answer = [];
    let order = [...emergency].sort((a, b) => b - a);
    emergency.forEach((el) => {
        answer.push(order.indexOf(el) + 1);
    })
    
    return answer;
}