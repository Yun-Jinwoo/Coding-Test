def solution(s, n):
    
    ans = ""
    
    for i in s:
        if i == ' ':
            ans += ' '
            continue
            
        
        if ord(i) + n > ord('z') and i.islower():
            c = ord('z') + 1 - ord('a')
            ans += chr(ord(i) + n - c)
            
        elif ord(i) + n > ord('Z') and i.isupper():
            c = ord('Z') + 1 - ord('A')
            ans += chr(ord(i) + n - c)
        
        else:
            ans += chr(ord(i) + n)
    return ans




