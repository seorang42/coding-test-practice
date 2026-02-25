const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let usedCoins = 0;
for (let i = n - 1; i >= 0; i--) {
    const coin = coins[i];
    
    // 동전이 목표치보다 클 때 스킵
    if (coin > k) continue;
    
    // 동전으로 나눈 몫과 나머지 구하기
    const [count, remain] = [parseInt(k / coin), k % coin];
    usedCoins += count;
    k = remain;
}

console.log(usedCoins);