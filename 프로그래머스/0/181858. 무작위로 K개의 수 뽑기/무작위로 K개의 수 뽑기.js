function solution(arr, k) {
    const uniqueElements = [...new Set(arr)];
    const answer = [];

    for (let i = 0; i < k; i++) {
        if (i < uniqueElements.length) {
            answer.push(uniqueElements[i]);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}