function solution(board, moves) {
    let stack = [];
    moves.forEach((item) => {
        for(let i = 0; i < board.length; i++){
            if(board[i][item-1] === 0){
                continue;
            }
            stack.push(board[i][item-1]);
            board[i][item-1] = 0;
            break;
        }
    })
    let result_stack = [...stack]
    for(let i = 0; ; i++){
        if(i >= result_stack.length){
            break;
        }
        if(result_stack[i] === result_stack[i+1]){
            result_stack.splice(i, 2);
            i = -1;
        }
    }
    return stack.length - result_stack.length
}