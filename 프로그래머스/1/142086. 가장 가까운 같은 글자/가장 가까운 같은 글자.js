function solution(s) {
    let result = [];
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(arr.includes(s[i])){
            result.push(i - arr.lastIndexOf(s[i]));
        }
        else{
            result.push(-1);
        }
        arr.push(s[i]);
    }
    return result;
}