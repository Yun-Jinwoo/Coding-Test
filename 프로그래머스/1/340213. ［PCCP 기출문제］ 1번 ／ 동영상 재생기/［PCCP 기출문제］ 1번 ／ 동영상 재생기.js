function solution(video_len, pos, op_start, op_end, commands) {
    [video_len, pos, op_start, op_end] = [video_len, pos, op_start, op_end]
    .map(item=>item.split(':')
    .map(Number))
    const toMinutes = ([hour, min]) => hour*60 + min
    if(toMinutes(op_start) <= toMinutes(pos) && toMinutes(pos) <= toMinutes(op_end)){
        pos = [...op_end]
    }
    console.log(op_end)
    commands.forEach((command) => {
        
        switch(command){
            case "next":
                pos[1] += 10
                if(pos[1] >= 60){
                    pos[1] -= 60;
                    pos[0] += 1;
                }
                if(toMinutes(pos) > toMinutes(video_len)){
                    pos = [...video_len]
                }
                break;
            case "prev":
                pos[1] -= 10
                if(pos[1] < 0){
                    pos[1] += 60;
                    pos[0] -= 1;
                }
                if(pos[0] < 0){
                    pos = [0,0]
                }
                
                break;
        }
        if(toMinutes(op_start) <= toMinutes(pos) && toMinutes(pos) <= toMinutes(op_end)){
            pos = [...op_end]
        }
    })

    return pos.map(i => i < 10 ? '0' + String(i) : String(i)).join(':')
    
}