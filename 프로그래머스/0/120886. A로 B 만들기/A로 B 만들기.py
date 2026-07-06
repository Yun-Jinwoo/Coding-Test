def solution(before, after):
    a = list(after)
    for i in before:
        if i in a:
            a.remove(i)
        else:
            return 0
    return 1