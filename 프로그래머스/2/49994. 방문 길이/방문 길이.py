def solution(dirs):
    move = set()
    x, y = 0, 0
    
    for dir in dirs:
        nx, ny = x, y
        
        if dir == "U":
            ny += 1
        elif dir == "D":
            ny -= 1
        elif dir == "L":
            nx -= 1
        elif dir == "R":
            nx += 1
        
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            move.add((x, y, nx, ny))
            move.add((nx, ny, x, y))
            x, y = nx, ny
            
    return len(move) // 2