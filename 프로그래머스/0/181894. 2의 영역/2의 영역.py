def solution(arr):
    
    # arr 안의 2를 찾아서
    # 2로 시작 , 2로 끝나는 리스트를 찾는다.
    # 단, 그런 리스트가 여러개이면 그중 가장 긴 리스트로.
    # 2가 한개면 [2], 2가 0개면 [-1] 리턴
    
    # [2, 1, 2]
    
    first = -1
    second = -1
    ans = []
    for i in range(len(arr)):
        if arr[i] == 2:
            first = i
            break
            
    for i in range(len(arr)-1, -1, -1):
        if arr[i] == 2:
            second = i
            break
            
    ans = arr[first:second+1]
    
    if first == -1:
        ans = [-1]
    elif second == -1:
        ans = [2]
    
    return ans