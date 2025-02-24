function solution(n) {
    let arr = String(n).split('');
    
    return Number(arr.map(Number).sort((a,b) => b - a).join(''));
}