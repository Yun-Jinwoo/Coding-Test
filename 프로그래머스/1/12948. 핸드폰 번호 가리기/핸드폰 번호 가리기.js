function solution(phone_number) {
    let len = phone_number.length
    let arr = new Array(len).fill('*');
    for(let i = len - 4; i < len; i++){
        arr[i] = phone_number[i];
    }
    return arr.join('');
}