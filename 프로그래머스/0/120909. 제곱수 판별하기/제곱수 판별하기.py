def solution(n):
    # n을 i로 나누면 몫도 i 여야 함
    # n을 i로 나눈 나머지는 0이여야 함
    
    # n = 144
    for i in range(2, n):
        if n // i == i and n % i == 0:
            return 1
    
    return 2
            