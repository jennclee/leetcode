/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example:
Given binary tree [3,9,20,null,null,15,7], depth is 3.
*/

/*
  Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 */

const maxDepth = (root) => {
  const stack = [];
  stack.push(root);
  let currentNode = stack[stack.length - 1];
  let depthCounter = 0;
  let maxDepth = 0;

  while (stack.length > 0) {
    const node = currentNode;
    if (node.left) {
      stack.push(node.left);
      depthCounter++;
    }
    if (node.right) {
      stack.push(node.right);
      depthCounter++;
    }
    if (depthCounter > maxDepth) {
      maxDepth = depthCounter;
    }
    currentNode = stack.pop();
  }
  return depthCounter;
};

// const maxDepth = (root) => {
//   if (root === undefined || root === null) {
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };