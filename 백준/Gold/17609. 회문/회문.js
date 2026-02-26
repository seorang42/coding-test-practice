const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...words] = input;

const checkPali = (word) => {
    return word === word.split("").reverse().join("");
}

const answer = [];
for (const word of words) {
    if (checkPali(word)) {
        answer.push(0);
        continue;
    }
    let flag = false;
    for (let i = 0; i < parseInt(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            if (checkPali(word.slice(0, i) + word.slice(i + 1))) flag = true;
            if (checkPali(word.slice(0, word.length - 1 - i) + word.slice(word.length - i))) flag = true;
            break;
        }
    }
    answer.push(flag ? 1 : 2);
}

console.log(answer.join("\n"));