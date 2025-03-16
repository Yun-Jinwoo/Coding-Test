function solution(n, m, sections) {
    let result = 0;
    let painted = 0;
    for(let section of sections){
        if(section > painted){
            painted = section + m - 1;
            result++;
        }
    }
    return result
}