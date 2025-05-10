function solution(s){
    if(s[0] === ")" || s[s.length-1] === "("){
        return false;
    }
    let a = 0;
    s.split('').forEach((item,index) => {
        if(item === "("){
            a++;
        } else if(item === ")"){
            if(a>0) a--;
            else return false;
        }
    })
    return a === 0
}