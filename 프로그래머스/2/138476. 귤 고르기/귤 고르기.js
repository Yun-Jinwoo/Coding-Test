function solution(k, tangerine) {
    let map = new Map()
    for(let i = 0; i < tangerine.length ; i++){
        if(map.has(tangerine[i])){
            map.set(tangerine[i], map.get(tangerine[i]) + 1)
        } else{
            map.set(tangerine[i], 1)
        }
    }
    let values = [];
    for (const [key, value] of map) {
        values.push(value)
    }
    values.sort((a,b) => (b - a))
    let result = 0;
    while(k > 0){
        k -= values[0];
        values.shift();
        result++;
    }
    return result;
}