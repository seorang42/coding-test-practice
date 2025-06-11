function solution(order) {
    const total = order.reduce((acc, cur) => {
        if (cur === "anything" || cur.includes("americano")) {
            return acc + 4500;
        } else if (cur.includes("cafelatte")) {
            return acc + 5000;
        }
    }, 0)
    return total;
}