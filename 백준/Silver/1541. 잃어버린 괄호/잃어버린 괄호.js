const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const numbers = [];
const operators = [];

let lastIndex = 0;
for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
        const number = Number(input.slice(lastIndex, i));
        numbers.push(number);
        operators.push(input[i]);
        lastIndex = i + 1;
    }
    
    if (i === input.length - 1) {
        const number = Number(input.slice(lastIndex));
        numbers.push(number);
    }
}

const minusIndex = operators.indexOf("-");

if (minusIndex === -1) {
    console.log(numbers.reduce((acc, cur) => acc + cur, 0));
} else {
    const prevMinus = numbers.slice(0, minusIndex + 1).reduce((acc, cur) => acc + cur, 0);
    const afterMinus = numbers.slice(minusIndex + 1).reduce((acc, cur) => acc + cur, 0);
    console.log(prevMinus - afterMinus);
}