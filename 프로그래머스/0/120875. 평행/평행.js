const getGradient = (dots) => {
    const [x, y] = dots;
    const [a, b] = [x[0] - y[0], x[1] - y[1]];
    return a / b;
}

function solution(dots) {
    let answer = 0;
    
    for (let i = 0; i < dots.length - 1; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const dots1 = [dots[i], dots[j]];
            const dots2 = dots.filter((dot) => !dots1.includes(dot));
            
            const [gradient1, gradient2] = [getGradient(dots1), getGradient(dots2)];
            if (gradient1 === gradient2) {
                answer = 1;
                break;
            }
        }
        
        if (answer === 1) break;
    }
    
    return answer;
}