function solution(quiz) {
    let result = [];

    for(let a of quiz){
        let answer = 0;
        let no_blank = a.split(' ');
        if(no_blank[1] === "+"){
            answer = +no_blank[0] + +no_blank[2];
        }
        else if(no_blank[1] === "-"){
            answer = +no_blank[0] - +no_blank[2];
        }
        if(answer === +no_blank[4]){
            result.push("O")
        }
        else{
            result.push("X")
        }
    }
    return result;
}