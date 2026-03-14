def solution(N, stages):
    now = {}
    
    fail = {}
    
    for i in range(1, N+2):
        now[i] = 0
        fail[i] = 0
    
    for i in stages:
        now[i] += 1
    
    total = len(stages)
    for i in range(1, N+1):
        if now[i] != 0:
            fail[i] = now[i]/total
            total -= now[i]
        else:
            fail[i] = 0
            
    del fail[N+1]
    
    a = sorted(fail, key=lambda x : fail[x], reverse=True)
    
    return a
    
    