def solution(arr):
    ans = 0
    before = arr[:]
    after = []
    
    while before != after:
        if len(after) != 0:
            before = after[:]
        after = []
        for i in before:
            if i >= 50 and i % 2 == 0:
                after.append(i/2)
            elif i < 50 and i % 2 == 1:
                after.append(i*2+1)
            else:
                after.append(i)
        ans += 1
        
    return ans - 1
        
    
    
    