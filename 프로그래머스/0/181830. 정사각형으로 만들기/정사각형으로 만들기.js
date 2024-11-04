function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    if(col > row){
        let dif = col - row;
        let newarr = new Array(col).fill(0);
        for(let i = 0; i < dif; i++){
            arr.push(newarr);
        }
    }
    else if(col < row){
        let dif = row - col;
        for(let i = 0; i < row; i++){
            for(let j = 0; j < dif; j++){
                arr[i].push(0);
            }
        }
    }
    return arr;
}