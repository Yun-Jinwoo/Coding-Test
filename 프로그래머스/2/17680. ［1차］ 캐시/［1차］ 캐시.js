function solution(cacheSize, cities) {
    let queue = new Array(cacheSize).fill(0);
    let ans = 0;
    let lowcities = cities.map(city => city.toLowerCase());
    for(let city of lowcities){
        if(queue.includes(city)){
            for(let i = 0; i < cacheSize; i++){
                if(queue[i] === city){
                    queue.splice(i,1);
                }
            }
            queue.push(city);
            ans++;
        } 
        else{
            queue.shift();
            queue.push(city);
            ans += 5;
        }
    }
    if(cacheSize === 0){
        return 5*cities.length
    }
    return ans
}