function solution(n, arr1, arr2) {
    let result = [];

    for (let i = 0; i < n; i++) {
        // 비트 OR 연산 사용
        let binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');

        // '1'은 '#', '0'은 ' '로 치환
        let mapLine = binary.replace(/1/g, '#').replace(/0/g, ' ');

        result.push(mapLine);
    }

    return result;
}