// 최단 거리 = BFS = Queue
class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    first() {
        return this.items[this.front];
    }
    
    last() {
        return this.items[this.rear - 1];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(maps) {
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const arr = Array.from({length: n}, () => Array(m).fill(-1))
    
    const q = new Queue();
    
    q.push([0,0])
    arr[0][0] = 1
    
    while(!q.isEmpty()){
        const now = q.pop();
        for(const [dx, dy] of move){
            const x = now[0] + dx;
            const y = now[1] + dy;
            
            if (x < 0 || y < 0 || x >= n || y >= m){
                continue;
            }
            
            if(maps[x][y] === 0){
                continue;
            }
            
            if (arr[x][y] === -1){
                q.push([x,y]);
                arr[x][y] = arr[now[0]][now[1]] + 1;
            }
        }
    }
    
    return arr[n-1][m-1]
}