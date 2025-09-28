def solution(num_list):
    a = 1
    b = 0
    for i in range(len(num_list)):
        a = num_list[i] * a
    
    for i in range(len(num_list)):
        b = num_list[i] + b
        
    if a > b*b:
        return 0
    else:
        return 1
        
    
    