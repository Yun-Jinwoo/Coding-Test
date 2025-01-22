function solution(polynomial) {
    const arr = polynomial.split(" ");
    let x = 0;
    let constant = 0;
    for(let i of arr){
        if(i === "+"){
            continue;
        }
        else{
            if(i[i.length - 1] === "x"){
                if(i === "x"){
                    x += 1;
                }
                else{
                    let val = parseInt(i.slice(0,i.length-1));
                    x += val;
                }
            }
            else{
                constant += parseInt(i);
            }
        }
    }
    let answer = '';
    if(x === 0){
        answer = `${constant}`;
    }
    else if(constant === 0){
        if(x === 1){
            answer = "x";
        }else{
            answer = `${x}x`;
        }
    }
    else{
        if(x === 1){
            answer = `x + ${constant}`;
        } else{
            answer = `${x}x + ${constant}`;
        }
    }
    return answer;
}