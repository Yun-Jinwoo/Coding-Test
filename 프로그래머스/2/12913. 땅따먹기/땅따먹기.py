def solution(land):
    # dp[i][j] 는 마지막으로 i행 j열에 도달했을 때의 최대값
    # dp[i][j] = max(dp[i][j], dp[i-1][k]) + land[i][j] (k != j)
    n = len(land)
    dp = [[-1] * 4 for _ in range(n)]
    
    for i in range(4):
        dp[0][i] = land[0][i]
        
    for i in range(1, n):
        for j in range(4):
            for k in range(4):
                if j != k:
                    dp[i][j] = max(dp[i][j], dp[i-1][k] + land[i][j]) 
    
    return max(dp[n-1])
