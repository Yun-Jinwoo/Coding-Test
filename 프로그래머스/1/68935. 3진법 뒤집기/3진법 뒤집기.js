function solution(n) {
    var answer = 0;
    let num1 = n.toString(3);
    let num2 = num1.split('').reverse().join('');
    let num3 = parseInt(num2, 3);
    return num3;
}