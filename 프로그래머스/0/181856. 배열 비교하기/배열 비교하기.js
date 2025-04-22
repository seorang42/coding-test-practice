function solution(arr1, arr2) {
    var answer = 0;
    if (arr1.length > arr2.length) return 1;
    if (arr2.length > arr1.length) return -1;
    
    const a = arr1.reduce((acc, num) => acc + num);
    const b = arr2.reduce((acc, num) => acc + num);
    
    if (a > b) return 1;
    if (b > a) return -1
    return 0;
}