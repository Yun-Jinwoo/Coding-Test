def solution(arr):
    a = 1
    while len(arr) > a:
        a *= 2
        
    for i in range(a - len(arr)):
        arr.append(0)
    
    return arr