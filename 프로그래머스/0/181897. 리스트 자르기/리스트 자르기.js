function solution(n, slicer, num_list) {
    var answer = [];
    if (n === 1) {
        for (let i = 0; i <= slicer[1]; i++) {
            answer.push(num_list[i]);
        }
    } else if (n === 2) {
        for (let i = slicer[0]; i < num_list.length; i++) {
            answer.push(num_list[i]);
        }
    } else if (n === 3) {
        for (let i = slicer[0]; i <= slicer[1]; i++) {
            answer.push(num_list[i])
        }
    } else if (n === 4) {
        for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
            answer.push(num_list[i]);
        }
    }
    return answer;
}