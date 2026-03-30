const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const titles = input.slice(1, n + 1).map(el => el.split(" "));
const scores = titles.map(el => el[1]).map(Number);
const players = input.slice(n + 1).map(Number);

function lowerbound(arr, target) {
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    
    return left;
}

let start = 0;
const answer = [];
players.forEach((player) => {
    const l = lowerbound(scores, player);
    answer.push(titles[l][0]);
})

console.log(answer.join("\n"));