function solution(score) {
  const avgs = score.map(([a, b]) => (a + b) / 2);
  const answer = Array.from( {length: avgs.length }, () => 1);
  
  for (let i = 0; i < avgs.length; i++ ) {
    for (let j = 0; j < avgs.length; j++) {
      if (avgs[j] > avgs[i]) answer[i]++;
    }
  }
  return answer;
}