function solution(ingredient) {
    let result = 0;
    for(let i = 0; i < ingredient.length - 3; i++){
        if(ingredient.slice(i, i+4).join('') === '1231'){
            result++;
            ingredient.splice(i,4);
            i -= 4;
        }
    }
    return result;
}