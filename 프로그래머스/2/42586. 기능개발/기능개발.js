function solution(progresses, speeds) {
    let queue = [...progresses];
    let num = 0;
    let result = [];
    while(queue.length > 0){
        num = 0;
        while(queue[0] >= 100) {
            queue.shift();
            speeds.shift();
            num++;
        }
        for(let i = 0; i < queue.length; i++){
            queue[i] += speeds[i];
        }
        if(num !== 0){
            result.push(num);
        }
        
    }
    return result
}