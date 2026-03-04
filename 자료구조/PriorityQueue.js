class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  push(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  pop() {
    return this.queue.shift()?.value || null;
  }
}
