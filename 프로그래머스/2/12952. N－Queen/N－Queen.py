# + 방향, x 방향
# + 방향은 한줄씩 보면 됨
# x 방향은 대각선 규칙대로
# 오른쪽 밑 대각선 : x - y 가 같음 (-n+1 ~ n-1) 이므로 x - y + n 하면 1 ~ 2n-1
# 왼쪽 밑 대각선 : x + y 가 같음 x + y + 1 하면 1 ~ 2n-1

def find(n, y, row, diag1, diag2):
    if n == y:
        return 1
    
    ans = 0
    
    for i in range(n):
        if not row[i] and diag1[i-y+n] == 0 and diag2[i+y+1] == 0:
            row[i] = True
            diag1[i-y+n] = 1
            diag2[i+y+1] = 1
            ans += find(n, y+1, row, diag1, diag2)
            row[i] = False
            diag1[i-y+n] = 0
            diag2[i+y+1] = 0
        
    return ans

def solution(n):
    return find(n, 0, [False]*n, [0]*2*n, [0]*2*n)