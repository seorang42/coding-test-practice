const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...meetups] = input;

const sorted = meetups.map(el => el.split(" ").map(Number)).sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1]
    else return a[0] - b[0]
});

let [endTime, count] = [sorted[0][1], 1];
for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    if (start >= endTime) {
        endTime = end;
        count++;
    }
}

console.log(count);