function solution(genres, plays) {
    var answer = [];
    const list = {};
    const song = {};
    for (const genre of genres) {
        if (!list[genre] && !song[genre]) {
            list[genre] = 0;
            song[genre] = {};
        }
    }
    
    for (const [index, play] of plays.entries()) {
        list[genres[index]] += play;
        song[genres[index]][index] = play;
    }
    
    const sorted = Object.entries(list).sort((a, b) => b[1] - a[1]).map(el => el[0]);
    
    for (const genre of sorted) {
        const sortedIndex = Object.entries(song[genre]).sort((a, b) => b[1] - a[1]).map(el => Number(el[0]));
        answer.push(sortedIndex[0]);
        if (sortedIndex[1] !== undefined) answer.push(sortedIndex[1]);
    }
    
    return answer;
}