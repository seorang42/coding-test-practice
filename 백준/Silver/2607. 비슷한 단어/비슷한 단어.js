const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const base = input[1];
const words = input.slice(2);

const dict = {};
for (let i = 0; i < base.length; i++) {
    const letter = base[i];
    dict[letter] = (dict[letter] || 0) + 1;
}

let answer = 0;
for (const word of words) {
    const newDict = {...dict};
    let newLetters = 0;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (newDict[letter]) {
            if (newDict[letter] - 1 === 0) {
                delete newDict[letter];
            } else {
                newDict[letter] = newDict[letter] - 1;
            }
        } else {
            newLetters++;
        }
    }
    
    const notUsed  = Object.entries(newDict).reduce((acc, cur) => acc + Number(cur[1]), 0);
    
    if ((newLetters <= 1 && notUsed === 0) || (newLetters === 0 && notUsed <= 1) || (newLetters === 1 && notUsed === 1)) answer++;
}

console.log(answer);