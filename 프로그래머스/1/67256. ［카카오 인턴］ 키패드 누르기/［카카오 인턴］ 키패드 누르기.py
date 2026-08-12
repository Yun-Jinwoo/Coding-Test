def solution(numbers, hand):
    answer = ""

    keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"]
    ]

    left = "*"
    right = "#"

    for number in numbers:

        if number in [1, 4, 7]:
            answer += "L"
            left = number

        elif number in [3, 6, 9]:
            answer += "R"
            right = number

        else:
            # 왼손 위치 찾기
            for i in range(4):
                for j in range(3):
                    if keypad[i][j] == left:
                        left_x = i
                        left_y = j

            # 오른손 위치 찾기
            for i in range(4):
                for j in range(3):
                    if keypad[i][j] == right:
                        right_x = i
                        right_y = j

            # 목표 숫자 위치 찾기
            for i in range(4):
                for j in range(3):
                    if keypad[i][j] == number:
                        target_x = i
                        target_y = j

            left_distance = abs(left_x - target_x) + abs(left_y - target_y)
            right_distance = abs(right_x - target_x) + abs(right_y - target_y)

            if left_distance < right_distance:
                answer += "L"
                left = number

            elif right_distance < left_distance:
                answer += "R"
                right = number

            else:
                if hand == "left":
                    answer += "L"
                    left = number
                else:
                    answer += "R"
                    right = number

    return answer