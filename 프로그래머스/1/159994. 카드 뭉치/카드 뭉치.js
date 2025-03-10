function solution(cards1, cards2, goal) {
    var answer = '';
    let [first, second] = [0, 0];
    for (let i = 0; i < goal.length; i++) {
        const current = goal[i];
        if (cards1[first] === current) {
            first++;
        } else if (cards2[second] === current) {
            second++;
        } else {
            return "No";
        }
    }
    return "Yes";
}