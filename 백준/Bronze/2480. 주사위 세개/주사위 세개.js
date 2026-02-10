const fs = require("fs");
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().split(" ").map(el => Number(el));

const calculatePrice = (a, b, c) => {
    if (a === b && b === c && c === a) {
        return 10000 + a * 1000;
    } else if (a === b || b === c || c === a) {
        const same = a === b ? a : b === c ? b : c;
        return 1000 + same * 100;
    } else {
        const max = Math.max(a, b, c);
        return max * 100;
    }
}

console.log(calculatePrice(a, b, c));