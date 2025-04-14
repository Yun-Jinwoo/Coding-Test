function solution(n, w, num) {
    const arr = [];
    let one_floor = [];
    for(let i = 1; i <= n; i += w){
        one_floor = [];
        for(let j = i; j < i+w; j++){
            if(j > n) break;
            one_floor.push(j);
        }
        arr.push([...one_floor])
    }
    arr.forEach((item, index) => {
        if(index % 2 !== 0){
            item.sort((a,b) => b-a)
        }
    })
    let rem = w - (n % w)
    if(n%w === 0) rem = 0;
    for(let i = 0; i < rem; i++){
        if((arr.length-1) % 2 !== 0){
            arr[arr.length - 1].unshift(0)
        } else{
            arr[arr.length - 1].push(0)
        }
        
    }
    let pos = [0,0]
    arr.forEach((item, index) => {
        if(item.includes(num)){
            pos = [index, item.indexOf(num)]
        }
    })
    let result = 0
    for(let i = pos[0]; i < arr.length; i++){
        if(arr[i][pos[1]] !== undefined && arr[i][pos[1]] !== 0) result++;
    }
    
    return result
}