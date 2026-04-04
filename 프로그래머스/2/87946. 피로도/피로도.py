def dfs(k, ans, dungeons, visited):
    answer = ans
    for i in range(len(dungeons)):
        if k >= dungeons[i][0] and not visited[i]:
            visited[i] = True
            answer = max(answer, dfs(k - dungeons[i][1], ans+1, dungeons, visited))
            visited[i] = False
    return answer        

def solution(k, dungeons):
    visited = [False] * len(dungeons)
    return dfs(k, 0, dungeons, visited)
    