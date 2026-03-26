const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testcases = input.slice(1).map(el => el.split(" ").map(Number));

const answer = [];
for (const testcase of testcases) {
    const line = [];
    let count = 0;
    
    for (let i = 1; i < testcase.length; i++) {
        line.push(testcase[i]);
        
        let index = line.length - 1;
        while (index > 0) {
            if (line[index - 1] <= line[index]) break;
            
            [line[index - 1], line[index]] = [line[index], line[index - 1]];
            index--;
            count++;
        }
    }
    
    answer.push(`${testcase[0]} ${count}`);
}

console.log(answer.join("\n"));