function solution(s) {
    var answer = [];
    let arr = s.split('')
    let mid = Math.floor(s.length / 2);
    if(s.length/2 === mid){
        return arr.slice(mid-1, mid+1).join('');
    }
    else{
        return arr[mid];
    }
}