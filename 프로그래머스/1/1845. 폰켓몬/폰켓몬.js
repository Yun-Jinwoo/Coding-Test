function solution(nums) {
    var answer = 0;
    let set = new Set(nums);
    let arr = [...set];
    if(arr.length > Math.floor(nums.length/2)){
        answer = Math.floor(nums.length/2)
    } else{
        answer = arr.length;
    }
    return answer;
}