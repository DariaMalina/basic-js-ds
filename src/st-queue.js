const { NotImplementedError } = require('../extensions/index.js');

 const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addTailNode(value) {
    if (!this.head) {
      this.head = new ListNode(value)
    }

    if (this.tail) {
      this.tail.next = new ListNode(value)
      this.tail = this.tail.next
    } else {
      this.tail = this.head
    }
  }

  removeHeadNode() {
    let currentValue = this.head.value
    let current = this.head
    this.head = current.next
    return currentValue
  }
}

module.exports = class Queue {

  constructor() {
    this.list = new LL()
  }

  getUnderlyingList() {
    return this.list.head
  }

  enqueue(value) {
    this.list.addTailNode(value)
  }

  dequeue() {
    return this.list.removeHeadNode()
  }

}
