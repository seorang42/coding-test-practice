function solution(my_string, overwrite_string, s) {
    var answer = '';
    const replaceLen = overwrite_string.length;
    const before = my_string.slice(0, s);
    const after = my_string.slice(s + replaceLen);
    answer = before + overwrite_string + after;
    return answer;
}