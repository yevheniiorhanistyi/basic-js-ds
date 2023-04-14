const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = new Node(data);
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = new Node(data);
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let current = this.rootNode
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }

        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left;
        }

        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  min() {
    let current = this.rootNode
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.rootNode
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};