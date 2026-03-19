def solution(babbling):
    bab_list = ["aya", "ye", "woo", "ma"]
    ans = 0
    
    for i in babbling:
        for j in bab_list:
            if j in i:
                i = i.replace(j, ' ')
        
        if i.strip() == '':
            ans += 1
    
    return ans
        
    
    ''