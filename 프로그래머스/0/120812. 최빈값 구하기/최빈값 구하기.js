function solution(array) {
    var answer = 0;
    const newArr = array.sort((a, b) => a - b);
    let modeCount = 0;
    let currentCount = 0
    let modeArr = [];
    newArr.forEach((el, index) => {
        if (el === newArr[index + 1]) {
            currentCount += 1;
        }
        else if (el !== newArr[index + 1]) {
            currentCount += 1;
            if (currentCount >= modeCount) {
                modeArr.push({num : el, count : currentCount});
                modeCount = currentCount;
                currentCount = 0;
            } else {
                currentCount = 0
            }
        }
    })
    
    const answerArr = modeArr.filter(el => el.count === modeCount);
    if (answerArr.length === 1) {
        answer = answerArr[0].num;
    } else {
        answer = -1;
    }
    
    return answer;
}