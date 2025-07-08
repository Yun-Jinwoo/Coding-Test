function solution(n,a,b)
{
    let answer = 0;
    for(let i = n; i >= 1; i /= 2){
        if(a !== b){
            answer++;
            a = Math.floor((a+1)/2)
            b = Math.floor((b+1)/2)
        } else{
            break;
        }        
    }
    return answer
}