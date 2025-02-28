function solution(N, stages) {
    // 스테이지별 도전자 수 계산 (1부터 N + 1까지이므로, 0 제외 N + 2개)
    const challenger = new Array(N + 2).fill(0);
    for (const stage of stages) {
        challenger[stage] += 1;
    }
    
    // 스테이지별 실패한 사용자 수 계산
    const fails = {}
    let total = stages.length;
    
    // 실패율 계산
    for (let i = 1; i <= N; i++) {
        if (challenger[i] === 0) {
            fails[i] = 0;
            continue;
        }
        
        fails[i] = challenger[i] / total;
        
        total -= challenger[i];
    }
    
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
    
    return result.map(el => Number(el[0]));
}