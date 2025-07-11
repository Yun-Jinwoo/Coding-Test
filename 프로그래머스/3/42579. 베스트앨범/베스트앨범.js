function solution(genres, plays) {
    const genreMap = new Map();
    const songMap = new Map();
    let result = [];
    for(let i = 0; i < genres.length; i++){
        let genre = genres[i];
        let play = plays[i];
        if(genreMap.has(genre)){
            genreMap.set(genre, genreMap.get(genre) + play)
        } else{
            genreMap.set(genre, play);
        }
        if(songMap.has(genre)){
            let arr = songMap.get(genre)
            arr.push([i, play]);
            arr.sort((a,b) => b[1] - a[1]);
            if(arr.length > 2){
                arr.pop();
            }
            
        } else{
            songMap.set(genre, [[i, play]])
        }
    }
    let genreArr = [...genreMap].sort((a,b) => b[1] - a[1])
    for(let [genre, _] of genreArr){
        let songArr = songMap.get(genre);
        songArr.length === 2 ? result.push(songArr[0][0], songArr[1][0]) : result.push(songArr[0][0])
    }
    return result
}