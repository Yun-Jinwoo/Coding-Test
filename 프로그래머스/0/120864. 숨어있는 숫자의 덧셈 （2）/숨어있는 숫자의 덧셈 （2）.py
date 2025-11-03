def solution(my_string):
    answer = 0
    digit = ""
    for i in my_string:
        if i.isdigit():
            digit += i
        else:
            if digit != '':
                answer += int(digit)
            digit = ""

    if digit != '':
        answer += int(digit)
    
    return answer
