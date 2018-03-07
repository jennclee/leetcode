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
  let depthCounter = 0;

  const countDepth = (node, depth) => {
    const d = depth || 0;
    if (node === null) {
      return;
    } else {
      if (!node.left && !node.right) {
        depthCounter = Math.max(depthCounter, d);
      }
      countDepth(node.left, d + 1);
      countDepth(node.right, d + 1);
    }
  }
  countDepth(root, 1);
  return depthCounter;
};

// const maxDepth = (root) => {
//   if (root === undefined || root === null) {
//     return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };