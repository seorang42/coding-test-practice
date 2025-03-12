function solution(myString, pat) {
    for (let i = myString.length - pat.length; i >= 0; i--) {
        const target = myString.slice(i, i + pat.length);
        console.log(i, target);
        if (target === pat) {
            const answer = myString.slice(0, i + pat.length);
            return answer;
        }
    }
}