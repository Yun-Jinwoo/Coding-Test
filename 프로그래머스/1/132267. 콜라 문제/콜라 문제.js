function solution(a, b, n) {
    var answer = 0;
    let remain = 0;
    while(n >= a){
        answer += b * Math.floor(n/a);
        remain = n%a;
        n = b * Math.floor(n/a) + remain
    }
    return answer;
}