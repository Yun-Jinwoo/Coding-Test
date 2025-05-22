function solution(n) {
    let prev = 0;
    let curr = 1;
    
    for(let i = 0; i < n-1; i++){
        let t = prev;
        prev = curr;
        curr = (t + curr)% 1234567;
    }
    
    return curr ;
}