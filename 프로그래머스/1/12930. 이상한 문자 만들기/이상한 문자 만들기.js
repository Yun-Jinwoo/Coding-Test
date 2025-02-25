function solution(s) {
    let arr = s.split('');
    let n = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ' '){
            n = 0;
            continue;
        }
        if(n%2 === 0){
            arr[i] = arr[i].toUpperCase();
            n+= 1;
        }
        else{
            arr[i] = arr[i].toLowerCase();
            n+= 1;
        }
    }
    return arr.join('');
}