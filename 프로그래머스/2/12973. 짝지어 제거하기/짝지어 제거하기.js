function solution(s) {
    let top = -1;
    const stack = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        if (top >= 0 && stack[top] === s[i]) {
            top--; // pop
        } else {
            stack[++top] = s[i]; // push
        }
    }
    return top === -1 ? 1 : 0;
}
