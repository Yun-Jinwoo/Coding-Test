function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        let [start, end, val] = queries[i];
        let array = [];
        for(let j = start; j <= end; j++){
            if(arr[j] > val){
                array.push(arr[j]);
            }
        }
        if(array.length === 0){
            answer.push(-1);
        }
        
        else{
            let min = Math.min(...array);
            answer.push(min);
        }
    }
    return answer;
}