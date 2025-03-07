function solution(n) {
    let answer = 0;
    // [0,0,1,1,...] 배열 만들기
    let arr = new Array(n+1).fill(0); // 길이가 n인 배열 0으로 채우기
    arr.fill(1,2) // 인덱스 2부터 1로 채우기
    
    // i의 배수는 소수가 아니므로 0으로 바꾸기
    for(let i = 2; i <= n; i++){
        if(arr[i] === 0) continue;
        for(let j = 2*i; j <= n; j += i){
            arr[j] = 0;
        }
    }
    // 소수 인덱스의 값은 1
    for(let n of arr){
        answer += n
    }
    return answer;
}

