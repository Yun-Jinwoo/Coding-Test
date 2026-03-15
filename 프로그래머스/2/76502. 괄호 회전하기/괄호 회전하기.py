def solution(s):
    answer = 0
    for i in range(len(s)):
        stack = []
        for j in range(len(s)):
            item = s[(i+j)%len(s)]
            if item == '[' or item == '(' or item == '{':
                stack.append(item)
            else:
                if len(stack) == 0:
                    stack.append(item)
                    break
                    
                if item == ']' and stack[-1] == '[':
                    stack.pop()
                elif item == ')' and stack[-1] == '(':
                    stack.pop()
                elif item == '}' and stack[-1] == '{':
                    stack.pop()
        
        if len(stack) == 0:
            answer += 1
    
    return answer
                    