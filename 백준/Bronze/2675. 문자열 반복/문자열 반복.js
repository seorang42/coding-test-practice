const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    const [repeat, string] = input[i].split(" ");
    let line = "";
    for (let j = 0; j < string.length; j++) {
        let letters = "";
        for (let k = 0; k < Number(repeat); k++) {
            letters += string[j];
        }
        line += letters;
    }
    console.log(line);
}