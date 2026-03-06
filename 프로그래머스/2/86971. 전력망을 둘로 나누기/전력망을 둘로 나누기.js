function solution(n, wires) {
    const graph = Array.from({length: n+1}, ()=>[]);
    for(let [a, b] of wires){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    function dfs(parent, node){
        let cnt = 1;
        for(let ch of graph[node]){
            if(parent !== ch){
                cnt += dfs(node, ch)
            }
        }
        return cnt;
    }
    
    let min = Infinity;
    for(let [a,b] of wires){
        graph[a].splice(graph[a].indexOf(b), 1);
        graph[b].splice(graph[b].indexOf(a), 1);
        
        cntA = dfs(a,b);
        cntB = dfs(b,a);
        
        min = Math.min(min, Math.abs(cntA - cntB))
        
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return min
}