function solution(my_string, overwrite_string, s) {
    var answer = '';
    let arr = my_string.split('');
    let firstarr = arr.slice(0, s);
    let lastarr = arr.slice(s+overwrite_string.length);
    let first = firstarr.join('');
    let last = lastarr.join('');
    answer = first + overwrite_string + last;
    return answer;
}