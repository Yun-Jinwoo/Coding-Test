function solution(new_id) {
    let result = new_id
    .toLowerCase()
    .match(/[a-z 0-9 \- _ .]/g).join('')
    .replaceAll(/[.]+/g, ".")
    .replaceAll(/(^\.)|(\.$)/g, "")
    
    result = result.length === 0 ? "a" : result
    result = result.length >= 16 ?
        result.slice(0,15).replace(/\.$/g, "") : result
    while(result.length <= 2){
        result += result[result.length-1]
    }
    return result;
}