function solution(str_list, ex) {
    const newStr = str_list.reduce((acc, curr) => curr.includes(ex) ? acc : acc + curr, "");
    return newStr;
}