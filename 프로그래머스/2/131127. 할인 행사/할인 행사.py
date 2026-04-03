def solution(want, number, discount):
    dic = {}
    result = 0
    for i in range(len(want)):
        dic[want[i]] = number[i]
        
    for i in range(len(discount) - 10 + 1):
        new_dic = {}
        for j in range(10):
            if discount[i+j] in new_dic:
                new_dic[discount[i+j]] += 1
            else:
                new_dic[discount[i+j]] = 1
        if dic == new_dic:
            result += 1
            
    return result