function solution(arr)
{
    var answer = [arr[0]];
    let num = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== num){
            answer.push(arr[i]);
            num = arr[i]
        }
    }
    
    return answer;
}