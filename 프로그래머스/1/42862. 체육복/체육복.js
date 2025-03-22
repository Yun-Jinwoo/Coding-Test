function solution(n, losts, reserves) {
    losts.sort((a,b) => a - b) 
    let arr = [...losts]
    
    losts = losts.filter(num => !reserves.includes(num));
    reserves = reserves.filter(num => !arr.includes(num));
    arr = [...losts]
    for(let lost of arr){
        if(reserves.includes(lost-1)){
            losts.splice(losts.indexOf(lost),1);
            reserves.splice(reserves.indexOf(lost-1),1);
        }
        else if(reserves.includes(lost+1)){
            losts.splice(losts.indexOf(lost),1);
            reserves.splice(reserves.indexOf(lost+1),1);
        }
    }
    return n - losts.length
}