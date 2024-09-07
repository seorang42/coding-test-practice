function solution(num_list) {
    var answer = 0;
    let mul = 1;
    let sum = 0;
    num_list.forEach((el) => {
        mul *= el;
        sum += el;
    })
    return mul < (sum ** 2) ? 1 : 0;
}