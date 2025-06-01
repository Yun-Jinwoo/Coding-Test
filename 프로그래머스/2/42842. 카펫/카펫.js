function solution(brown, yellow) {
  let answer = [];
  // x는 가로, y는 세로 (x와 y의 최소값은 3)
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    // x(가로) = (brown + yellow) / y(세로)
    let x = Math.floor((brown + yellow) / y);
    // x, y가 될 수 있는 수 중에서 yellow 수가 맞는 것 찾기
    if ((x - 2) * (y - 2) === yellow) {
      answer.push(x);
      answer.push(y);
      break;
    }
  }
  return answer;
}