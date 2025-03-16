function solution(lottos, win_nums) {
    const sameNum = lottos.filter(item => win_nums.includes(item)).length
    const zeroNum = lottos.filter(item => item === 0).length;
    const rank = {'0': 6, '1': 6, '2': 5, '3': 4, '4': 3, '5': 2, '6': 1}
    console.log(sameNum)
    console.log(zeroNum)
    return [rank[sameNum + zeroNum], rank[sameNum]]
}