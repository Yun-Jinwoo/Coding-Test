function solution(people, limit) {
    let boat = 0;
    let arr = people.sort((a,b) => a - b);
    
    let i = 0;
    let j = arr.length - 1;
    
    while(i < j){
        if(arr[i] + arr[j] <= limit){
            i++;
            j--;
        } else{
            j--;
        }
        boat++;
    }
    if(i == j) boat++;
    return boat;
}