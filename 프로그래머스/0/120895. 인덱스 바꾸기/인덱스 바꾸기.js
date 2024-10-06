function solution(my_string, num1, num2) {
    var answer = '';
    const before = my_string.slice(0, num1);
    const target1 = my_string[num2];
    const between = my_string.slice(num1 + 1, num2);
    const target2 = my_string[num1];
    const after = my_string.slice(num2 + 1);
    
    answer = before + target1 + between + target2 + after;
    
    return answer;
}