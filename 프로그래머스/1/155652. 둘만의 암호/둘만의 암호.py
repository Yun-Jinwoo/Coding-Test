def solution(s, skip, index):
    ans = ''
    
    for i in s:
        now = ord(i)
        
        n = 0
        while n < index:
            now += 1
            
            if now > ord('z'):
                now = ord('a')
            
            if chr(now) in skip:
                continue
            
            n += 1
        
        ans += chr(now)
    return ans
    
'''    
    "aukks"	"wbqd"	5	"happy"

    a -> [b] c [d] e f g h
    u -> v [w] x y z a
    k -> l m n o p
    k -> l m n o p
    s -> t u v [w] x y
'''