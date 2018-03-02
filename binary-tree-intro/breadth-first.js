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