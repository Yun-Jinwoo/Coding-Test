function solution(n, computers) {
    function dfs(com, visit, index){
        visit[index] = true;
        for(let i = 0; i < com.length; i++){
            if(com[index][i] === 1 && !visit[i]){
                dfs(com, visit, i)
            }
        }
    }
    let answer = 0;
    const visit = Array(n).fill(false);
    
    for(let i = 0; i < n; i++){
        if(!visit[i]){
            dfs(computers, visit, i);
            answer++;
        }
    }

    return answer;
}