function solution(my_string) {
    let str = my_string.toLowerCase();
    let answer = [...str].sort().join('')
    
    return answer;
}