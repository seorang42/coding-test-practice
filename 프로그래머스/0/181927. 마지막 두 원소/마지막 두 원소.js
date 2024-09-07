function solution(num_list) {
    var answer = [];
    let length = num_list.length;
    let last = num_list[length - 1] > num_list[length - 2] ? num_list[length - 1] - num_list[length - 2] : num_list[length - 1] * 2;
    answer = [...num_list, last];
    return answer;
}