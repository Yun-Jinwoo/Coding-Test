def solution(board, moves):
    basket = []
    score = 0

    for i in moves:
        for j in range(len(board)):
            if board[j][i - 1] != 0:
                doll = board[j][i - 1]

                if len(basket) == 0:
                    basket.append(doll)

                elif basket[-1] != doll:
                    basket.append(doll)

                else:
                    basket.pop()
                    score += 2

                board[j][i - 1] = 0
                break

    return score