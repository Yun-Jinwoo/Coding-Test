def solution(my_string, is_suffix):
    a = len(is_suffix)
    ans = my_string[-a:]
    if ans == is_suffix:
        return 1
    else:
        return 0