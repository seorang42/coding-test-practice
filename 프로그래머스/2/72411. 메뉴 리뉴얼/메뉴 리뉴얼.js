function combinations(arr, n) {
    // 1개만 뽑는다면 그대로 조합을 반환하며 탈출 조건으로도 사용
    if (n === 1) return arr.map(el => [el]);
    const result = [];
    
    arr.forEach((fixed, i, arr) => {
        // 현재 index 이후 요소를 추출
        // index번째는 선택된 요소
        const rest = arr.slice(i + 1);
        
        // 선택된 요소 이전 요소들을 제외하고 재귀 호출
        const combis = combinations(rest, n - 1);
        
        // 선택된 요소와 재귀 호출을 통해 구한 조합을 합침
        const combine = combis.map(el => [fixed, ...el]);
        
        // 결과 값을 추가
        result.push(...combine);
    });
    
    return result;
}

function solution(orders, course) {
    var answer = [];
    
    const menu = {};
    
    for (const order of orders) {
        for (let i = 1; i <= order.length; i++) {
            const combis = combinations(order.split(""), i).map(el => el.sort((a, b) => a > b ? 1 : a < b ? -1 : 0).join(""));
            combis.forEach(el => menu[el] = (menu[el] || 0) + 1);
        }
    }
    
    for (const count of course) {
        const filtered = Object.entries(menu).filter(el => el[0].length === count).sort((a, b) => b[1] - a[1]);
        console.log(filtered);
        if (filtered.length !== 0) {
            const max = filtered[0][1];
            if (max < 2) break;
            for (const set of filtered) {
                if (set[1] < max) break;
                answer.push(set[0]);
            }
        }
    }
    
    return answer.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
}