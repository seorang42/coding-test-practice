function solution(num_list) {
    let sum = 0;
    let multi = 1;
    if (num_list.length >= 11) {
        num_list.forEach(el => {
            sum += el;
        })
    } else {
        num_list.forEach(el => {
            multi *= el;
        })
    }
    return sum !== 0 ? sum : multi;
}