const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, cards, m, targets] = [Number(input[0]), input[1].split(" ").map(Number).sort((a, b) => a - b), Number(input[2]), input[3].split(" ").map(Number)];

const lowerbound = (arr, target, start, end) => {
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

const upperbound = (arr, target, start, end) => {
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid
        }
    }
    return end;
}

const getCount = (arr, target) => {
    const start = lowerbound(arr, target, 0, arr.length);
    const end = upperbound(arr, target, 0, arr.length);
    return end - start;
}

console.log(targets.map(target => getCount(cards, target)).join(" "));