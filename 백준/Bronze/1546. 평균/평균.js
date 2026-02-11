const fs = require("fs");
const [nStr, scoresStr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, scores] = [Number(nStr), scoresStr.split(" ").map(el => Number(el))];

const max = Math.max(...scores);
const newScores = scores.map((score) => Number((score / max * 100).toFixed(2)));
const average = newScores.reduce((acc, cur) => acc + cur, 0) / n;

console.log(average);