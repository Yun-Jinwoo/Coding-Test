def solution(word):
    cnt = 0
    answer = 0
    def dfs(w):
        nonlocal answer, cnt
        if len(w) > 5:
            return
        if w != '':
            cnt += 1
        if w == word:
            answer = cnt
            
        for i in ['A','E','I','O','U']:
            dfs(w+i)
    
    dfs('')
    return answer