def solution(my_string, m, c):
    newList = []
    for i in range(int(len(my_string)/m)):
        newList.append(my_string[m*i:m*i+m])
    
    answer = ''
    for i in range(len(newList)):
        answer += newList[i][c-1]
    
    return answer