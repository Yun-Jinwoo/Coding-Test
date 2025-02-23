function solution(s) {
    let arr = s.split('')
    let ansarr = [];
    
    for(let i of arr){
        if(arr.indexOf(i) === arr.lastIndexOf(i)){
            ansarr.push(i);
        }
    }
    
    return ansarr.sort().join('');
}