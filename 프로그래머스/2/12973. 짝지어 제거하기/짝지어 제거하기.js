function solution(s)
{
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (stack[stack.length - 1] === letter) {
            stack.pop();
            continue;
        }
        stack.push(letter);
    }
    return stack.length === 0 ? 1 : 0;
}