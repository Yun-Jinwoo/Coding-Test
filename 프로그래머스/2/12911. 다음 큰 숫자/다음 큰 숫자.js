function solution(n) {
    let num = 0;
    for(let i of n.toString(2).split('')){
        if(i === '1'){
            num++;
        }
    }
    n++;
    while(true){
        let num2 = 0;
        for(let i of n.toString(2).split('')){
            if(i === '1'){
                num2++;
            }
        }
        if(num2 === num) return n;
        n++;
    }
}