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


            # 희망시간   # 출근한시간 # 요일 (1: 월 ~ 7: 일)
def solution(schedules, timelogs, startday):
    ans = 0

    new_dict = {}
    schedule_List = []
    for i in range(len(schedules)):
        schedule = []
        if len(str(schedules[i])) > 3:
            schedule.append(str(schedules[i])[:2])
            schedule.append(str(schedules[i])[2:])
        else:
            schedule.append(str(schedules[i])[0])
            schedule.append(str(schedules[i])[1:])

        schedule[0] = int(schedule[0])
        schedule[1] = int(schedule[1])
        if schedule[1] + 10 >= 60:
            schedule[1] -= 50
            schedule[0] += 1
        else:
            schedule[1] += 10
        
        if schedule[0] == 24:
            schedule[0] = 0

        schedule_List.append(schedule)

    for i in range(len(timelogs)):
        check = 0

        for j in range(7):
            day = (startday + j) % 7
            if day == 6 or day == 0:
                continue

            hour = 0
            minuet = 0
            if len(str(timelogs[i][j])) > 3:
                hour = int(str(timelogs[i][j])[:2])
                minuet = int(str(timelogs[i][j])[2:])
            else:
                hour = int(str(timelogs[i][j])[0])
                minuet = int(str(timelogs[i][j])[1:])

            if hour > schedule_List[i][0]:
                check = 1
            elif hour == schedule_List[i][0]:
                if minuet > schedule_List[i][1]:
                    check = 1

        if check != 1:
            ans += 1

    return ans



# 표기용 시간을 실제 시간으로 계산
def cal_real(time):
    si = time // 100
    boon = time % 100
    
    return si * 60 + boon


