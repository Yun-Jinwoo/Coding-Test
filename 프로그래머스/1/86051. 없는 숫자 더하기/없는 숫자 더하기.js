function solution(numbers) {
    let sum = 0;
    let arr = new Array(10).fill(0);
    for(let i of numbers){
        arr[i] = 1;
    }
    arr.forEach((n,i) => {
        if(n === 0){
            sum += i;
        }
    })
    return sum;
}