function solution(prices) {
    let stack = [];
    let result = new Array(prices.length).fill(0);
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack.at(-1)] > prices[i]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        stack.push(i);
    }
    
    while (stack.length > 0) {
        const top = stack.pop();
        result[top] = prices.length - 1 - top;
    }
    return result;
}