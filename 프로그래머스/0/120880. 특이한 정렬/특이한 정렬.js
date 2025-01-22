function solution(numlist, n) {
    var answer = [];
    for(let i = 0; i < numlist.length; i++){
        answer.push([i,numlist[i]-n]);
    }
    let sortarr = answer.sort((a,b) => {
        if(Math.abs(a[1]) === Math.abs(b[1])){
            return b[1] - a[1];
        }
        return Math.abs(a[1]) - Math.abs(b[1])
    })
    let result = [];
    for(let i = 0; i < sortarr.length; i++){
        result.push(numlist[sortarr[i][0]])
    }
    return result;
}