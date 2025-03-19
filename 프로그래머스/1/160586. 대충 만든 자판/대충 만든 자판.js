function solution(keymap, targets) {
    let result = [];
    for(let target of targets){
        let sum = 0;
        for(let char of target){
            let num = [];
            let min = 0;
            for(let i = 0; i < keymap.length; i++){
                if(keymap[i].includes(char)){
                    num.push(keymap[i].indexOf(char) + 1);
                }
            }
            if(num.length === 0){
                sum = -1;
                break;
            }
            min = Math.min(...num);
            sum += min
        }
        result.push(sum)
    }
    return result
}