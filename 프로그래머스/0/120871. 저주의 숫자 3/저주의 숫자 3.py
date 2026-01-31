def solution(n):
    
    count = 0   # 10진법
    num = 0     # 3x 마을에서 쓰는 숫자
    
    while count < n:
        num += 1
        
        if num % 3 == 0 or '3' in str(num):
            continue        # count에 포함시키지 않기
        
        count += 1
    
    return num
    
    '''
    잘못된 풀이 (한번에 2칸 이상을 건너뛰어야할 경우에 불가능! (30, 31, 32, 33, 34 ...))
    ans = 1
    
    for i in range(n):
        if ans % 3 == 0 :
            ans += 1
        if '3' in str(ans):
            ans += 1
        ans += 1
    
    return ans
    '''
    