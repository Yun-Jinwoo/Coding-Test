function solution(s) {
    let arr = s.split('');
    let result = arr.sort((a,b) => b.charCodeAt() - a.charCodeAt()).join('')
    
    return result;
}