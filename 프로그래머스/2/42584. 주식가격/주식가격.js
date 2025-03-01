function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    for (let i = 0; i < prices.length - 1; i++) {
        let count = 0;
        for (let j = i + 1; j < prices.length; j++) {
            count++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer[i] = count;
    }
    return answer;
}