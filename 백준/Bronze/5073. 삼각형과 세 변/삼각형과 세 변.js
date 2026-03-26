const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const triangles = input.slice(0, input.length - 1).map(el => el.split(" ").map(Number).sort((a, b) => b - a));

function checkTriangle(a, b, c) {
    if (a >= b + c) return "Invalid";
    
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || c === a) return "Isosceles";
    else return "Scalene";
}

triangles.forEach(el => console.log(checkTriangle(...el)));