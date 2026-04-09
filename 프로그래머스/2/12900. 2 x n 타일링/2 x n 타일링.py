def solution(n):
    # dp[n] = 가로의 길이가 n인 타일 채우는 경우의수
    
    # dp[1] = 1
    # dp[2] = dp[1] + 1
    # dp[3] = dp[1] + dp[2]
    
    dp = [0]*(n+1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n+1):
        dp[i] = (dp[i-1] + dp[i-2]) % (10 ** 9 + 7)
    
    return dp[n]