function solution(A, B) {
    var answer = -1;
    let str = A.split('');
    let len = A.length;
    if(A === B) return 0;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(j == 0){
                str[j] = A[len-1];
            } else{
                str[j] = A[j-1]
            }
        }
        A = str.join('')
        if(A === B){
            answer = i+1
            break;
        }
    }
    
    return answer;
}