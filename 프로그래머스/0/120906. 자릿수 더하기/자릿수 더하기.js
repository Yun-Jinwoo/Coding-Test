function solution(n) {
    var answer = 0;
    
    for(let a of n.toString()){
        answer += +a;
    }
    return answer;
}