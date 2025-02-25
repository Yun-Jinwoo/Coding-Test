function solution(s, n) {
    let arr = [];
    for(let char of s){
        arr.push(get_next_alphabet(char,n));
    }
    return arr.join('');
}

function get_next_alphabet(char, n){
    if(char === " "){
        return " ";
    }
    let charnum = char.codePointAt();
    for(let i = 0; i < n; i++){
        if(charnum === 'z'.codePointAt()){
            charnum = 'a'.codePointAt();
            continue;
        }
        else if(charnum === 'Z'.codePointAt()){
            charnum = 'A'.codePointAt();
            continue;
        }
        charnum++;
    }
    
    return String.fromCharCode(charnum);
}