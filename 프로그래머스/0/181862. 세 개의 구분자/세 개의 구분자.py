def solution(myStr):
    
    # ex
    # "abc"
    # -> ['하나', '둘', '셋', '넷']
    
    answer = []
    word = ''
    for i in range(len(myStr)):
        if myStr[i] == 'a' or myStr[i] == 'b' or myStr[i] == 'c':
            if word != '':
                answer.append(word)
            word = ''
        else:
            word += myStr[i]
    
    if word != '':
        answer.append(word)
    
    if len(answer) == 0:
        return ["EMPTY"]
    else:
        return answer