def solution(age):
    newStr = ''
    strAge = str(age)
    for i in range(len(strAge)):
        newStr += chr(int(strAge[i]) + 97)
    return newStr
    