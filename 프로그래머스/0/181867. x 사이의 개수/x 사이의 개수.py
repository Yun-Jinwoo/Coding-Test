def solution(myString):
    a = 0
    ans = []
    for i in range(len(myString)):
        if myString[i] == 'x':
            ans.append(a)
            a = 0
        else:
            a += 1
    ans.append(a)
    return ans