def solution(schedules, timelogs, startday):
    answer = 0

    for i in range(len(schedules)):
        hour = schedules[i] // 100
        minute = schedules[i] % 100

        standard = hour * 60 + minute + 10

        success = True

        for j in range(7):
            day = (startday + j - 1) % 7 + 1

            if day == 6 or day == 7:
                continue

            hour = timelogs[i][j] // 100
            minute = timelogs[i][j] % 100

            arrive = hour * 60 + minute

            if arrive > standard:
                success = False
                break

        if success:
            answer += 1

    return answer