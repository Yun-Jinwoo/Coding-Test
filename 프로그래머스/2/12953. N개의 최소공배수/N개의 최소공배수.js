function solution(arr) {
    let answer = arr[0];
    arr.sort((a,b) => a - b);
    for(let i = 1; i < arr.length; i++){
        answer = arr[i]*answer / gcd(arr[i], answer)
    }
    return answer
}

function gcd(a, b){
    if(b === 0){
        return a;
    } else if(a % b === 0){
        return b;
    } else{
        return gcd(b, a % b)
    }
}