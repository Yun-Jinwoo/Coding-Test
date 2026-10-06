def isPrime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

5
[]
def solution(n):
    ans = []
    d = 2
    
    while n != 1:
        if n % d == 0:
            ans.append(d)
            while n % d == 0:
                n = n / d
        d += 1   
            
    return ans
    