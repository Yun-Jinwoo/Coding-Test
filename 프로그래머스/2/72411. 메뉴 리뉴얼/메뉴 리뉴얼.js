function solution(orders, course) {
    
    const result = [];
    for(const num of course){
        const map = new Map()
        for(let i = 0; i < orders.length; i++){
            let arr = select(orders[i].split(''), num).map(v => v.sort().join(''));
            for(let order of arr){
                if(map.has(order)){
                    map.set(order, map.get(order) + 1);
                } else{
                    map.set(order, 1);
                }
            }
        }
        const max = Math.max(...map.values())
        
        for(const [order, cnt] of map){
            if(cnt === max && max !== 1){
                result.push(order)
            }
        }
    }
    return result.sort();
}
                
function select(arr, num){
    let result = [];
    if(num === 1) return arr.map((v) => [v]);
    for(let i = 0; i < arr.length; i++){
        let selected = select(arr.slice(i+1), num-1)
        result.push(...selected.map(v => [arr[i], ...v]));
    }
    return result;
}