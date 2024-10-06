function solution(arr) {
    var answer = 0;
    const makeArr = (array) => {
        const newArr = array.map(el => {
            if (el >= 50 && el % 2 === 0) {
                return el / 2;
            } else if (el < 50 && el % 2 === 1) {
                return el * 2 + 1;
            } else {
                return el;
            }
        });
        if (!newArr.every((val, index) => val === array[index])) {
            answer += 1;
            return makeArr(newArr);
        } else {
            return;
        }
    }
    makeArr(arr);
    return answer;
}