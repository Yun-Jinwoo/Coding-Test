function solution(price) {
    let off = 0;
    if(price >= 500000){
        off = 20;
    }
    else if(price >= 300000){
        off = 10;
    }
    else if(price >= 100000){
        off = 5;
    }
    return Math.floor(price*(100-off)/100)
}