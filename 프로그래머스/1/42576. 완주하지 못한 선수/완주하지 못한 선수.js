function solution(participant, completion) {
    const list = {};
    const completed = completion.forEach(el => {
        if (list[el] === undefined) {
            list[el] = 0;
        } else {
            list[el]++;
        }
    });
    for (const name of participant) {
        if (list[name] === undefined || list[name] < 0) {
            return name;
        } else {
            list[name]--;
        }
    }
}