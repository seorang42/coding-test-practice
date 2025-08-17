function solution(dots) {
    const [xArr, yArr] = [[], []];
    dots.forEach((dot) => {
        const [x, y] = dot;
        xArr.push(x);
        yArr.push(y);
    });
    
    const [xs, ys] = [[...new Set(xArr)], [...new Set(yArr)]];
    const [width, length] = [Math.abs(xs[0] - xs[1]), Math.abs(ys[0] - ys[1])];
    
    return width * length;
}