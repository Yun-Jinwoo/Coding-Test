function solution(my_string, queries) {
    let arr = my_string.split('');
    for(let i = 0; i < queries.length; i++){
        let [s, e] = queries[i];
        while(s < e){
            [arr[s] , arr[e]] = [arr[e], arr[s]];
            s++;
            e--;
        }
    }
    let str = arr.join('');
    return str;
}