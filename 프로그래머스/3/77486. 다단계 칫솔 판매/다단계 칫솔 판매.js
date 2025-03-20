function solution(enroll, referral, seller, amount) {
    const parent = {};
    for (const [i, name] of enroll.entries()) {
        if (referral[i] !== "-") {
            parent[name] = referral[i];
        }
    }
    
    const profit = {};
    for (const name of enroll) {
        profit[name] = 0;
    }
    
    for (const [i, name] of seller.entries()) {
        let money = amount[i] * 100;
        let currName = name;
        
        while(currName !== "-" && money > 0) {
            profit[currName] += money - Math.floor(money / 10);
            currName = parent[currName];
            
            money = Math.floor(money / 10);
        }
    }
    
    return enroll.map(el => profit[el]);
}