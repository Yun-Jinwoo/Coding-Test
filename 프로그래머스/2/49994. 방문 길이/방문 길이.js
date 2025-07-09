function solution(dirs) {
    let x = 0;
    let y = 0;
    let arr = [];
    for(let dir of dirs){
        switch(dir){
            case "U":
                if(y === 5) break;
                if(!arr.includes(`U-${x}-${y}`) && !arr.includes(`D-${x}-${y+1}`)){
                    arr.push(`U-${x}-${y}`);
                }   
                y++;
                break;
            case "D":
                if(y === -5) break;
                if(!arr.includes(`U-${x}-${y-1}`) && !arr.includes(`D-${x}-${y}`)){
                    arr.push(`D-${x}-${y}`);
                }
                y--;
                break;
            case "R":
                if(x === 5) break;
                if(!arr.includes(`R-${x}-${y}`) && !arr.includes(`L-${x+1}-${y}`)){
                    arr.push(`R-${x}-${y}`);
                }
                x++;
                break;
            case "L":
                if(x === -5) break;
                if(!arr.includes(`R-${x-1}-${y}`) && !arr.includes(`L-${x}-${y}`)){
                    arr.push(`L-${x}-${y}`);
                }
                x--;
                break;
        }
        
    }
    let set = new Set(arr);
    return [...set].length
}