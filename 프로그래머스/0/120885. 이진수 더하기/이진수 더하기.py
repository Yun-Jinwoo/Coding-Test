def solution(bin1, bin2):
    
    # 아이디어 : 뒤집어서 풀기!!
    #  자릿수가 같은 경우
    #  1100, 1011 -> 10111
    #  1111, 1101 -> 
    answer = ""
    rBin1 = bin1[::-1]
    rBin2 = bin2[::-1]
    
    minLen = 0
    minBin = ''
    if len(rBin1) > len(rBin2):
        minLen = len(rBin1) - len(rBin2)
        minBin = 'rBin2'
    else:
        minLen = len(rBin2) - len(rBin1)
        minBin = 'rBin1'
    
    # 부족한 길이만큼 0을 채우는 과정
    for i in range(minLen):
        if minBin == 'rBin1':
            rBin1 += '0'
        else:
            rBin2 += '0'
    
    plusValue = 0
    
    for i in range(len(rBin1)):
        num1 = int(rBin1[i]) # 1
        num2 = int(rBin2[i]) # 0
        
        value = num1 + num2 + plusValue
        
        if value == 0:
            plusValue = 0
            answer += '0'
        elif value == 1:
            plusValue = 0
            answer += '1'
        elif value == 2:
            plusValue = 1
            answer += '0'
        elif value == 3:
            plusValue = 1
            answer += '1'
        
    if plusValue == 1:
        answer += '1'
        
    return answer[::-1]
    

    # 자릿수가 다른 경우도 고려!
    # 1100, 0001 = 1101
    # 0011, 1000 = 1011
    
    