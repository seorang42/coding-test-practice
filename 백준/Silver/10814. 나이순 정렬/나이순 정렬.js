const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...members] = input;
const sortFunc = (a, b) => {
    const [aAgeStr, aName] = a.split(" ");
    const [bAgeStr, bName] = b.split(" ");
    
    if (aAgeStr !== bAgeStr) {
        return Number(aAgeStr) - Number(bAgeStr);
    } else {
        return 0;
    }
}

console.log(members.sort(sortFunc).join("\n"));