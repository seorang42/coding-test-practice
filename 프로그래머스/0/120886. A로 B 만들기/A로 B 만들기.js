function solution(before, after) {
    const [beforeArr, afterArr] = [before.split(""), after.split("")];
    const [joinedBefore, joinedAfter] = [beforeArr.sort().join(""), afterArr.sort().join("")];
    
    return joinedBefore === joinedAfter ? 1 : 0;
}