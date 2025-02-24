function solution(x, n) {
    var answer = [];
    if(x > 0){
        for(let i = x; i <= x*n; i += x){
            answer.push(i)
        }
    }
    else if(x == 0){
        let arr = new Array(n).fill(0)
        return arr
    }
    else{
        for(let i = x; i >= x*n; i += x){
            answer.push(i)
        }
    }
    return answer;
}