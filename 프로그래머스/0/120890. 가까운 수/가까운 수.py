def solution(array, n):
    newArray = []
    for i in array:
        newArray.append(abs(n-i))
        
    min_val = min(newArray)
    
    if n - min_val in array:
        return n - min_val
    else:
        return n + min_val
    