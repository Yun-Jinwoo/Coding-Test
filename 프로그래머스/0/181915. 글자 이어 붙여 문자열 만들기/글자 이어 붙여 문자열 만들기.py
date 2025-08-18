def solution(my_string, index_list):
    new_list = []
    for i in index_list:
        new_list.append(my_string[i])
        
    return "".join(new_list)