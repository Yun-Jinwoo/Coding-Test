def solution(my_string, num1, num2):
    t = my_string[num2]
    my_string = list(my_string)
    my_string[num2] = my_string[num1]
    my_string[num1] = t
    
    return "".join(my_string)
    
    
    