function pac(n){
    let ans = 1;
    for(let i = n; i >= 1; i--){
        ans*=i;
    }
    return ans;
}

function solution(balls, share) {
    var answer = pac(balls) / pac(balls - share) / pac(share);
    if(balls === share || share === 0){
        answer = 1;
    }
    return Math.round(answer);
}