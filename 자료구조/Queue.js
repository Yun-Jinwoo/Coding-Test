// 배열 이용 방식
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// 연결 리스트 이용 방식
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    const removeNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}
