function solution(rank, attendance) {
    const attendingRank = [];
    rank.forEach((el, index) => {
        if (attendance[index]) attendingRank.push(el);
    });
    const sortedRank = attendingRank.sort((a, b) => a - b);
    const [first, second, third] = [rank.indexOf(sortedRank[0]), rank.indexOf(sortedRank[1]), rank.indexOf(sortedRank[2])];
    return first * 10000 + second * 100 + third;
}