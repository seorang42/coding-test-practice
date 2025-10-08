const checkWord = (spell, word) => {
    if (spell.length !== word.length) return false;
    
    const spellArr = [...spell];
    const wordArr = word.split("");
    
    for (let i = 0; i < wordArr.length; i++) {
        if (!spellArr.includes(wordArr[i])) break;
        
        const targetIndex = spellArr.indexOf(wordArr[i]);
        spellArr.splice(targetIndex, 1);
    }
    
    return spellArr.length === 0 ? true : false;
}

function solution(spell, dic) {
    let answer = 2;
    dic.forEach((word) => {
        if (checkWord(spell, word)) answer = 1;
    })
    return answer;
}