function solution(s) {
    var answer = s[0].toUpperCase();
    for(let i = 1; i < s.length; i++){
        answer += s[i].toLowerCase()
        if(s[i] === " "){
            if(s[i+1] === " " || i === s.length - 1){
                continue;
            }
            answer += s[i+1].toUpperCase();
            i++;
        }
    }
    return answer;
}