function solution(num_list) {
    let evenCount = 0;
    let oddCount = 0;
    num_list.forEach(el => {
        if (el % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    })
    return [evenCount, oddCount];
}