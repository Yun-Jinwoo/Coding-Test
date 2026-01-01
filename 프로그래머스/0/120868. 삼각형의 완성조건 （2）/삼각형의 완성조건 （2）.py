def solution(sides):
    
    # sides [q,w]
    
    # a,b,c
    
    # a + b > c
    
    ans = {}
    sides.sort()
    short, long = sides
    # sides 안에 가장 긴 변이 있을 경우
    for i in range(1, long):
        if short + i > long:
            ans[i] = 'true'
    # sides 안에 가장 긴 변이 없을 경우
    for i in range(long, short+long):
        ans[i] = 'true'
        
    return len(ans)