function solution(id_list, report, k) {
    var answer = [];
    const member = {};
    id_list.forEach(el => member[el] = []);
    
    const reportedUser = {};
    id_list.forEach(el => reportedUser[el] = 0);
    report.forEach(el => {
        const [reporter, reported] = el.split(" ");
        if (!member[reporter].includes(reported)) {
            member[reporter].push(reported);
            reportedUser[reported]++;
        }
    });
    
    for (const id of id_list) {
        let count = 0;
        member[id].forEach(el => {
            if (reportedUser[el] >= k) {
                count++;
            }
        });
        answer.push(count);
    }
    return answer;
}