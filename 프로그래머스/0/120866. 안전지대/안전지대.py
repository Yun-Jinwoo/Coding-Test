def solution(board):
    new = []
    
    for i in range(len(board)):
        new.append([0]*len(board))
    
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == 1:
                for a in [i-1, i, i+1]:
                    for b in [j-1, j, j+1]:
                        if 0 <= a < len(board) and 0 <= b < len(board):
                            new[a][b] = 'x'
    
    ans = 0
    
    for i in new:
        for j in i:
            if j == 0:
                ans += 1
    
    return ans
    