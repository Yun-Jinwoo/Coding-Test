function solution(record) {
    const map = new Map();
    const result = [];
    for(const re of record){
        const [op, id, name] = re.split(' ');
        if(op === "Enter"){
            map.set(id, name);
            result.push([id,"님이 들어왔습니다."])
        } else if(op === "Leave"){
            result.push([id, "님이 나갔습니다."])
        } else if(op === "Change"){
            map.set(id, name);
        }
    }
    let answer = result.map((message) => {
        return map.get(message[0]) + message[1];
    })
    return answer
}