function solution(N, stages) {
    var answer = [];
    let users = stages.length;
    let cnt = 0;
    for(let i = 1; i <= N; i++){
        for(let n of stages){
            if(n === i){
                cnt++;
            }
        }
        answer.push(cnt/users);
        users -= cnt;
        cnt = 0;
    }
    
    return answer.map((rate, index) => ({rate, index}))
        .sort((a,b) => b.rate - a.rate)
        .map(item => item.index + 1)
}