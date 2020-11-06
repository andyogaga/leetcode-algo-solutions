// Create a tree
// https://leetcode.com/problems/minimum-height-trees/discuss/616245/Intuitive-JavaScript-Solution-with-Leaves-Deletion

function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }
  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "Root already exists";
      }
    }
  }

  findBFS(data) {
    let _node = null;
    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
      return node;
    });
    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];
    if (cb) {
      while (queue.length) {
        const node = queue.shift();
        cb(node);
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

// (function test() {
//   const tree = new Tree();
//   tree.add("0");
//   tree.add("1", "0");
//   tree.add("2", "0");
//   tree.add("3", "0");
//   tree.add("4", "0");
//   tree.add("5", "0");
//   tree.add("6", "0");
//   console.log(tree);
// })();
