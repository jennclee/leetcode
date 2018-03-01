/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root, arr) => {
  const array = arr || [];
  if (root !== null) {
    array.push(root.val);
  } else {
    return array;
  }
  if (root.left !== null) {
    preorderTraversal(root.left, array);
  }
  if (root.right !== null) {
    preorderTraversal(root.right, array);
  }
  return array;
};