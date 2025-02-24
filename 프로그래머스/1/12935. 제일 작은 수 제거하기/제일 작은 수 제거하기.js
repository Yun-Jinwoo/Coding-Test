function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);
    for(let a of arr){
        if(a === min){
            continue;
        }
        answer.push(a)
    }
    if (answer.length === 0){
        answer.push(-1)
    }
    return answer;
}