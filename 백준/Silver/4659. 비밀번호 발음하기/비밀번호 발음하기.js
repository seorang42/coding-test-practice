const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const passwords = input.slice(0, input.length - 1);

const answer = [];
const vowelSet = new Set(["a", "e", "i", "o", "u"]);
for (const password of passwords) {
    let acceptable = true;
    let hasVowel = false;
    let [consonants, vowels, last] = [0, 0, ""];
    
    for (let i = 0; i < password.length; i++) {
        const letter = password[i];
        if (letter !== "e" && letter !== "o" && last === letter) {
            acceptable = false;
            break;
        }
        
        if (vowelSet.has(letter)) {
            if (!hasVowel) hasVowel = true;
            
            [consonants, vowels, last] = [0, ++vowels, letter];
        } else {
            [consonants, vowels, last] = [++consonants, 0, letter];
        }
        
        if (vowels >= 3 || consonants >= 3) {
            acceptable = false;
            break;
        }
    }
    
    answer.push(`<${password}> is ${hasVowel && acceptable ? "" : "not "}acceptable.`);
}

console.log(answer.join("\n"));