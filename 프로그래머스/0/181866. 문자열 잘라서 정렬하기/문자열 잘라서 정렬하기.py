def solution(myString):
    a = myString.split("x")
    b = []
    
    for i in range(len(a)):
        if a[i] != '':
            b.append(a[i])
    
    
    b.sort()
    return b