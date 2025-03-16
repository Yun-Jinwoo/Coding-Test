function solution(nums) {
    let answer = 0;
    nums.sort((a,b) => b-a);
    let max = nums[0]+nums[1]+nums[2]
    
    let isDecimal = decimal(max);
    let arr = new Array();
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                arr.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    for(let i of arr){
        answer += isDecimal[i]
    }
    return answer;
}

function decimal(n){
    // 1️⃣ [0,0,1,1,...] 배열 만들기
    let arr = new Array(n+1).fill(0); // 길이가 n인 배열 0으로 채우기
    arr.fill(1,2) // 인덱스 2부터 1로 채우기
    
    // 2️⃣ i의 배수는 소수가 아니므로 0으로 바꾸기
    for(let i = 2; i <= n; i++){
        if(arr[i] === 0) continue;
        for(let j = 2*i; j <= n; j += i){
            arr[j] = 0;
        }
    }
    return arr;
}