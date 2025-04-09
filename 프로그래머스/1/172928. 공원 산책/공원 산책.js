function solution(park, routes) {
    routes = routes.map((item) => item.split(' '));
    let h = 0;
    let w = 0;

    // 시작 위치 찾기
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] === 'S') {
                h = i;
                w = j;
            }
        }
    }

    // 방향별 이동
    const direction = {
        'E': [0, 1],
        'W': [0, -1],
        'S': [1, 0],
        'N': [-1, 0],
    };

    routes.forEach(route => {
        const [dir, count] = [route[0], +route[1]];
        const [dh, dw] = direction[dir];
        let nh = h;
        let nw = w;
        let canMove = true;

        for (let i = 1; i <= count; i++) {
            const nextH = h + dh * i;
            const nextW = w + dw * i;

            // 유효 범위 벗어나면 중단
            if (
                nextH < 0 || nextH >= park.length ||
                nextW < 0 || nextW >= park[0].length ||
                park[nextH][nextW] === 'X'
            ) {
                canMove = false;
                break;
            }
        }

        if (canMove) {
            h += dh * count;
            w += dw * count;
        }
    });

    return [h, w];
}
