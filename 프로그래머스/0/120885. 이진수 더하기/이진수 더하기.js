function solution(bin1, bin2) { 
    let num = +bin1 + +bin2;
    let arr = String(num).split('').map(Number);
    for(let i = arr.length - 1; i > 0; i--){ // 2번째 숫자부터 끝까지
        if(arr[i] === 2){
            arr[i] = 0;
            arr[i-1] += 1;
        }
        else if(arr[i] === 3){
            arr[i] = 1;
            arr[i-1] += 1;
        }
    }
    
    if(arr[0] === 2){
        arr[0] = 0;
        return [1].concat(arr).join('');
    }
    else if(arr[0] === 3){
        arr[0] = 1;
        return [1].concat(arr).join('');
    }
    else{
        return arr.join('')
    }
    
    
    
}