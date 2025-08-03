function solution(arr) {
    const n = Math.max(arr.length, arr[0].length);
    const square = new Array(n).fill(null).map(() => new Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < arr.length && j < arr[0].length) {
                square[i][j] = arr[i][j];
            }
        }
    }
    
    return square;
}