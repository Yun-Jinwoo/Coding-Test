function solution(picture, k) {
    var answer = [];
    for(let a of picture){
        let enlargedarr = [];
        const arr = a.split('');
        for(let b of arr){
            for(let i = 0; i < k; i++){
                enlargedarr.push(b);
            }
        }
        let enlargedstr = enlargedarr.join('');
        for(let i = 0; i < k; i++){
            answer.push(enlargedstr);
        }
    }
    return answer;
}