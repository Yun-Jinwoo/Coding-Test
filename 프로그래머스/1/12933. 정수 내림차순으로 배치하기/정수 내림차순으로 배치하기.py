def solution(n):
    new_list = list(str(n))
    
    return int(''.join(sorted(new_list, reverse=True)))