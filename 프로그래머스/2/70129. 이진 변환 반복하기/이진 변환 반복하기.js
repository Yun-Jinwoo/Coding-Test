function solution(s) {
    let zero = 0;
    let num = 0;
    while(s !== '1'){
        let len = s.length;
        
        for(let i = 0; i < s.length; i++){
            if(s[i] === '0'){
                len--;
                zero++;
            }
        }
        s = String(len.toString(2))
        num++;
    }
    return [num, zero]
}