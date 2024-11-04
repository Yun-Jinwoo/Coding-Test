function solution(rank, attendance) {
    var answer = 0;
    let rankArr = [];
    for(let i = 0; i < rank.length; i++){
        if(attendance[i] === true){
            rankArr.push([rank[i],i]);
        }
    }
    // rank[i]의 오름차순으로 rankArr 정렬
    rankArr.sort((a, b) => a[0] - b[0]);
    
    answer = rankArr[0][1]*10000 + rankArr[1][1]*100 + rankArr[2][1]*1;
    
    return answer;
}