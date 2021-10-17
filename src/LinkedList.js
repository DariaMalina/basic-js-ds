const {ListNode} = require("../extensions/list-node.js");
class LinkedList {
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

module.exports = {LinkedList}