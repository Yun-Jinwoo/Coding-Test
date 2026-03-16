import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True
    
def solution(numbers):
    ans = 0
    visited = [False] * len(numbers)
    num = []
    made = set()
    
    def choose(cnt):
        nonlocal ans
        if cnt > 0:
            a = int(''.join(map(str, num)))
            if a not in made:
                made.add(a)
                if is_prime(a):
                    ans += 1
        
        for i in range(len(numbers)):
            if visited[i]:
                continue
                
            num.append(numbers[i])
            visited[i] = True
            choose(cnt+1)
            
            num.pop()
            visited[i] = False
        
    choose(0);
    
    return ans
        