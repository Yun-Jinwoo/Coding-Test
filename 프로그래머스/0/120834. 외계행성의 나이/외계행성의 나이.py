def solution(age):
    
    l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    
    a = ''
    for i in range(len(str(age))):
        a += l[int(str(age)[i])]
        
    return a
        