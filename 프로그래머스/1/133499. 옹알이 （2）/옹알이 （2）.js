function solution(babbling) {
    let result = 0;
    
    for(let spell of babbling){
        let arr = [0, 0, 0, 0];
        while(spell.length > 0){
            if(spell.slice(0,3) === 'aya'){
                if(arr[0] === 0){
                    spell = spell.slice(3);
                    arr = [1, 0, 0, 0];
                    continue;
                }  
            } else if(spell.slice(0,2) === 'ye'){
                if(arr[1] === 0){
                    spell = spell.slice(2);
                    arr = [0, 1, 0, 0];
                    continue;
                }
            } else if(spell.slice(0,3) === 'woo'){
                if(arr[2] === 0){
                    spell = spell.slice(3);
                    arr = [0, 0, 1, 0];
                    continue;
                }
            } else if(spell.slice(0,2) === 'ma'){
                if(arr[3] === 0){
                    spell = spell.slice(2);
                    arr = [0, 0, 0, 1];
                    continue;
                }
            } 
            break;
        }
        if(spell.length === 0){
            result++;
        }
        
    }
    return result;
}