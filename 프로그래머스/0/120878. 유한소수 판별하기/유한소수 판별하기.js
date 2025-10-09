const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);

function solution(a, b) {
    let answer = 1;
    
    const gcd = getGCD(a, b);
    let finalB = b / gcd;
    
    while (finalB % 2 === 0 || finalB % 5 === 0) {
        if (finalB % 2 === 0) finalB /= 2;
        if (finalB % 5 === 0) finalB /= 5;
    }
    
    return finalB === 1 ? 1 : 2;
}