function solution(n, words) {
    let used = [words[0]];
    let end = 0;
    for(let i = 1; i < words.length; i++){
        if(used.includes(words[i]) || used[i-1][(used[i-1].length-1)] !== words[i][0] ){
            end = i + 1;
            break
        }else{
            used.push(words[i])
        }
    }
    if(end === 0) return [0,0]
    return [end%n === 0 ? n : end%n, Math.ceil(end/n)]
}