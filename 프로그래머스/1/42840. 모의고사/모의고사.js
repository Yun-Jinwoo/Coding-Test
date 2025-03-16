function solution(answers) {
    let student1 = [1,2,3,4,5]
    let student2 = [2,1,2,3,2,4,2,5]
    let student3 = [3,3,1,1,2,2,4,4,5,5]
    
    let result = [0,0,0]
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === student1[i%student1.length]){
            result[0]++;
        }
        if(answers[i] === student2[i%student2.length]){
            result[1]++;
        }
        if(answers[i] === student3[i%student3.length]){
            result[2]++;
        }
    }
    
    let answer = [];
    let max = Math.max(...result);
    result.forEach((val, i) => {
        if(val === max){
            answer.push(i+1)
        }
    });
    return answer
}