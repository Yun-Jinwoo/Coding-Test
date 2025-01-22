function solution(board) {
    var answer = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                // 위쪽 3칸 X처리
                if (i > 0) {
                    // 위, 왼
                    if (j > 0 && board[i - 1][j - 1] !== 1) {
                        board[i - 1][j - 1] = 'x';
                    }
                    // 위
                    if (board[i - 1][j] !== 1) {
                        board[i - 1][j] = 'x';
                    }
                    // 위, 오
                    if (j < board[i].length - 1 && board[i - 1][j + 1] !== 1) {
                        board[i - 1][j + 1] = 'x';
                    }
                }
                // 양옆 2칸 처리
                // 왼
                if (j > 0 && board[i][j - 1] !== 1) {
                    board[i][j - 1] = 'x';
                }
                // 오
                if (j < board[i].length - 1 && board[i][j + 1] !== 1) {
                    board[i][j + 1] = 'x';
                }
                // 밑쪽 3칸 처리
                if (i < board.length - 1) {
                    // 밑, 왼
                    if (j > 0 && board[i + 1][j - 1] !== 1) {
                        board[i + 1][j - 1] = 'x';
                    }
                    // 밑
                    if (board[i + 1][j] !== 1) {
                        board[i + 1][j] = 'x';
                    }
                    // 밑, 오
                    if (j < board[i].length - 1 && board[i + 1][j + 1] !== 1) {
                        board[i + 1][j + 1] = 'x';
                    }
                }
            }
        }
    }

    // 0의 개수 세기
    for (let a of board) {
        for (let b of a) {
            if (b === 0) {
                answer++;
            }
        }
    }

    return answer;
}