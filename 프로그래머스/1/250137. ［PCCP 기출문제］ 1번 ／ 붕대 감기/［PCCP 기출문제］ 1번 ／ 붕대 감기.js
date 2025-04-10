function solution(bandage, health, attacks) {
    const max_health = health;
    for(let i = 0; i < attacks.length-1; i++){
        let time = attacks[i+1][0] - attacks[i][0]-1;
        health -= attacks[i][1]
        if(health <= 0) return -1
        health += bandage[1]*time
        while(time >= bandage[0]){
            time -= bandage[0]
            health += bandage[2];
        }

        if(health > max_health){
            health = max_health;
        }
    }
    health -= attacks[attacks.length-1][1];
    return health <= 0 ? -1 : health
}