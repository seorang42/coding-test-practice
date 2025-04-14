function solution(arr, k) {
    const answer = new Array(k).fill(-1);
    
    let [count, included] = [0, {}];
    for (const num of arr) {
        if (count === k) break;
        
        if (included[num]) continue;
        
        answer[count] = num;
        count++;
        included[num] = 1;
    }
    
    return answer;
}