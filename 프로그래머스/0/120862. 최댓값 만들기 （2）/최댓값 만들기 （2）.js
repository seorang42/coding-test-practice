const getMax = (target, arr) => {
    if (arr.length === 0) return -Infinity;
    
    let max = -Infinity;
    arr.forEach((num) => {
        const result = num * target;
        if (result > max) max = result;
    })
    
    return max;
}

function solution(numbers) {
    let max = -Infinity;
    numbers.forEach((num, index) => {
        const target = num;
        const arr = numbers.slice(index + 1);
        const targetMax = getMax(target, arr);
        
        if (targetMax > max) max = targetMax;
    })
    
    return max;
}