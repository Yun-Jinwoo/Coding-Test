function solution(clothes) {
    const map = new Map();
    for(let [cloth, type] of clothes){
        if(map.has(type)){
            map.set(type, map.get(type) + 1)
        } else{
            map.set(type, 1)
        }
    }
    let answer = 1;
    for(let [type, cnt] of map){
        answer *= cnt+1
    }
    return answer-1
    
}