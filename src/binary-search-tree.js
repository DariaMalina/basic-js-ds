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
  _min = null;
  _max = null;
  data = null;

  root() {
    return this.data;
  }

  add(data) {
    if (this._max < data) {
      this._max = data;
      this._min = data;
    }
    if (this._min > data) {
      this._min = data;
    }
    if (!this.data) {
      this.data = new Node(data);
    }
  }

  has(data) {
    return false;
  }

  find(data) {
    return null;
  }

  remove(data) {}

  min() {
    return this._min;
  }

  max() {
    return this._max;
  }
};
