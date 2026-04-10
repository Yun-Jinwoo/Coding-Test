def solution(N, number):
    # dp[i] 는 N i개로 만들 수 있는 가능한 수
    # i개로 연산 만드는 법 = (j개) 연산 (i-j개) 
    
    # dp[1] = set{5}
    # dp[2] = set{55, 5+5, 5-5, 5*5, 5/5}
    # dp[3] = set{dp[1] + dp[2]}
    
    if N == number:
        return 1
    dp = [set() for i in range(9)]
    dp[1].add(N)
    
    for i in range(2, 9):
        dp[i].add(int(str(N) * i))
        for j in range(1, i):
            for m in dp[i-j]:
                for n in dp[j]:
                    dp[i].add(m+n)
                    dp[i].add(m-n)
                    dp[i].add(m*n)
                    if n != 0:
                        dp[i].add(m // n)
        if number in dp[i]:
            return i
    return -1