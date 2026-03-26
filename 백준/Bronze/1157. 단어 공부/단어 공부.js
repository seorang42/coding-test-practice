const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];
const dict = {};
for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase();
    dict[letter] = (dict[letter] || 0) + 1;
}

const sorted = Object.entries(dict).sort((a, b) => b[1] - a[1]);
if (sorted.length === 1 || sorted[0][1] !== sorted[1][1]) console.log(sorted[0][0]);
else console.log("?");