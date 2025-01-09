function solution(a, b, c, d) {
    let answer = 0;
    let arr = [a, b, c, d];
    arr.sort();
    if(arr[0] === arr[3]){
        answer = 1111 * arr[0];
    }
    else if(arr[0] === arr[2]){
        answer = (10*arr[0]+arr[3])**2
    }
    else if(arr[1] === arr[3]){
        answer = (10*arr[1]+arr[0])**2
    }
    else if(arr[0] === arr[1] && arr[2] === arr[3]){
        answer = (arr[0]+arr[2])*(arr[2]-arr[0])
    }
    else if(arr[0] === arr[1]){
        answer = arr[2]*arr[3]
    } 
    else if(arr[1] === arr[2]){
        answer = arr[0]*arr[3]
    } 
    else if(arr[2] === arr[3]){
        answer = arr[0]*arr[1]
    }
    else{
        answer = arr[0]
    }
    return answer;
}