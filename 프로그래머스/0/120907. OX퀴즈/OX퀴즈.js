function calc(X, op, Y) {
    switch(op) {
        case "+" :
            return X + Y;
        case "-" :
            return X - Y;
    }
}

function solution(quiz) {
    const answer = [];
    for (const expression of quiz) {
        const [X, op, Y, eq, Z] = expression.split(" ").map(el => !isNaN(Number(el)) ? Number(el) : el);
        if (calc(X, op, Y) === Z) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    return answer;
}