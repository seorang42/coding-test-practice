function solution(picture, k) {
    const zoomed = [];
    for (let i = 0; i < picture.length; i++) {
        const newLine = [];
        const prevLine = picture[i].split("");
        for (let j = 0; j < prevLine.length; j++) {
            for (let l = 0; l < k; l++) {
                newLine.push(prevLine[j]);
            }
        }
        
        for (let j = 0; j < k; j++) {
            zoomed.push(newLine.join(""));
        }
    }
    return zoomed;
}