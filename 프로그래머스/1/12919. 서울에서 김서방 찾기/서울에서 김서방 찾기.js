function solution(seoul) {
    var answer = '';
    seoul.forEach((n,i) => {
        if(n === "Kim"){
            answer = `김서방은 ${i}에 있다`
        }
    })
    return answer;
}