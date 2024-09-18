function solution(num_list, n) {
    const before = num_list.slice(n);
    const after = num_list.slice(0, n);
    const answer = [...before, ...after]
    return answer;
}