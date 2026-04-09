def solution(triangle):
    # dp[i][j] = 위에서부터 0층이라고 하면, i층, j인덱스 위치에서의 최대값
    # dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
    n = len(triangle)
    dp = [[0] * n for _ in range(n)]
    
    dp[0][0] = triangle[0][0]
    
    for i in range(1, n):
        for j in range(i+1):
            dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
    
    return max(dp[n-1])