let OPEN = ["(", "[", "{"]

function solution(s) {
    let answer = 0;
    let str = s.concat(s);
    for(let i = 0; i < s.length; i++){
        const stack = [];
        let isCorrect = true;
        for(let j = i; j < i + s.length; j++){
            if(OPEN.includes(str[j])){
                stack.push(str[j]);
            } 
            else{
                if(stack.length === 0){
                    isCorrect = false;
                    break;
                }
                let top = stack[stack.length - 1];
                if(top === "(" && str[j] === ")"){
                    stack.pop()
                }
                else if(top === "{" && str[j] === "}"){
                    stack.pop()
                }
                else if(top === "[" && str[j] === "]"){
                    stack.pop()
                }
                else{
                    isCorrect = false;
                    break;
                }
            }
            
        }
        if(stack.length !== 0){
                isCorrect = false;
            }
        if(isCorrect) answer++;
    }

    return answer;
}   