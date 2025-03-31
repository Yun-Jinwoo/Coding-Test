function solution(numbers, hand) {
    let key = [['1', '4', '7', '*'], ['2', '5', '8', '0'], ['3', '6', '9', '#']];
    let hands = {
        left: '*',
        right: '#'
    }
    let result = '';
    numbers.map(i => String(i)).forEach((item) => {
        let lefthand = 0
        let righthand = 0
        if(key[0].includes(item)){
            hands.left = item;
            result += 'L';
        } else if(key[2].includes(item)){
            hands.right = item;
            result += 'R';
        } else{
            if(key[0].includes(hands.left)){
                lefthand = Math.abs(key[0].indexOf(hands.left) - key[1].indexOf(item))+1
            } else{
                lefthand = Math.abs(key[1].indexOf(hands.left) - key[1].indexOf(item))
            }
            if(key[2].includes(hands.right)){
                righthand = Math.abs(key[2].indexOf(hands.right) - key[1].indexOf(item))+1
            } else{
                righthand = Math.abs(key[1].indexOf(hands.right) - key[1].indexOf(item))
            }
            
            if(lefthand > righthand){
                result += 'R';
                hands.right = item;
            } else if(lefthand < righthand){
                result += 'L';
                hands.left = item;
            } else{
                if(hand === "right"){
                    result += 'R'
                    hands.right = item
                } else{
                    result += 'L'
                    hands.left = item
                }
            }
        }
    })
    return result
}