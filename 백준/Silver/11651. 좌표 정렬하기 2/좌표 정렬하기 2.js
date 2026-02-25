const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...cords] = input;
const sortFunc = (a, b) => {
    const [x1, y1] = a.split(" ").map(Number);
    const [x2, y2] = b.split(" ").map(Number);
    
    if (y1 !== y2) {
        return y1 - y2;
    } else {
        return x1 - x2;
    }
}

console.log(cords.sort(sortFunc).join("\n"));