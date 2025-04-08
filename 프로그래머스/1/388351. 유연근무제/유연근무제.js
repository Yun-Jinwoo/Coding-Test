function solution(schedules, timelogs, startday) {
    const limits = schedules.map((item) => {
        let limit = item + 10
        if(Math.floor(limit % 100 / 10) >= 6){
            limit += 40
        }
        return limit
    })
    
    let result = 0
    
    timelogs.forEach((times, index) => {
        let ok = 0;
        times.forEach((time, day) => {
            if((day + startday)%7 === 6 || (day + startday)%7 === 0) return;
            if(time <= limits[index]) ok++;
        })
        if(ok === 5) result++;
    })

    return result
}