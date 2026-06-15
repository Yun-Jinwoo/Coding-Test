def solution(babbling):
    babbling_list = ["aya", "ye", "woo", "ma"]
    
    ans = 0
    
    for i in babbling:
        
        for b in babbling_list:
            i = i.replace(b*2, 'X')
            
        for b in babbling_list:
            i = i.replace(b, ' ')
    
        if i.strip() == '':
            ans += 1
            
    return ans
        