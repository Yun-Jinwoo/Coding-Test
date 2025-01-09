function solution(common) {
    var answer = 0;
    //등차수열인 경우
    if(common[1]-common[0] === common[2]-common[1]){
        let d = common[1]-common[0];
        answer = common[0] + common.length*d;
    }
    else if(common[1]/common[0] === common[2]/common[1]){
        let r = common[1]/common[0];
        answer = common[0]*(r)**common.length
    }
    return answer;
}