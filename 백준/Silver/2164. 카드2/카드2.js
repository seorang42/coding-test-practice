const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cards = new Array(Number(input)).fill(0).map((_, index) => index + 1);
let head = 0;

let answer = cards[0];
while (cards.length - head !== 1) {
    head++;
    if (cards.length - head === 1) {
        answer = cards[head];
        break;
    }
    
    cards.push(cards[head++]);
}

console.log(answer);