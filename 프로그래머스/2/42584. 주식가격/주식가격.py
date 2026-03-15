def solution(prices):
    stack = []
    answer = [0] * len(prices)
    for i in range(len(prices)):
        while stack and prices[stack[-1]] > prices[i]:
            j = stack.pop()
            answer[j] = i-j
        stack.append(i)
    
    while stack:
        j = stack.pop()
        answer[j] = len(prices) - j - 1
        
    return answer