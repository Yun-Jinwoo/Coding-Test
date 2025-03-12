function solution(s) {
    let result = 0;
    let x = s[0];
    let cnt = [0, 0];
    for(let i = 0; i < s.length; i++){
        if(s[i] === x){
            cnt[0]++
        } else{
            cnt[1]++
        }
        if(cnt[0] === cnt[1]){
            result++;
            x = s[i+1];
            cnt = [0,0];
        }
    }
    if(cnt[0] !== 0 || cnt[0] !== 0){
        result++
    }
    return result
}