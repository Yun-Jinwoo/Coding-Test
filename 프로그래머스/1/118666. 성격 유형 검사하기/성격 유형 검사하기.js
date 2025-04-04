function solution(survey, choices) {
    const obj = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    let result = '';
    survey.forEach((item, index) => {
        switch(choices[index]){
                case 1:
                    obj[item[0]] += 3;
                    break;
                case 2:
                    obj[item[0]] += 2;
                    break;
                case 3:
                    obj[item[0]] += 1;
                    break;
                case 4:
                    break;
                case 5:
                    obj[item[1]] += 1;
                    break;
                case 6:
                    obj[item[1]] += 2;
                    break;
                case 7:
                    obj[item[1]] += 3;
                    break;
            }
    })
    result += obj.R >= obj.T ? "R" : "T"
    result += obj.C >= obj.F ? "C" : "F"
    result += obj.J >= obj.M ? "J" : "M"
    result += obj.A >= obj.N ? "A" : "N"
    return result
}