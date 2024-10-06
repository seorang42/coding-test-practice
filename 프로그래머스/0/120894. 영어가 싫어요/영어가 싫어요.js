function solution(numbers) {
    var answer = "";
    const numList = [{text:"zero", number:"0"},{text : "one", number : "1"},{text : "two", number : "2"},{text : "three", number : "3"},{text : "four", number : "4"},{text : "five", number : "5"},{text : "six", number : "6"},{text : "seven", number : "7"},{text : "eight", number : "8"},{text : "nine", number : "9"},]
    const findFirst = (numText) => {
        numList.forEach(el => {
            if (numText.indexOf(el.text) === 0) {
                answer += el.number;
                const newText = numText.slice(el.text.length);
                return findFirst(newText);
            }
        })
    }
    findFirst(numbers);
    return Number(answer);
}