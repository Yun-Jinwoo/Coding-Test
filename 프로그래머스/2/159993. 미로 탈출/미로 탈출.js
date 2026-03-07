// 최단 경로 -> BFS => Queue 활용
class Queue {
    items = []
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++]
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let start, lebber, end;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(maps[i][j] === 'S') start = [i, j];
            if(maps[i][j] === 'L') lebber = [i, j];
            if(maps[i][j] === 'E') end = [i, j];
        }
    }
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    function bfs(start, end){
        const q = new Queue();
        q.push([...start, 0]);
        const visited = Array.from({length: n}, () => Array.from({length: m}, () => false));
        visited[start[0]][start[1]] = true;
        
        while(!q.isEmpty()){
            let [x, y, d] = q.pop();
            if(end[0] === x && end[1] === y){
                    return d;
                }
            for(let i = 0; i < 4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] !== 'X' && !visited[nx][ny] ){
                    visited[nx][ny] = true;
                    q.push([nx, ny, d+1]);
                }
            }   
        }
        return -1;
    }
    
    let stl = bfs(start, lebber);
    let lte = bfs(lebber, end);

    if(stl === -1 || lte === -1){
        return -1;
    }
    return stl + lte;
    
    
}