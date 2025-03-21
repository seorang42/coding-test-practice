function solution(info, edges) {
    const tree = {};
    for (const edge of edges) {
        const [parent, child] = edge;
        if (tree[parent] === undefined) {
            tree[parent] = [child];
        } else {
            tree[parent].push(child);
        }
        
        if (tree[child] === undefined) {
            tree[child] = [];
        }
    }
    
    let answer = 0;
    function dfs(curr, sheep, wolf, possible) {
        // 양과 늑대 계산 후 탈출 또는 정답 갱신
        info[curr] === 0 ? sheep++ : wolf++;
        if (wolf >= sheep) return;
        answer = Math.max(answer, sheep);
        
        // dfs 호출
        const newPossible = [...possible, ...tree[curr]];
        newPossible.splice(possible.indexOf(curr), 1);
        for (const node of newPossible) {
            dfs(node, sheep, wolf, newPossible);
        }
    }
    
    dfs(0, 0, 0, [0]);
    
    return answer;
}