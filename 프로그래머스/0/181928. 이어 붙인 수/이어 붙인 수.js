function solution(num_list) {
    let even = "";
    let odd = "";
    num_list.forEach((el) => {
        if (el % 2 === 0) {
            even += String(el);
        } else {
            odd += String(el);
        }
    })
    return Number(even) + Number(odd);
}