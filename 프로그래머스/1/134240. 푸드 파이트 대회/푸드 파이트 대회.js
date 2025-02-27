function solution(food) {
    let half_food = [1];
    for(let i = 1; i < food.length; i++){
        half_food.push(Math.floor(food[i]/2))
    }
    let result = [];
    for(let i = 1; i < half_food.length; i++){
        for(let j = 0; j < half_food[i]; j++){
            result.push(i);
        }
    }
    return result.join('') + "0" + result.reverse().join('');
}