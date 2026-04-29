def solution(s):
    
    ans = ''
    
    now_index = 0
    for i in range(len(s)):
        if s[i] == ' ':
            now_index = 0
            ans += ' '
        else:
            if now_index % 2 == 0:
                ans += s[i].upper()
            else:
                ans += s[i].lower()
            now_index += 1
    
    return ans