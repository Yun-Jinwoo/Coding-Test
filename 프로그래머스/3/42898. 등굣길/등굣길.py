import sys

def solution(m, n, puddles):
    # dp[i][j] = i, j 에 도달할 수 있는 경우의 수
    # dp[i][j] = dp[i-1][j] + dp[i][j-1]
    # dp[i][j] if [i,j] in puddles = 0
    
    dp = [[0] * m for i in range(n)]
    dp[0][0] = 1
    for i in range(1, n):
        if [1, i+1] in puddles:
            continue
        else:
            dp[i][0] = dp[i-1][0]
            
    for i in range(1, m):
        if [i+1, 1] in puddles:
            continue
        else:
            dp[0][i] = dp[0][i-1]
    
    for i in range(1, n):
        for j in range(1, m):
            if [j+1, i+1] in puddles:
                continue
            else:
                dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % (10**9 + 7)
                
    for i in dp:
        print(i)
    return dp[n-1][m-1]
            