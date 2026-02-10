const fs = require("fs");
let [hour, minute] = fs.readFileSync("/dev/stdin").toString().split(" ").map(el => Number(el));

const TIME_SET = 45;
const reducedMinute = minute - TIME_SET
if (reducedMinute < 0) {
    hour -= 1;
    minute = reducedMinute + 60;
} else {
    minute = reducedMinute;
}

if (hour < 0) {
    hour += 24;
}

console.log(`${hour} ${minute}`);