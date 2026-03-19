const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [start, end] = input[0].split(" ").map(Number);

// 숫자-문자열 저장
const visited = [];
visited[start] = "";

// 숫자 큐
const queue = [start];
let head = 0;

let answer = start === end ? "0" : ""
while (queue.length - head !== 0 && answer !== 0) {
    const node = queue[head++];

    const mul = node * node;
    if (visited[mul] === undefined) {
        if (mul === end) {
            answer = visited[node] + "*";
            break;
        } else {
            visited[mul] = visited[node] + "*";
            queue.push(mul);
        }
    }
    
    const sum = node + node;
    if (visited[sum] === undefined) {
        if (sum === end) {
            answer = visited[node] + "+";
            break;
        } else {
            visited[sum] = visited[node] + "+";
            queue.push(sum);
        }
    }
    
    const diff = node - node;
    if (visited[diff] === undefined) {
        if (diff === end) {
            answer = visited[node] + "-";
            break;
        } else {
            visited[diff] = visited[node] + "-";
            queue.push(diff);
        }
    }
    
    if (node !== 0) {
        const share = parseInt(node / node);
        if (visited[share] === undefined) {
            if (share === end) {
                answer = visited[node] + "/";
                break;
            } else {
                visited[share] = visited[node] + "/";
                queue.push(share);
            }
        }
    }
}

console.log(answer === "" ? -1 : answer);