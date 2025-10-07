const getResult = (elements) => {
    let result = { x: 0, num: 0 };
    
    elements.forEach((el) => {
        if (el === "+") return;
        
        if (el === "x") {
            result.x += 1;
        } else if (el[el.length - 1] === "x") {
            const num = Number(el.slice(0, el.length - 1));
            result.x += num;
        } else {
            result.num += Number(el);
        }
    });
    
    const x = result.x === 0 ? "" : result.x === 1 ? "x" : result.x + "x";
    const num = result.num === 0 ? "" : result.num;
    
    return `${x}${(x && num) ? " + " : ""}${num}`
}

function solution(polynomial) {
    const elements = polynomial.split(" ");
    return getResult(elements);
}