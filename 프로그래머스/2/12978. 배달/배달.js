// 다익스트라
class MinHeap {
    constructor(){
        this.items = []
    }
    
    size(){
        return this.items.length;
    }
    
    insert(item){
        this.items.push(item);
        this.bubbleUp();
    }
    
    pop(){
        let first = this.items[0];
        this.items[0] = this.items[this.size()-1];
        this.items.pop();
        this.bubbleDown();
        
        return first;
    }
    
    bubbleUp(){
        let index = this.size() - 1;
        while(index > 0){
            const parent = Math.floor((index - 1)/2)
            if(this.items[index] < this.items[parent]){
                this.swap(index, parent);
                index = parent;
            } else{
                break;
            }
        }
    }
    
    bubbleDown(){
        let index = 0;
        while(index * 2 + 1 < this.size()){
            let left = index*2 + 1
            let right = index*2 + 2
            let smaller = right < this.size() && this.items[left] > this.items[right] ? right : left;
            if(this.items[index] < this.items[smaller]) break;
            this.swap(index, smaller);
            index = smaller;
        }
    }
    
    swap(a,b){
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
}

function solution(N, road, K){
    const graph = Array.from({length: N + 1}, () => []);
    const minD = Array(N+1).fill(Infinity);
    minD[1] = 0
    
    for(const [s, e, d] of road){
        graph[s].push([e, d]);
        graph[e].push([s, d]);
    }
    
    const heap = new MinHeap();
    heap.insert([0, 1]);
    while(heap.size() > 0){
        const [d, node] = heap.pop();
        
        for (const [nextNode, nextDist] of graph[node]){
            const cost = d + nextDist;
            if (cost < minD[nextNode]){
                minD[nextNode] = cost;
                heap.insert([cost, nextNode]);
            }
        }
    }
    
    let answer = 0;
    for(let i = 0; i < minD.length; i++){
        if(minD[i] <= K){
            answer++;
        }
    }
    
    return answer;
}


/* 벨만-포드
function solution(N, road, K) {
    const minD = Array(N).fill(Infinity);
    const prev = Array(N).fill(null);

    minD[0] = 0;
    prev[0] = 1;
    for(let i = 0; i < N; i++){
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
*/