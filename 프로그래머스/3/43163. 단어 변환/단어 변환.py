import sys

def isOneDiff(w1, w2):
    cnt = 0
    for i in range(len(w1)):
        if w1[i] != w2[i]:
            cnt += 1
    return True if cnt == 1 else False

def solution(begin, target, words):
    if target not in words:
        return 0
    answer = sys.maxsize
    visited = [False] * len(words)
    def dfs(word, cnt):
        nonlocal visited, answer
        if target == word:
            if cnt < answer:
                answer = cnt
        
        for i in range(len(words)):
            if not visited[i] and isOneDiff(word, words[i]):
                visited[i] = True
                dfs(words[i], cnt+1)
                visited[i] = False
        
    dfs(begin, 0)
    return answer