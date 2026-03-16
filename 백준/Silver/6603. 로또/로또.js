const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testcases = input.slice(0, input.length - 1).map(el => el.split(" ").map(Number));

function getCombis(arr, n) {
    if (n === 1) return arr.map(el => [el]);
    const result = [];
    
    arr.forEach((fixed, i) => {
        const remain = arr.slice(i + 1);
        const combi = getCombis(remain, n - 1);
        const combine = combi.map(el => [fixed, ...el]);
        result.push(...combine);
    })
    
    return result;
}

testcases.forEach(testcase => {
    const [k, S] = [testcase[0], testcase.slice(1)];
    const combis = getCombis(S, 6);
    console.log(combis.map(el => el.join(" ")).join("\n"));
    console.log();
})