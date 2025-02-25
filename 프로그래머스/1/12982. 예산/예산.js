function solution(d, budget) {
    let sum = 0;
    d.sort((a,b) => a-b);
    for(let i = 0; i < d.length; i++){
        if(sum < budget){
            sum += d[i];
        }
        else if (sum === budget){
            return i;
        }
        else{
            return i-1;
        }
    }
    if(sum > budget){
        return d.length-1;
    }
    else{
        return d.length;
    }
}