function solution(my_string) {
    var answer = '';
    for(let a of my_string){
        if(a === a.toUpperCase()){ // 대문자
            answer += a.toLowerCase();
        }
        else if(a === a.toLowerCase()){ // 대문자
            answer += a.toUpperCase();
        }
    }
    return answer;
}