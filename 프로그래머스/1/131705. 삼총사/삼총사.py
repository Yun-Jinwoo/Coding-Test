def solution(number):
    ans = 0
    for i in range(len(number)-2):
        for j in range(i+1, len(number)-1):
            for l in range(j+1, len(number)):
                if number[i] + number[j] + number[l] == 0:
                    ans += 1
                    
    return ans