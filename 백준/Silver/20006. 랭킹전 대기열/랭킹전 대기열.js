const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [p, m] = input[0].split(" ").map(Number);
const players = input.slice(1).map(el => el.split(" ")).map(el => [Number(el[0]), el[1]]);

class Room {
    constructor(level, player) {
        this.room = [[level, player]];
        this.limit = m;
        this.minLevel = Math.max(0, level - 10);
        this.maxLevel = level + 10;
    }
    
    checkLevel(level) {
        return level >= this.minLevel && level <= this.maxLevel;
    }
    
    push(level, player) {
        this.room.push([level, player]);
    }
    
    isFull() {
        return this.room.length >= this.limit;
    }
    
    sort() {
        return this.room.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0).map(el => el.join(" ")).join("\n");
    }
}

const rooms = [];
for (const [level, player] of players) {
    let added = false;
    for (const room of rooms) {
        if (!room.isFull() && room.checkLevel(level)) {
            room.push(level, player);
            added = true;
            break;
        }
    }
    if (added) continue;
    
    const newRoom = new Room(level, player);
    rooms.push(newRoom);
}

const answer = [];
for (const room of rooms) {
    answer.push(room.isFull() ? "Started!" : "Waiting!");
    answer.push(room.sort());
}
console.log(answer.join("\n"));