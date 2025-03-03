function solution(k, score) {
    var answer = [];
    let kth = [];
    for(let i of score){
        kth.push(i);
        kth.sort((a,b)=> b-a);
        if(kth.length >= k){
            answer.push(kth[k-1]);
        }
        else{
            answer.push(kth[kth.length-1])
        }
    }
    return answer;
}