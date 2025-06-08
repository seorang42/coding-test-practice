function solution(my_string) {
    const strArr = my_string.split("");
    const lowerArr = strArr.map((el) => el.toLowerCase());
    
    return lowerArr.sort().join("");
}