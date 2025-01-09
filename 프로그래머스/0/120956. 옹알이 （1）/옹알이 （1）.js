function solution(babbling) {
    var result = 0;
    for(let i =0; i<babbling.length; i++){
        let str = babbling[i];
        let x = 0;
        while(str.length > 0){
            if(str.slice(0,3) === "aya"){
                str = str.slice(3)
            }
            else if(str.slice(0,2) === "ye"){
                str = str.slice(2)
            }
            else if(str.slice(0,3) === "woo"){
                str = str.slice(3)
            }
            else if(str.slice(0,2) === "ma"){
                str = str.slice(2)
            }
            else{
                x = 1;
                break;
            }
        }
        if(x === 0){
            result++;
        }
                
    }
    return result;
}
