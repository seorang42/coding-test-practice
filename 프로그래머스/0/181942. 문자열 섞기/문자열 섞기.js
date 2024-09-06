function solution(str1, str2) {
    var answer = '';
    const length = str1.length;
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    const newArr = arr1.map((el, index) => el + str2[index]);
    answer = newArr.join("");
    return answer;
}