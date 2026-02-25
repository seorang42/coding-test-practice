const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...cords] = input;
const sortFunc = (a, b) => {
    const [x1, y1] = a.split(" ").map(Number);
    const [x2, y2] = b.split(" ").map(Number);
    
    if (x1 !== x2) {
        return x1 - x2;
    } else {
        return y1 - y2;
    }
}

console.log(cords.sort(sortFunc).join("\n"));