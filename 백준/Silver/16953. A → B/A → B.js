const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [start, end] = input[0].split(" ").map(Number);

const queue = [start];
let head = 0;

function getAnswer(start) {
    let answer = 1;
    while (queue.length - head !== 0) {
        const size = queue.length - head;

        for (let i = 0; i < size; i++) {
            const num = queue[head++];
            
            if (num === end) return answer;
            else {
                const next1 = num * 2;
                const next2 = Number(String(num) + "1");
                if (next1 <= end) queue.push(next1);
                if (next2 <= end) queue.push(next2);
            }
        }
        answer++;
    }
    
    return -1;
}

console.log(getAnswer(start));