const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const switches = [undefined, ...input[1].split(" ").map(Number)];
const m = Number(input[2]);
const list = input.slice(3).map(el => el.split(" ").map(Number));

function changeSwitch(gender, s) {
    if (gender === 1) {
        let index = s;
        while (true) {
            if (index > switches.length - 1) break;
            switches[index] = switches[index] === 1 ? 0 : 1;
            index += s;
        }
    } else if (gender === 2) {
        switches[s] = switches[s] === 1 ? 0 : 1;
        let count = 1;
        while (true) {
            const [a, b] = [switches[s - count], switches[s + count]];
            if (a === undefined || b === undefined || a !== b) break;
            switches[s - count] = switches[s - count] === 1 ? 0 : 1;
            switches[s + count] = switches[s + count] === 1 ? 0 : 1;
            count++;
        }
    }
}

list.forEach(([gender, s]) => {
    changeSwitch(gender, s);
});

function splitSwitches(switches) {
    const answer = [];
    for (let i = 0; i < switches.length; i += 20) {
        answer.push(switches.slice(i, i + 20).join(" "));
    }
    return answer;
}

const answer = splitSwitches(switches.slice(1));
console.log(answer.join("\n"));