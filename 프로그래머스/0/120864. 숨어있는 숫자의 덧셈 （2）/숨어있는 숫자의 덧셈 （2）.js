const getNumbers = (arr) => {
    let temp = [];
    const result = [];
    arr.forEach((el) => {
        const target = Number(el);
        if (!Number.isNaN(target)) {
            temp.push(target);
        } else if (Number.isNaN(target) && temp.length !== 0) {
            result.push(Number(temp.join("")));
            temp = [];
        }
    });
    
    if (temp.length !== 0) {
        result.push(Number(temp.join("")));
    }
    
    return result;
}

function solution(my_string) {
    const splitted = my_string.split("");
    const numbers = getNumbers(splitted);
    return numbers.reduce((acc, cur) => acc + cur, 0);
}