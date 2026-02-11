const fs = require("fs");
const [nStr, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(nStr);

let count = 0;
for (let i = 0; i < n; i++) {
    const wordDic = {};
    const word = words[i]
    for (let j = 0; j < word.length; j++) {
        const letter = word[j];
        if (wordDic[letter]) break;
        if (letter !== word[j + 1]) wordDic[letter] = 1;
        if (j === word.length - 1) count++;
    }
}

console.log(count);