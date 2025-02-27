function solution(s) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let str = [];
    let result = [];
    for(let char of s){
        if(Number.isInteger(+char)){
            result.push(char);
        }
        else{
            str.push(char);
        }
        
        if(arr.includes(str.join(''))){
            result.push(arr.indexOf(str.join('')));
            str = [];
        }
    }
    return +result.join('')
}