function solution(players, callings) {
    const map = new Map();
    players.forEach((player, index) => {
        map.set(player, index)
    })
    
    callings.forEach((player) => {
        let i = map.get(player);
        let prev = players[i-1];
        
        if(i === 0) {
            return
        }
        [players[i-1], players[i]] = [players[i], players[i-1]]
        map.set(player, i-1)
        map.set(prev, i)
    })
    return players
}