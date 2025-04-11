function solution(id_list, report, k) {
    const map = new Map()
    const set = new Set(report);
    id_list.forEach((name) => {
        map.set(name, 0)
    })
    const report_list = [...set].map((r) => (r.split(' ')))
    const arr = [];
    report_list.forEach((report)=> {
        let num = map.get(report[1])
        map.set(report[1], num+1)
    })
    const stopped = [];
    for(const [key, val] of map){
        if(val >= k) stopped.push(key)
    }
    id_list.forEach((name) => {
        map.set(name, 0)
    })
    report_list.forEach((report) => {
        if(stopped.includes(report[1])){
            let num = map.get(report[0])
            map.set(report[0], num+1)
        }
    })
    return [...map.values()]
}