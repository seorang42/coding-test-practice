function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const [numA, numB] = [Number(a), Number(b)];
    
    switch (op) {
        case "+":
            return numA + numB;
        case "-":
            return numA - numB;
        case "*":
            return numA * numB;
    }
}