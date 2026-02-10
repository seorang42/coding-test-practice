const fs = require("fs");
const [currentTime, cookingTime] = fs.readFileSync("/dev/stdin").toString().split("\n");
let [currentHour, currentMinute] = currentTime.split(" ").map(el => Number(el));
const [cookingHour, cookingMinute] = [parseInt(Number(cookingTime) / 60), Number(cookingTime) % 60];

currentHour += cookingHour;
currentMinute += cookingMinute;

if (currentMinute >= 60) {
    currentHour += 1;
    currentMinute -= 60;
}

if (currentHour >= 24) {
    currentHour -= 24;
}

console.log(`${currentHour} ${currentMinute}`);