const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// Node = class {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  #deepAdd(curr, newNode) {
    if (curr.data < newNode.data) {
      if (curr.right === null) {
        curr.right = newNode;
      } else {
        this.#deepAdd(curr.right, newNode);
      }
    }
    if (curr.data > newNode.data) {
      if (curr.left === null) {
        curr.left = newNode;
      } else {
        this.#deepAdd(curr.left, newNode);
      }
    }
  }

  #searchDate(node, date) {
    if (node === null) {
      return false;
    } else if (node.data > date) {
      return this.#searchDate(node.left, date);
    } else if (node.data < date) {
      return this.#searchDate(node.right, date);
    } else if (node.data === date) {
      return true;
    }
  }

  #findDate(node, date) {
    if (node === null) {
      return null;
    } else if (node.data > date) {
      return this.#findDate(node.left, date);
    } else if (node.data < date) {
      return this.#findDate(node.right, date);
    } else if (node.data === date) {
      return node;
    }
  }

  #removeDate(node, data) {}

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this._root) {
      this._root = new Node(data);
    } else {
      this.#deepAdd(this._root, newNode);
    }
  }

  has(data) {
    return this.#searchDate(this._root, data);
  }

  find(data) {
    return this.#findDate(this._root, data);
  }

  remove(data) {
    if (this._root.data === data) {
      this._root = null;
    } else {
      this.#removeDate(this._root, data);
    }
  }

  min() {
    let minLeft = this._root.left;
    let min;
    while (minLeft !== null) {
      min = minLeft.data;
      minLeft = minLeft.left;
    }
    return min;
  }

  max() {
    let minRight = this._root.right;
    let max;
    while (minRight !== null) {
      max = minRight.data;
      minRight = minRight.right;
    }
    return max;
  }
};
