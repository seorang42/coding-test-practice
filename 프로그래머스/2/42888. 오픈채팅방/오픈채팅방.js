function solution(record) {
    var answer = [];
    const member = {};
    const order = [];
    
    for (const command of record) {
        const [type, uid, name] = command.split(" ");
        switch (type) {
            case "Enter":
                member[uid] = name;
                order.push(`Enter ${uid}`);
                break;
            case "Leave":
                order.push(`Leave ${uid}`);
                break;
            case "Change":
                member[uid] = name;
        }
    }
    
    order.forEach(el => {
        const [type, uid] = el.split(" ");
        answer.push(`${member[uid]}님이 ${type === "Enter" ? "들어왔습니다." : "나갔습니다."}`)
    });
    return answer;
}