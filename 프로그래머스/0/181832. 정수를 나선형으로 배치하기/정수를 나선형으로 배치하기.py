def solution(n):
    ansList = []
    
    for i in range(n):
        newList = [0]*n
        ansList.append(newList)
    
    x = 0
    y = 0
    # 오른쪽, 밑, 왼쪽, 위
    direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    dir_num = 0
    
    for i in range(1, n*n+1):
        ansList[x][y] = i
        
        nx = x + direction[dir_num][0]
        ny = y + direction[dir_num][1]
        
        if nx >= n or ny >= n or nx < 0 or ny < 0 or ansList[nx][ny] != 0:
            dir_num = (dir_num+1) % 4
            nx = x + direction[dir_num][0]
            ny = y + direction[dir_num][1]
        
        x = nx
        y = ny
        
    return ansList

        
        