def solution(N, stages):
    
    fail_Dict = {}
    
    for stage_Num in range(1, N+1):
        approached = 0
        uncleared = 0
        
        for i in stages:
            if i >= stage_Num:
                approached += 1
            if i == stage_Num:
                uncleared += 1
        if approached == 0:
            fail_Dict[stage_Num] = 0
        else:
            fail_Dict[stage_Num] = uncleared/approached
    

    s = []
    for key, value in fail_Dict.items():
        s.append([value, key])
        
    s.sort(key=lambda x: (-x[0], x[1]))
    
    ans = []
    
    for i in range(len(s)):
        ans.append(s[i][1])
        
    return ans