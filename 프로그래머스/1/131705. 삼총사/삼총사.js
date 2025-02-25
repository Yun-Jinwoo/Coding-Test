function solution(n) {
    var answer = 0;
    let len = n.length;
    for(let i = 0; i < len-2; i++){
        for(let j = i+1; j < len-1; j++){
            for(let k = j+1; k < len; k++){
                if(n[i]+n[j]+n[k] === 0){
                    answer++;
                }
            }
        }
    }
    return answer;
}