function solution(wallpaper) {
    const arr = [];
    wallpaper.forEach((item, index)=>{
        let first = item.indexOf('#');
        let last = item.lastIndexOf('#');
        arr.push([first, last, index])
    })
    let x_min = Math.max(wallpaper.length, wallpaper[0].length)
    let y_min = Math.max(wallpaper.length, wallpaper[0].length)
    let x_max = 0
    let y_max = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] < x_min && arr[i][0] !== -1){
            x_min = arr[i][0];
        }
        if(arr[i][1] > x_max && arr[i][1] !== -1){
            x_max = arr[i][1]
        }
        if(i < y_min && arr[i][0] !== -1){
            y_min = i;
        }
        if(i > y_max && arr[i][0] !== -1){
            y_max = i;
        }
    }

    return [y_min,x_min,y_max+1,x_max+1]
}