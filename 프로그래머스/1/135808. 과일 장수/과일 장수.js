function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    let box = Math.floor(score.length / m)
    for(let i = 0; i < box; i++){
        answer += score[m*i + m - 1]*m
    }
    return answer;
}