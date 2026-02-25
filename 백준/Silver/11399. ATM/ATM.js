const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, times] = [Number(input[0]), input[1].split(" ").map(Number)];

const sortedTimes = times.sort((a, b) => a - b);
let [total, prev] = [0, 0];
sortedTimes.forEach((time) => {
    prev += time;
    total += prev;
})

console.log(total);