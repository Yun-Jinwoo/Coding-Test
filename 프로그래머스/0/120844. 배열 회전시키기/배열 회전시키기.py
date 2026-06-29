def solution(numbers, direction):
    if direction == 'right':
        a = numbers[-1]
        for i in range(len(numbers)-1, 0, -1):
            numbers[i] = numbers[i-1]
        numbers[0] = a
    if direction == 'left':
        a = numbers[-1]
        numbers[-1] = numbers[0]
        for i in range(0, len(numbers)-1):
            numbers[i] = numbers[i+1]
        numbers[-2] = a
    return numbers    