/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */

const levelOrder = (root) => {
  const array = [];
  if (root === null) {
    return array;
  }

  const addNode = (root, level) => {
    if (root === null) {
      return;
    } else {
      if (array.length === level) {
        array.push([]);
      }
      array[level].push(root.val);
      addNode(root.left, level + 1);
      addNode(root.right, level + 1);
    }
  }
  addNode(root, 0);
  return array;
};
 
 /*
 === QUEUE VERSION WITHOUT LEVELS IN ARRAYS ===
 const levelOrder = (root) => {
  const queue = [], array = [];
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue[0];
    array.push(currentNode.val);
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    queue.shift();
  }
  return array;
};
*/
