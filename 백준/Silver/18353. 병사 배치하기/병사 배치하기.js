const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, soldiers] = [Number(input[0]), input[1].split(" ").map(Number).reverse()];

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

const getLIS = (arr) => {
    const lis = [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lis[lis.length - 1]) {
            lis.push(arr[i]);
        } else {
            const index = lowerbound(lis, arr[i], 0, lis.length);
            lis[index] = arr[i];
        }
    }
    return lis;
}

console.log(soldiers.length - (getLIS(soldiers).length - 1));