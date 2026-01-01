def solution(bin1, bin2):
    # bin1 = 1001
    # bin2 = 1111
    
    answer = ""
    plusValue = 0
    minLen = 0
    rBin1 = bin1[::-1] # 1001
    rBin2 = bin2[::-1] # 1111
    minBin = ""

    if len(rBin1)>len(rBin2):
        minLen = len(rBin1) - len(rBin2)
        minBin = "rBin2"
    else:
        minLen = len(rBin2) - len(rBin1)
        minBin = "rBin1"

    for i in range(minLen):
        if minBin == "rBin1":
            rBin1 += "0"
        else:
            rBin2 += "0"

    print(rBin1)
    for i in range(len(rBin1)):
        num1 = int(rBin1[i])
        num2 = int(rBin2[i])
        value = num1+num2+plusValue

        if value == 0:
            plusValue = 0
            answer += "0"
        elif value == 1:
            plusValue = 0
            answer += "1"
        elif value == 2:
            plusValue = 1
            answer += "0"
        elif value == 3:
            plusValue = 1
            answer += "1"
    if plusValue == 1:
        answer += "1"

    return answer[::-1]