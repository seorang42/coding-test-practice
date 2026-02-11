const fs = require("fs");
const line = Number(fs.readFileSync("/dev/stdin").toString());

for (let i = 1; i <= line; i++) {
    const stars = new Array(i).fill("*").join("");
    console.log(stars);
}