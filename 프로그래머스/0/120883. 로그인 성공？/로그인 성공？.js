const findId = (db, id) => {
    for (const account of db) {
        const [dbId] = account;
        if (dbId === id) return account;
    }
    
    return false;
}

function solution(id_pw, db) {
    const [id, password] = id_pw;
    const foundAccount = findId(db, id);
    if (!foundAccount) return "fail";
    
    const checkPassword = password === foundAccount[1];
    if (checkPassword) return "login";
    else return "wrong pw";
}