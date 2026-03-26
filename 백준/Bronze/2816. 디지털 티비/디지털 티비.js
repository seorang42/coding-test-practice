const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const channels = input.slice(1);
let pointer = 0;
const answer = [];

function remote(num) {
    if (num === 1) pointer = Math.min(channels.length - 1, pointer + 1);
    else if (num === 2) pointer = Math.max(0, pointer - 1);
    else if (num === 3 && channels[pointer + 1]) {
        [channels[pointer], channels[pointer + 1]] = [channels[pointer + 1], channels[pointer]];
        pointer = Math.min(channels.length - 1, pointer + 1);
    }
    else if (num === 4 && channels[pointer - 1]) {
        [channels[pointer], channels[pointer - 1]] = [channels[pointer - 1], channels[pointer]];
        pointer = Math.max(0, pointer - 1);
    }
    answer.push(num);
}

while (channels[0] !== "KBS1") {
    const currChannel = channels[pointer];
    if (currChannel === "KBS1") {
        const count = pointer;
        for (let i = 0; i < count; i++) {
            remote(4);
        }
    } else remote(1);
}

remote(1)

while (channels[1] !== "KBS2") {
    const currChannel = channels[pointer];
    if (currChannel === "KBS2") {
        const count = pointer;
        for (let i = 0; i < count - 1; i++) {
            remote(4);
        }
    } else remote(1);
}

console.log(answer.join(""));