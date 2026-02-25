const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...words] = input;
const sortFunc = (a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

console.log([...new Set(words)].sort(sortFunc).join("\n"));