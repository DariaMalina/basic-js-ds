const { NotImplementedError } = require('../extensions/index.js');

 const {ListNode} = require('../extensions/list-node.js');
 const {LinkedList} = require("./LinkedList.js");

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


module.exports = class Queue {

  constructor() {
    this.list = new LinkedList()
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
