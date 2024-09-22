function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    num_list.forEach((el, index) => {
        if ((index + 1) % 2 === 1) {
            oddSum += el;
        } else {
            evenSum += el;
        }
    })
    return evenSum >= oddSum ? evenSum : oddSum
}