function solution(num_list) {
    
    let even = 0;
    let odd = 0;
    for(let a of num_list){
        if(a%2 === 0){
            even++;
        }
        else if(a%2 === 1){
            odd++;
        }
    }

    return [even, odd];
}