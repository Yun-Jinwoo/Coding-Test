def solution(new_id):
    
    # 1단계
    new_id = new_id.lower()
    
    # 2단계
    result = ""
    
    for i in new_id:
        if i.islower() or i.isdigit() or i in "-_.":
            result += i
            
    new_id = result
    
    # 3단계
    while ".." in new_id:
        new_id = new_id.replace("..", ".")
    
    # 4단계
    new_id = new_id.strip(".")
    
    # 5단계
    if new_id == "":
        new_id = "a"
    
    # 6단계
    new_id = new_id[:15]
    new_id = new_id.rstrip(".")
    
    # 7단계
    while len(new_id) < 3:
        new_id += new_id[-1]
    
    return new_id