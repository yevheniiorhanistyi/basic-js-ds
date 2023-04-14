const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const node = new ListNode(value);
    this.head ? this.tail.next = node : this.head = node;
    this.tail = node;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};
