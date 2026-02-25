function solution(N, road, K) {
    const minD = Array(N).fill(Infinity);
    const prev = Array(N).fill(null);

    minD[0] = 0;
    prev[0] = 1;
    for(let i = 0; i < N-1; i++){
        for(let [s,e,w] of road){
            if(minD[s-1] + w < minD[e-1]){
                minD[e-1] = minD[s-1] + w;
                prev[e-1] = s;
            }
            if(minD[e-1] + w < minD[s-1]){
                minD[s-1] = minD[e-1] + w;
                prev[s-1] = e;
            }
        }
    }
    
    answer = 0
    for(let i of minD){
        if(i <= K) answer++;
    }
    
    return answer
}