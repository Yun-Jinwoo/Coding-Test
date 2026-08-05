def solution(data, ext, val_ext, sort_by):
    idx = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }

    answer = []

    for d in data:
        if d[idx[ext]] < val_ext:
            answer.append(d)

    answer.sort(key=lambda x: x[idx[sort_by]])

    return answer