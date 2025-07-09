function solution(s) {
    let stack = [];
    for(let ch of s){
        if(stack.length !== 0){
            if(ch === stack.at(-1)){
                stack.pop();
            } else{
                stack.push(ch);
            }
        } else{
            stack.push(ch)
        }
    }
    
    return stack.length === 0 ? 1 : 0
}
