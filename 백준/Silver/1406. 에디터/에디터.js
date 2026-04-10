const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const left = input[0].split("");
const right = [];

const m = Number(input[1]);
const commands = input.slice(2);

for (let i = 0; i < m; i++) {
    const [cmd, val] = commands[i].split(" ");

    if (cmd === "L") {
        if (left.length) right.push(left.pop());
    } else if (cmd === "D") {
        if (right.length) left.push(right.pop());
    } else if (cmd === "B") {
        if (left.length) left.pop();
    } else if (cmd === "P") {
        left.push(val);
    }
}

console.log(left.join("") + right.reverse().join(""));