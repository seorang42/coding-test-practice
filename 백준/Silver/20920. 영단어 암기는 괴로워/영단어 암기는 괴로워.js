const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1).filter(word => word.length >= m);
const counts = {};
for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
}

const uniques = [...new Set(words)];
uniques.sort((a, b) => {
    if (counts[a] !== counts[b]) return counts[b] - counts[a];
    else if (a.length !== b.length) return b.length - a.length;
    else {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }
});

console.log(uniques.join("\n"));