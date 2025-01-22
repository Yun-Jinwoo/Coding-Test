function solution(n) {
    var answer = [];
    for(let i = 2; i <= n; i++){
        if(n%i === 0){
            answer.push(i);
            n = n/i;
            i = 1;
        }
        
    }
    const set = new Set(answer);
    
    return [...set];
}