function solution(today, terms, privacies) {
    const date = today.split('.').map((item)=>Number(item))
    let result = [];
    const term_array = []
    terms.forEach((term) => {
        term_array.push(term.split(' '))
    })
    const map = new Map()
    term_array.forEach((item)=>{
        map.set(item[0],Number(item[1]))
    });
    
    const privacy_array = []
    privacies.forEach((privacy) => {
        privacy_array.push(privacy.split(/[.\s]/) )       
    })
    privacy_array.forEach((privacy, index) => {
        for(let i = 0; i < 3; i++){
            privacy[i] = Number(privacy[i])
        }
        privacy[1] = privacy[1] + map.get(privacy[3])
        while(privacy[1] > 12){
            privacy[1] -= 12;
            privacy[0] = privacy[0] + 1
        }
        
        privacy[2] -= 1;
        if(privacy[2] == 0){
            privacy[2] = 28;
            privacy[1] -= 1;
        }
        
        if(date[0] > privacy[0]) result.push(index+1);
        else if(date[0] == privacy[0]){
            if(date[1] > privacy[1]) result.push(index+1);
            else if(date[1] == privacy[1]){
                if(date[2] > privacy[2]) result.push(index+1);
            }
        }
    })
        
    
    return result
}