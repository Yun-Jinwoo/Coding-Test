function solution(str, skip, index) {
    let strArr = str.split('');
    let strNumArr = strArr.map((item) => item.charCodeAt())
    
    let skipArr = skip.split('');
    let skipNumArr = skipArr.map((item) => item.charCodeAt())
    
    for(let j = 0; j < strNumArr.length; j++){
        for(let i = 0; i < index; i++){
            if(strNumArr[j] === 'z'.charCodeAt()){
                strNumArr[j] = 'a'.charCodeAt();
            } else{
                strNumArr[j]++;
            }
            while(skipNumArr.includes(strNumArr[j])){
                if(strNumArr[j] === 'z'.charCodeAt()){
                    strNumArr[j] = 'a'.charCodeAt();
                } else{
                    strNumArr[j]++;
                }
            }
        }
    }
    let resultArr = strNumArr.map((item) => String.fromCharCode(item));
    return resultArr.join('')
}