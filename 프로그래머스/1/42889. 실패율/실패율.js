function solution(N, stages) {
    let percents = [];
    for (let i = 1; i <= N; i++) {
        let [total, fail] = [0, 0];
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] >= i) total++
            if (i === stages[j]) fail++
        }
        percents.push({stage: i, percent: fail / total});
    }
    const answer = percents.sort((a, b) => b.percent - a.percent).map(el => el.stage);
    return answer;
}