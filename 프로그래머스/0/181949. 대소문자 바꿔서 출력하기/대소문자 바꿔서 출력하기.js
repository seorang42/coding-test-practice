const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = str.split("");
    let answer = ""
    arr.forEach(el => {
        if (el === el.toUpperCase()) {
            answer += el.toLowerCase();
        }
        else {
            answer += el.toUpperCase();
        }
    })
    console.log(answer);
    
});