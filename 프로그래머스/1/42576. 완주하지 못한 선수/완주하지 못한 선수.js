function solution(participant, completion) {
    const map = new Map();
    for(let name of participant){
        if(map.has(name)){
            let num = map.get(name);
            map.set(name, num+1)
        } else{
            map.set(name, 1);
        }
    }
    for(let name of completion){
        let num = map.get(name);
        map.set(name, num-1);
    }
    for(let [key, value] of map){
        if(value !== 0){
            return key
        }
    }
}