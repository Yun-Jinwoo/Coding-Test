function gcd(a,b){
    if(b === 0){
        return a;
    }
    else{
        return gcd(b,a%b)
    }
}

function solution(a, b) {
    var answer = 2;
    const num = gcd(a,b);
    let den = b / num;
    
    if(den === 1){
        answer = 1;
    }
    
    let set = new Set();
    for(let i = 2; i <= den; i++){
        if(den%i === 0){
            set.add(i);
            den /= i;
            i = 1;
        }
    }
    let arr = [...set];
    let regex = /^[2,5]+$/
    if(arr.join('').match(regex)){
        answer = 1
    }
    return answer;
}

