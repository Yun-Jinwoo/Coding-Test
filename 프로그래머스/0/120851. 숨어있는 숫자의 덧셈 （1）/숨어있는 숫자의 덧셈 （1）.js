function solution(my_string) {
    let answer = 0;
    for(let a of my_string){
        if(a == parseInt(a)){
            answer += parseInt(a);
        }
    }
    return answer
}
