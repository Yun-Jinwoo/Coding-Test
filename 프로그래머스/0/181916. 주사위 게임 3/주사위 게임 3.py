def solution(a, b, c, d):
    
    # Dictionary 활용
    dice_d = {}
    dice_l = [a,b,c,d]
    
    for i in dice_l:
        if i in dice_d:
            dice_d[i] += 1
        else:
            dice_d[i] = 1

    # 다 같은 경우
    # {a : 4}    
    if len(dice_d) == 1:
        p = a
        return 1111*p
    
    elif len(dice_d) == 2:    
        # 세 개만 같은 경우
        # {a : 3, b : 1}
        if 3 in dice_d.values():
            p = 0
            q = 9
            for key, value in dice_d.items():
                if value == 3:
                    p = key
                else:
                    q = key
            return (10*p+q) ** 2
            
        # 2개 2개 같은 경우
        # {a : 2, b : 2}
        else:
            l = []
            for k in dice_d.keys():
                l.append(k)
            return (l[0]+l[1])*abs(l[0]-l[1])
            
    
    # 2개 1개 1개 인 경우
    # 2 1 1
    elif len(dice_d) == 3: 
        l = []
        for key, value in dice_d.items():
            if value == 1:
                l.append(key)
        
        return l[0]*l[1]
                
                
    # 다 다른 경우
    # 1 1 1 1
    elif len(dice_d) == 4:
        dice_l.sort()
        return dice_l[0]