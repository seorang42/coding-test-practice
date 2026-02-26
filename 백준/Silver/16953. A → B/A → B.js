const fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let count = 0;
while (A < B) {
    if (B > 10 && B % 10 === 1) {
        B = parseInt(B / 10);
        count++;
    } else if (B % 2 === 0) {
        B = parseInt(B / 2);
        count++;
    } else {
        break;
    }
}

console.log(A === B ? count + 1 : -1);