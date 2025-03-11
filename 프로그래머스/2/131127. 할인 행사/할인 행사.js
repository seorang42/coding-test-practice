function checkObject(obj1, obj2) {
    const objKey1 = Object.keys(obj1);
    const objKey2 = Object.keys(obj2);
    
    if (objKey1.length !== objKey2.length) {
        return false;
    }
    
    for (const key of objKey1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        
        if (value1 !== value2) {
            return false;
        }
    }
    
    return true;
}

function solution(want, number, discount) {
    const list = {};
    want.forEach((el, index) => list[el] = number[index]);
    
    let answer = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const temp = {};
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            if (temp[item] === undefined) {
                temp[item] = 1;
            } else {
                temp[item]++;
            }
        }
        
        if (checkObject(list, temp)) {
            answer++;
        }
    }
    return answer;
}