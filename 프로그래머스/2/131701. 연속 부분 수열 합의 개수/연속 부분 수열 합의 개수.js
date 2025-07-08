function solution(elements) {
    let arr = [];
    let both = elements.concat(elements)
    for(let i = 1; i <= elements.length; i++){
        for(let j = 0; j < elements.length; j++){
            arr.push(both.slice(j, j+i).reduce((acc, cur) => acc + cur, 0));
        }
    }
    let set = new Set(arr);
    return [...set].length
}