function solution(arr, divisor) {
    var answer = [];
    let sorted = arr.sort((a,b) => a - b);
    for(let i of sorted){
        if(i%divisor === 0){
            answer.push(i)
        }
    }
    if (answer.length === 0){
        answer.push(-1)
    }
    return answer;
}