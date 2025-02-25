function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    for(let a of sizes){
        a.sort((num1,num2) => num1 - num2);
        width.push(a[0]);
        height.push(a[1]);
    }
    answer = Math.max(...width)*Math.max(...height);
    
    return answer;
}