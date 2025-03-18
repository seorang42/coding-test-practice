function solution(id_list, report, k) {
    const reportedUser = {}; // 신고당한 유저
    const count = {}; // 처리 결과 메일을 받은 유저
    
    for (const r of report) {
        const [userId, reportedId] = r.split(" ");
        if (reportedUser[reportedId] === undefined) {
            reportedUser[reportedId] = new Set();
        }
        reportedUser[reportedId].add(userId); // 신고한 사람의 아이디를 집합에 담음
    }
    
    for (const reportedId of Object.keys(reportedUser)) {
        if (reportedUser[reportedId].size >= k) {
            for (const uid of reportedUser[reportedId]) {
                count[uid] = (count[uid] || 0) + 1
            }
        }
    }
    
    const answer = [];
    for (const id of id_list) {
        answer.push(count[id] || 0);
    }
    
    return answer;
}