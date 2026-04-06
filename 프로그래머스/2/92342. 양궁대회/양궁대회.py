max_diff = -1
best = [-1]

def dfs(i, arrow_left, arrow_shot, info):
    global max_diff, best
    #print(arrow_shot, max_diff)
    if i == 11:
        arrow_shot[10] += arrow_left
        diff = calc(info, arrow_shot)
        if diff > 0:
            if max_diff < diff:
                max_diff = diff
                best = arrow_shot[:]
            elif max_diff == diff:
                if best[::-1] < arrow_shot[::-1]:
                    best = arrow_shot[:]
        arrow_shot[10] -= arrow_left
        return
    
    need = info[i] + 1
    if arrow_left >= need:
        arrow_shot[i] = need
        dfs(i+1, arrow_left-need, arrow_shot, info)
        arrow_shot[i] = 0
    
    dfs(i+1, arrow_left, arrow_shot, info)
    
def calc(appeach, lion):
    appeach_score = 0
    lion_score = 0
    for i in range(11):
        if appeach[i] == 0 and lion[i] == 0:
            continue
        elif appeach[i] < lion[i]:
            lion_score += 10-i
        else:
            appeach_score += 10-i
    return lion_score - appeach_score

def solution(n, info):
    global max_diff, best
    dfs(0, n, [0]*11, info)
    return best