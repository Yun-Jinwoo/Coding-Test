function solution(dartResult) {
    const dartArray = dartResult.match(/\d+\D+/g)
    let scoreArray = [0,0,0];
    dartArray.forEach((result, i) => {
        let dart = result.match(/\d+|\D/g)
        if(dart[1] === 'S'){
            scoreArray[i] = Number(dart[0]);
        } else if(dart[1] === 'D'){
            scoreArray[i] = Number(dart[0]) ** 2;
        } else if(dart[1] === 'T'){
            scoreArray[i] = Number(dart[0]) **3;
        }
        
        if(dart.length === 3){
            if(dart[2] === '*'){
                if(i > 0){
                    scoreArray[i-1] *= 2
                }
                scoreArray[i] *= 2
            } else if(dart[2] === '#'){
                scoreArray[i] *= -1
            }
        }
    })
    return scoreArray.reduce((a,c) => a+c, 0)
}