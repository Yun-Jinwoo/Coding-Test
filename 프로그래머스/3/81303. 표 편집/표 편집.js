function solution(n, k, cmd) {
  let up = Array(n).fill(0).map((_,i) => i-1);
  let down = Array(n).fill(0).map((_,i) => i+1);
  down[n-1] = -1;
  let point = k;
  let stack = []
  let deleted = Array(n).fill(false);

  for(let c of cmd){
    let [op, num] = c.split(' ');
    switch(op){
      case "U":
        for(let i = 0; i < +num; i++){
          point = up[point];
        }
        break;
      case "D":
        for(let i = 0; i < +num; i++){
          point = down[point];
        }
        break;
      case "C":
        deleted[point] = true;
        stack.push(point);

        let u = up[point];
        let d = down[point];
        if(u !== -1) down[u] = d;
        if(d !== -1) up[d] = u;
        point = d !== -1 ? d : u;
        break;
            
      case "Z":
        let re = stack.pop()
        deleted[re] = false;
        let ur = up[re];
        let dr = down[re];
        if(ur !== -1) down[ur] = re;
        if(dr !== -1) up[dr] = re;
        break;
    }
  }
  return deleted.map(e => (e ? "X" : "O")).join("")
}