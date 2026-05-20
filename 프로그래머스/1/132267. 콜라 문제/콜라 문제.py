def solution(a, b, n):
    
    bonus = 0
    
    while n // a > 0:
        bonus += n//a * b
        print(bonus)
        n = n - n//a * a + n//a*b
        
    return bonus
'''
a = 3 b = 2

n = 20

n = 20 - 18  bonus = 12
n = 14

n = 2 bonus 8
n = 10

n = 1 bonus 6
n = 7

n = 1 bonus 4
n = 5
'''
