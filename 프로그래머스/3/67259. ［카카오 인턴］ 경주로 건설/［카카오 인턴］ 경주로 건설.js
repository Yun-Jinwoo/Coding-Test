class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items[this.head++];
  }

  isEmpty() {
    return this.head === this.items.length;
  }
}

function solution(board) {
  const n = board.length;

  const directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  const cost = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ({
      up: Infinity,
      down: Infinity,
      left: Infinity,
      right: Infinity,
    }))
  );

  const q = new Queue();

  // 시작 방향 두 개
  q.push([0, 0, "right", 0]);
  q.push([0, 0, "down", 0]);

  cost[0][0].right = 0;
  cost[0][0].down = 0;

  while (!q.isEmpty()) {
    const [x, y, dir, curCost] = q.pop();

    for (const [nextDir, [dx, dy]] of Object.entries(directions)) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (board[nx][ny] === 1) continue;

      let newCost;

      if (dir === nextDir) {
        newCost = curCost + 100;
      } else {
        newCost = curCost + 600;
      }

      if (cost[nx][ny][nextDir] > newCost) {
        cost[nx][ny][nextDir] = newCost;
        q.push([nx, ny, nextDir, newCost]);
      }
    }
  }

  const end = cost[n - 1][n - 1];

  return Math.min(end.up, end.down, end.left, end.right);
}