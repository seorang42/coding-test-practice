function getService(chicken) {
    const service = Math.floor(chicken / 10);
    if (service === 0) return 0;
    
    return service + getService(service + chicken % 10);
}

function solution(chicken) {
    return getService(chicken);
}