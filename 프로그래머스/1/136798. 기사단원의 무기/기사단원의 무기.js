function solution(number, limit, power) {
    var answer = 0;
    let arr = [];
    for(let i = 1; i <= number; i++){
        arr.push(getFactor(i));
    }
    for(let n of arr){
        if(n <= limit){
            answer += n;
        }
        else{
            answer += power;
        }
    }
    return answer;
}

function getFactor(num){
    let sum = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num%i === 0){
            if(num/i === i){
                sum+= 1;
            }
            else{
                sum += 2;
            }
        }
    }
    return sum;
}