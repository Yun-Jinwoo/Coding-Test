def solution(my_string):
    # chr = 숫자 -> 문자
    # ord = 문자 -> 숫자
    up_start = ord("A")
    up_end = ord("Z")
    low_start = ord("a")
    low_end = ord("z")
    
    answer = []
    
    for i in range(up_start, up_end+1):
        count = 0
        for j in my_string:
            if ord(j) == i:
                count += 1
        answer.append(count)
    
    for i in range(low_start, low_end+1):
        count = 0
        for j in my_string:
            if ord(j) == i:
                count += 1
        answer.append(count)
    
        
    return answer