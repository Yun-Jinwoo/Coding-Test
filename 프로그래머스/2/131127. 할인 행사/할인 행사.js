function solution(want, number, discount) {
    const map = new Map();
    let result = 0;
    for(let i = 0; i < want.length; i++){
        map.set(want[i], number[i]);
    }
    for(let i = 0; i <= discount.length - 10; i++){
        let newmap = new Map(map);
        let product = "";
        let count = 0
        for(let j = i; j < i+10; j++){
            product = discount[j]
            count = newmap.get(product)
            if(count > 0){
                if(count === 1) {
                    newmap.delete(product);
                }
                else {
                    newmap.set(product, count-1)
                }
            }
        }
        if(newmap.size === 0) result ++;
    }
    return result
}