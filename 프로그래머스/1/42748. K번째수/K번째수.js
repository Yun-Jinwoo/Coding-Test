function solution(array, commands) {
    var answer = [];
    for(let l of commands){
        let [i, j, k] = l;
        let arr = array.slice(i-1,j);
        answer.push(arr.sort((a,b)=>a-b)[k-1]);
    }
    
    return answer;
}