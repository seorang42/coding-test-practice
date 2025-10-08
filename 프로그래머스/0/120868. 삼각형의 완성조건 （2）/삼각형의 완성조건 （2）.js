function solution(sides) {
    const [short, long] = sides.sort((a, b) => a - b);
    const answer = new Set();
    
    for (let i = long + short - 1; i >= 1; i--) {
        if (i + short > long) answer.add(i);
    }
    
    const longest = short + long - 1;
    for (let i = longest; i >= 1; i--) {
        if (i > long) answer.add(i);
    }
    
    return answer.size;
}