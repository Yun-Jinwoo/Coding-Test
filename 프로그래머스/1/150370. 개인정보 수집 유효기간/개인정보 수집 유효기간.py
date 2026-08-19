def solution(today, terms, privacies):
    answer = []
    term = {}

    for t in terms:
        a, b = t.split()
        term[a] = int(b)

    y, m, d = map(int, today.split('.'))
    today = y * 12 * 28 + m * 28 + d

    for i in range(len(privacies)):
        date, kind = privacies[i].split()

        y, m, d = map(int, date.split('.'))

        # 개인정보 수집일 + 유효기간
        expire = y * 12 * 28 + m * 28 + d + term[kind] * 28

        if expire <= today:
            answer.append(i + 1)

    return answer